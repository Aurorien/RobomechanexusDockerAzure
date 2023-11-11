# Published website on cloud service Azure:

http://108.142.200.49/

# Link/Clone-URL to GitHub-repository:

https://github.com/Aurorien/RobomechanexusDockerAzure.git

# Populate database with primordial data

(Note: you might need to add sudo in front of all the following commands)

Run all following commands in the root folder where the compose.yaml is located.

## To initialze the database with the primordial data:

1. Run to start up the containers:
   docker compose up

1. Copy init.sql to the database container.
   Use the following command to copy the `init.sql` script to the `/docker-entrypoint-initdb.d/` directory within the PostgreSQL container:
   docker cp init.sql robomechanexusdockerazure-database-1:/docker-entrypoint-initdb.d

1. Execute the init.sql script in the database container:
   docker compose exec database psql --username=postgres -d postgres -a -f /docker-entrypoint-initdb.d/init.sql

## To reset your database to primordial state:

1. Close containers:
   docker compose down

2. Clear volume folder data:
   sudo rm -rf ./data

If that doesn't work, check ownership of the ./data folder:
s -ld ./data

and if it shows owner that is not you e.g. drwx------ 19 systemd-timesync, change ownership to your user:
sudo chown -R yourUsername:yourUsername ./data

Then run:
sudo rm -rf ./data

Check that ./data is cleared:
sudo ls ./data

3. Containers up:
   docker compose up

4. Copy init.sql to the database container.
   Use the following command to copy the `init.sql` script to the `/docker-entrypoint-initdb.d/` directory within the PostgreSQL container:
   docker cp init.sql robomechanexusdockerazure-database-1:/docker-entrypoint-initdb.d

5. Execute the init.sql script in the database container
   docker compose exec database psql --username=postgres -d postgres -a -f /docker-entrypoint-initdb.d/init.sql
