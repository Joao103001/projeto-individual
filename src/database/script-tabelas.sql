-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

show databases;
use individual;

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  senha_hash VARCHAR(45) NOT NULL
);


CREATE TABLE quizzes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  pergunta TEXT NOT NULL,
  resposta_a VARCHAR(250) NOT NULL,
  resposta_b VARCHAR(250) NOT NULL,
  resposta_c VARCHAR(250) NOT NULL,
  resposta_d VARCHAR(250) NOT NULL,
  resposta_correta CHAR(1) NOT NULL
);


CREATE TABLE respostas_quiz (
  usuario_id INT,
  quiz_id INT,
  resposta_usuario CHAR(1) NOT NULL,
  acertou BOOLEAN NOT NULL,
  PRIMARY KEY (usuario_id, quiz_id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);