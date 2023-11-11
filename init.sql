DROP TABLE IF EXISTS chip;
DROP TABLE IF EXISTS item_type;

CREATE TABLE item_type (
itemTypeId SERIAL PRIMARY KEY,
	itemTypeName VARCHAR(200) NOT NULL
);


CREATE TABLE chip (
chipId SERIAL PRIMARY KEY,
	chipName VARCHAR(200) NOT NULL,
	chipUse VARCHAR(1000),
	chipItemTypeId INT,
	FOREIGN KEY (chipItemTypeId) REFERENCES item_type(itemTypeId)
);


INSERT INTO item_type (itemTypeName)
VALUES
('NanoxFlare'),
('GreenerGarden'),
('Equinox');


INSERT INTO chip (chipName, chipUse, chipItemTypeId)
VALUES
('Obsidiflake', 'sight in dark', 1),
('Vantabyss', 'navigation in dark', 1),
('Plantray', 'plantlife perspective', 2),
('AlarmClock', 'alarmclock for comming in time', 3);
