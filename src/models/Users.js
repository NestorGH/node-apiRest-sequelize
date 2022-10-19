import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Tasks } from "./Tasks.js";
import { Todos } from './Todos.js';

//Definimos un modelo users para su tabla homónima
export const Users = sequelize.define('users', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
  
}, {
  timestamps: false
});

//Para la tabla Todos le agregamos su fk id_user
Users.hasMany(Todos, {
  foreignKey: 'userID',  //La columna correspondiente a la fk
  sourceKey: 'id_user'  //ID del modelo Users
})

Todos.belongsTo(Users, {
  foreignKey: 'userID',
  targetId: 'id_user'
})

// //Para la tabla Tasks le agregamos su fk id_user
// Users.hasMany(Tasks, {
//   foreignKey: 'id_user',  //La columna correspondiente a la fk
//   sourceKey: 'id_user'  //ID del modelo Users
// })

// Tasks.belongsTo(Users, {
//   foreignKey: 'id_user',
//   targetId: 'id_user'
// })