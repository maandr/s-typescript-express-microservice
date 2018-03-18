CREATE DATABASE IF NOT EXISTS service_name;

CREATE USER `service_name`@`%` IDENTIFIED BY `service_name_password`;
GRANT ALL PRIVILEGES ON `service_name`.* TO `service_name`@`%`;

FLUSH PRIVILEGES;
