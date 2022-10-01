import { pool } from '../db.js'; 

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT "Duquecito feliz" AS result')
  res.json(result[0])
}