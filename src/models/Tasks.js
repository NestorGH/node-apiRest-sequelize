import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'


export const Tasks = sequelize.define('tasks', {
  id_task: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
  },
  completed: {
    type: DataTypes.BOOLEAN
  }

}, {
  timestamps: false
})