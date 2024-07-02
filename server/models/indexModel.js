const db = require("../config/db");

exports.getMessages = async () => {
  try {
    const conn = await db.getConnection();
    const [rows] = await conn.query("SELECT * FROM messages");
    conn.release();
    return rows;
  } catch (error) {
    console.error("Error in getMessages model:", error);
    throw error;
  }
};
