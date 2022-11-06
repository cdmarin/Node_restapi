import { pool } from "../db.js";

export const pingIndex = async (req, res) => {
    const [result] = await pool.query("SELECT 1+1 AS RESULT");
    res.json(result);
}