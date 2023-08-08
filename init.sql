CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(1000) DEFAULT NULL,
  `email` varchar(1000) DEFAULT NULL,
  `phone` varchar(1000) DEFAULT NULL,
  `password` varchar(1000) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'daniel','south africa','albert@gmail.com','0123456789','abcef','2023-07-07 17:56:31','2023-07-07 17:56:31'),
                           (2,'john','south africa','albert@gmail.com','0123456789','abcef','2023-07-07 18:05:27','2023-07-07 18:05:27'),
                           (4,'adam','south africa','albert@gmail.com','0123456789','abcef','2023-07-08 06:27:12','2023-07-08 06:27:12'),
                           (101,'michael','south africa','albert@gmail.com','0123456789','abcef','2023-07-08 03:21:53','2023-07-08 03:21:53');
UNLOCK TABLES;