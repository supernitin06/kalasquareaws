import pool from "../../db/config.js";

export const createUser = async (userData) => {
  const {
    firstName,
    lastName,
    email,
    callingNumber,
    city,
    gender,
    age,
    videoLink = null,
    status = true,
  } = userData;

  const query = `
    INSERT INTO "User" 
      ("firstName", "lastName", email, "callingNumber", city, gender, age, "videoLink", status, "createdAt", "updatedAt") 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;
  `;

  const now = new Date();
  const values = [
    firstName,
    lastName,
    email,
    callingNumber,
    city,
    gender,
    age,
    videoLink,
    status,
    now,
    now,
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
};
