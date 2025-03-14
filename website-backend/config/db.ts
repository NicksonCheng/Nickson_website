import mysql from "mysql2/promise";

type DatabasePool = mysql.Pool;

const db: DatabasePool = mysql.createPool({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "personal_website",
});

export default db;
