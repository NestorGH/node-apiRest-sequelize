import app from './app.js'
import { PORT } from './config.js'
import { sequelize } from './db/db.js';

async function main() {
  try {
    await sequelize.authenticate(); //Probando la conexion a la BBDD
    console.log("Connection has been established successfully");
    app.listen(PORT);
    console.log('Server running on port', PORT);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main(); 
// app.listen(PORT); 
// console.log('Server running on port',PORT);