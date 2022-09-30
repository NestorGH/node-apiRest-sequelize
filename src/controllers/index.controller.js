import { pool } from '../db.js'; //.js si son modulos propios

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT "DUQUECITO Feliz" AS result')
  res.json(result[0])
}