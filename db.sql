CREATE DATABASE IF NOT EXISTS jouluvisa;

USE jouluvisa;

CREATE TABLE IF NOT EXISTS vastaukset (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vastaus VARCHAR(255) NOT NULL
);

INSERT INTO vastaukset (vastaus) VALUES
    ('Joulupukki'),
    ('Ruoka'),
    ('Perhe'),
    ('Lahjat'),
    ('Koristeet'),
    ('Joulukuusi'),
    ('Kinkku'),
    ('Piparit'),
    ('Tortut'),
    ('Joululaulut'),
    ('Home Alone');