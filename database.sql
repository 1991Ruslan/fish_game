-- CREATE DATABASE fish_game;

-- CREATE USER gus WITH password '0550';

-- ALTER USER gus WITH CREATEDB;

-- ALTER USER gus WITH SUPERUSER;

-- ALTER DATABASE fish_game OWNER TO gus;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    password VARCHAR(255),
    name VARCHAR(255),
    status VARCHAR(255),
    score INT
);

