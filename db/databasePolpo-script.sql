CREATE DATABASE IF NOT EXISTS polpodb;
USE polpodb;

CREATE TABLE users (
  id_user INT(11) NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(45) DEFAULT NULL,
  lastName VARCHAR(45) DEFAULT NULL,
  email VARCHAR(40) DEFAULT NULL,

  PRIMARY KEY(id_user)
);

CREATE TABLE todos (
  id_todo INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(25) DEFAULT NULL,
  keywords VARCHAR(45) DEFAULT NULL,
  id_user INT(11) NOT NULL,

  CONSTRAINT fk_user FOREIGN KEY(id_user) REFERENCES users(id_user),
  PRIMARY KEY(id_todo)
);

CREATE TABLE tasks (
  id_task INT(11) NOT NULL,
  title VARCHAR(25) DEFAULT NULL,
  completed BIT,
  id_todo INT(11) NOT NULL,
  id_user INT(11) NOT NULL,
  
  CONSTRAINT fk_todo_task FOREIGN KEY(id_todo) REFERENCES todos(id_todo),
  CONSTRAINT fk_user_task FOREIGN KEY(id_user) REFERENCES users(id_user),
  PRIMARY KEY(id_task)

);