#Published website on cloud service Azure:
http://108.142.200.49/

#Link/Clone-URL to GitHub-repository:
https://github.com/Aurorien/RobomechanexusDockerAzure.git

#Populate database with primordial data

1. Copy init.sql to the database container

Use the following command to copy the `init.sql` script to the `/docker-entrypoint-initdb.d/` directory within the PostgreSQL container:

docker cp init.sql RobomechanexusDockerAzure_database:/docker-entrypoint-initdb.d/

2. Execute the init.sql script in the database container

Run the following command to execute the init.sql script in the PostgreSQL container:

docker-compose exec database psql --username=postgres -d postgres -a -f /docker-entrypoint-initdb.d/init.sql
