import { Task } from '../models/Task'
import { TodoList } from './interfaces/TodoList'

export class ToDoList implements TodoList {
  private tasks: Task[] = []

  add (task: Task) {
    const missingProperties = ['title', 'description', 'targetDate'].filter(
      (prop) => !Object.keys(task).includes(prop)
    )
    try {
      if (missingProperties.length > 0) {
        return 'Missing properties in task object'
      }
      this.tasks.push(task)
    } catch (error) {
      return new Error(JSON.stringify(error))
    }
  }

  getTasks () {
    return this.tasks
  }

  updateTask (index: number, task: Partial<Task>) {
    this.tasks[index] = {
      ...this.tasks[index],
      ...task
    }
  }

  removeTask (index: number) {
    this.tasks.splice(index, 1)
  }
}
