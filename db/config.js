// db.js
import { Pool } from "pg";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

// Create a pool using environment variables
const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // 👈 allows self-signed certificate
  },
});

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error connecting to the database:", err);
  }
  console.log("Connected to the database");

  client.query("SELECT version()", (err, result) => {
    release(); // release client back to pool
    if (err) {
      return console.error("Error running query:", err);
    }
    console.log(result.rows[0]); // prints PostgreSQL version
  });
});

export default pool;
