// get the client
import mysql from "mysql2"

const host = process.env.HOST;
const user = process.env.USER;
const database = process.env.DATABASE;

// create the connection to database
const connection = mysql.createConnection({
  host: host,
  user: user,
  database: database
});

export default connection;