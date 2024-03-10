-- Create the database e8a2e4b4c6d6fc44163242858a49dc30723527f99d440583194b29442dad5f38
CREATE DATABASE IF NOT EXISTS blog_zelda;
USE blog_zelda;

-- Create a user and grant privileges
CREATE USER IF NOT EXISTS 'blog_user'@'%' IDENTIFIED BY 'blog_password';
GRANT ALL PRIVILEGES ON blog_zelda.* TO 'blog_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS characters (
    id_character INT AUTO_INCREMENT PRIMARY KEY,
    name_character VARCHAR(255) NOT NULL,
    description_character VARCHAR(255) NOT NULL,
    img_character TEXT
);

CREATE TABLE IF NOT EXISTS games (
    id_game int AUTO_INCREMENT PRIMARY KEY,
    name_game VARCHAR(255) NOT NULL,
    img_game VARCHAR(255) NOT NULL,
    date_released_game DATE NOT NULL,
    description_game VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS objects (
    id_object int AUTO_INCREMENT PRIMARY KEY,
    name_object VARCHAR(255) NOT NULL,
    img_object VARCHAR(255) NOT NULL,
    description_object VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS games_characters (
    id_character INT,
    id_game INT,
    PRIMARY KEY (id_character, id_game),
    FOREIGN KEY (id_character) REFERENCES characters(id_character),
    FOREIGN KEY (id_game) REFERENCES games(id_game)
);

CREATE TABLE IF NOT EXISTS games_objects (
    id_game INT,
    id_object INT,
    PRIMARY KEY (id_game, id_object),
    FOREIGN KEY (id_character) REFERENCES characters(id_character),
    FOREIGN KEY (id_game) REFERENCES games(id_game)
);