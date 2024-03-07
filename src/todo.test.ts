/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task, ToDoList, UpdateTask } from './TodoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('ToDoList', () => {
  describe('Add', () => {
    test('Should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })
  })

  describe('getTasks', () => {
    test('should return an empty array when no tasks are added', () => {
      const todoList = new ToDoList()
      expect(todoList.getTasks()).toEqual([])
    })

    it('should not return a reference to the internal tasks array', () => {
      const todoList = new ToDoList()
      todoList.add(anyTask)

      const returnedTasks = todoList.getTasks()
      returnedTasks[0].description = 'Modified description' // Modify the returned task

      expect(todoList.getTasks()[0].description).toEqual(anyTask.description) // Original task is not modified
    })
  })

  describe('Add', () => {
    it('should update the specified task in the given index', () => {
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

      const updatedTask: UpdateTask = {
        title: 'update_title',
        description: 'update_description'
      }
      todoList.updateTask(1, updatedTask)

      expect(todoList.getTasks()[1]).toEqual({ ...task2, ...updatedTask })
    })
  })
})
