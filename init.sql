DROP TABLE IF EXISTS chip;
DROP TABLE IF EXISTS item_type;

CREATE TABLE item_type (
	item_type_id SERIAL PRIMARY KEY,
	item_type_name VARCHAR(200) NOT NULL
);


CREATE TABLE chip (
	chip_id SERIAL PRIMARY KEY,
	chip_name VARCHAR(200) NOT NULL,
	chip_use VARCHAR(1000),
	chip_item_type_id INT,
	FOREIGN KEY (chip_item_type_id) REFERENCES item_type(item_type_id)
);


INSERT INTO item_type (item_type_name)
VALUES
	('NanoxFlare'),
	('GreenerGarden'),
	('Equinox');


INSERT INTO chip (chip_name, chip_use, chip_item_type_id)
VALUES
	('Obsidiflake', 'sight in dark', 1),
	('Vantabyss', 'navigation in dark', 1),
	('Plantray', 'plantlife perspective', 2),
	('AlarmClock', 'alarmclock for comming in time', 3);
