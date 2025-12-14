import pool from "../../db/config.js";



const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS "User" (
      id SERIAL PRIMARY KEY,
      "firstName" VARCHAR(100) NOT NULL,
      "lastName" VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      "callingNumber" VARCHAR(20) NOT NULL,
      city VARCHAR(100) NOT NULL,
      gender VARCHAR(20) NOT NULL,
      age INT NOT NULL,
      "videoLink" TEXT,
      status BOOLEAN DEFAULT TRUE,
      "createdAt" TIMESTAMP DEFAULT NOW(),
      "updatedAt" TIMESTAMP DEFAULT NOW()
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
