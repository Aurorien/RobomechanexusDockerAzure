const express = require("express"),
  path = require("path"),
  dotenv = require("dotenv"),
  { Client } = require("pg");

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

async function databaseConnection() {
  try {
    await client.connect();
    console.log("Database is running and the connection is established.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
databaseConnection();

const app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (_request, response) => {
  try {
    const sql =
      "SELECT c.chip_id, c.chip_name, c.chip_use, it.item_type_name FROM chip c INNER JOIN item_type it ON c.chip_item_type_id=it.item_type_id ";
    const { rows } = await client.query(sql);
    response.send(rows);
  } catch (error) {
    console.error("Error executing the SQL query:", error);
    response.status(500).send("Internal Server Error");
  }
});

app.post("/post", async (_request, response) => {
  try {
    console.log("Received JSON data from frontend:", _request.body);
    const { name, use, type } = _request.body;

    // Database transaction
    await client.query("BEGIN");

    if (type) {
      const insertItemTypeQuery =
        "INSERT INTO item_type (item_type_name) VALUES ($1) RETURNING item_type_id";
      const typeValues = [type];

      const { rows } = await client.query(insertItemTypeQuery, typeValues);
      const newItemTypeId = rows[0].item_type_id;

      if (name && use) {
        const insertChipQuery =
          "INSERT INTO chip (chip_name, chip_use, chipitem_type_id) VALUES ($1, $2, $3)";
        const chipValues = [name, use, newItemTypeId];
        await client.query(insertChipQuery, chipValues);
      }
    }

    await client.query("COMMIT");

    response.send("Data successfully inserted into the database");
  } catch (error) {
    await client.query("ROLLBACK");

    console.error("Error executing the SQL query:", error);
    response.status(500).send("Internal Server Error");
  }
});

app.use(express.static(path.join(path.resolve(), "public")));

app.listen(port, () => {
  console.log(`Ready at http://localhost:${port}/`);
});
