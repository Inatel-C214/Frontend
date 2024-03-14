/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task } from '../models/Task'
import { ToDoList } from './TodoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
      const todoInstance = new ToDoList()
      const invalidValue: any = {
        invalidField: 'invalidValue'
      }
      todoInstance.add(invalidValue)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })
  })

  describe('getTasks', () => {
    test('should return an empty array when no tasks are added', () => {
      const todoList = new ToDoList()
      expect(todoList.getTasks()).toEqual([])
    })
  })

  describe('updateTask', () => {
    test('should update the specified task in the given index', () => {
      const todoList = new ToDoList()
      const task1: Task = {
        title: 'Task 1',
        description: 'Description 1',
        targetDate: '01/01/2025'
      }
      const task2: Task = {
        title: 'Task 2',
        description: 'Description 2',
        targetDate: '01/01/2025'
      }
      todoList.add(task1)
      todoList.add(task2)

      const updatedTask: Partial<Task> = {
        title: 'update_title',
        description: 'update_description'
      }
      todoList.updateTask(1, updatedTask)

      expect(todoList.getTasks()[1]).toEqual({ ...task2, ...updatedTask })
    })
  })

  describe('removeTask', () => {
    test('should remove the task specified in the given index', () => {
      const todoList = new ToDoList()
      const task1: Task = {
        title: 'Tarefa 1',
        description: 'Descrição 1',
        targetDate: '01/01/2025'
      }
      const task2: Task = {
        title: 'Tarefa 2',
        description: 'Descrição 2',
        targetDate: '01/01/2025'
      }
      todoList.add(task1)
      todoList.add(task2)

      todoList.removeTask(0)

      expect(todoList.getTasks()).toEqual([task2])
    })
  })
})
