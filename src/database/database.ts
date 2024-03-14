import { Sequelize, DataTypes, Optional, Model } from 'sequelize'
import { Task } from '../models/Task'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.db'
})

type TaskAttributes = Optional<Task, 'id'>

export const TaskModel = sequelize.define<Model<TaskAttributes>>('Task', {
  id: {
    type: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  targetDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: true
  },
  subTasks: {
    type: DataTypes.STRING,
    allowNull: true
  }
})
