import app from './app.js'
import { PORT } from './config.js'
import { sequelize } from './db/db.js';

// import './models/Users.js'
// import './models/Todos.js'
// import './models/Tasks.js'

async function main() {
  try {
    await sequelize.sync({force: false}) //Recreamos la tablas
    app.listen(PORT);
    console.log('Server running on port', PORT);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main(); 
