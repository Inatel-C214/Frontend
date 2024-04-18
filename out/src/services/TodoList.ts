import { TodoListRepository } from '../repository/TodoListRepository'
import { Task, UpdateTask } from '../models/Task'
import { TodoList } from './interfaces/TodoList'
export class ToDoList implements TodoList {
  repository: TodoListRepository
  constructor (repository: TodoListRepository) {
    this.repository = repository
  }

  add (task: Task) {
    const missingProperties = ['title', 'description', 'targetDate'].filter(
      (prop) => !Object.keys(task).includes(prop)
    )
    try {
      if (missingProperties.length > 0) {
        return 'Missing properties in task object'
      }

      const response = this.repository.create(task)
      if (response.error) {
        return 'Falha ao criar tarefa'
      }
      return 'Tarefa criada com sucesso'
    } catch (error) {
      return new Error(JSON.stringify(error))
    }
  }

  getTasks () {
    const response = this.repository.getAll()
    if (response.error) {
      return 'Falha ao listar tarefas'
    }
    return response.success
  }

  updateTask (task: UpdateTask) {
    this.repository.update(task)
  }

  removeTask (id: number) {
    this.repository.delete(id)
  }
}
