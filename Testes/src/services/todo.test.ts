/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TodoListRepository } from '../repository/TodoListRepository'
import { Task, UpdateTask } from '../models/Task'
import { ToDoList } from './TodoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

const makeRepository = (): TodoListRepository => {
  class TodoListStub implements TodoListRepository {
    create (task: Task): { success: unknown; error: unknown } {
      return {
        success: true,
        error: null
      }
    }

    getAll (): { success: unknown; error: unknown } {
      return {
        success: [anyTask],
        error: null
      }
    }

    update (task: UpdateTask): { success: unknown; error: unknown } {
      return {
        success: true,
        error: null
      }
    }

    delete (id: number): { success: unknown; error: unknown } {
      return {
        success: true,
        error: null
      }
    }
  }
  return new TodoListStub()
}

describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const repositoryStub = makeRepository()
      const todoInstance = new ToDoList(repositoryStub)
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
      const repositoryStub = makeRepository()
      jest.spyOn(repositoryStub, 'getAll').mockReturnValueOnce({
        success: [],
        error: null
      })
      const todoInstance = new ToDoList(repositoryStub)
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
      const repositoryStub = makeRepository()
      jest.spyOn(repositoryStub, 'getAll').mockReturnValueOnce({
        success: [],
        error: null
      })
      const todoInstance = new ToDoList(repositoryStub)
      expect(todoInstance.getTasks()).toEqual([])
    })
  })
})
