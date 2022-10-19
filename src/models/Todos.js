import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
import { Tasks } from './Tasks.js'


export const Todos = sequelize.define('todos', {
  id_todo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
  },
  keywords: {
    type: DataTypes.STRING
  }
  
}, {
  timestamps: false
})

//Para la tabla Task le agregamos sus fk 
Todos.hasMany(Tasks, {
  foreignKey: 'todoID',  //La columna correspondiente a la fk
  sourceKey: 'id_todo'  //ID del modelo Todo
})

Tasks.belongsTo(Todos, {
  foreignKey: 'todoID',
  targetId: 'id_todo'
})

