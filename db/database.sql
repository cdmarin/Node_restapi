DROP DATABASE MY_COMPANY_DB;

CREATE DATABASE IF NOT EXISTS MY_COMPANY_DB;

USE MY_COMPANY_DB;

CREATE TABLE IF NOT EXISTS EMPLOYEE (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(45),
    SALARY INT
);

INSERT INTO
    EMPLOYEE (NAME, SALARY)
VALUES
    ('Carlos', 1000),
    ('Henry', 2000),
    ('Pepe', 2200),
    ('Marcos', 2000),
    ('Adrián', 1400);