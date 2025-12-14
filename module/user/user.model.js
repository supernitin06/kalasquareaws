import pool from "../../db/config.js";



const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS "User" (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      calling_number VARCHAR(20) NOT NULL,
      city VARCHAR(100) NOT NULL,
      gender VARCHAR(20) NOT NULL,
      age INT NOT NULL,
      video_link TEXT,
      status BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `;

  try {
    await pool.query(query);
    console.log("✅ User table ready");
  } catch (err) {
    console.error("❌ Error creating User table:", err);
  }
};

export default createUserTable;

