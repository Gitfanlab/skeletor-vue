CREATE DATABASE skeletor;
USE skeletor;

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL
);

INSERT INTO messages (content) VALUES ("Hello from API");