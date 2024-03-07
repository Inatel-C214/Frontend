export type Task = {
    title: string,
    description: string,
    targetDate: string,
    type?: string,
    priority?: string,
    subTasks?: Task []
}

export type UpdateTask = {
  title?: string,
  description?: string,
  targetDate?: string,
  type?: string,
  priority?: string,
  subTasks?: Task []
}

export class ToDoList {
  private tasks: Task[] = []

  add (task: Task) {
    try {
      // VALIDAR e INSERIR: FERE UM DOS PRINCÍPIOS DO SOLID
      // USAR LIB VALIDATOR: https://www.npmjs.com/package/validator
      this.tasks.push(task)
    } catch (error) {
      return error
    }
  }

  getTasks () {
    return this.tasks
  }

  updateTask (index: number, task: UpdateTask) {
    this.tasks[index] = {
      ...this.tasks[index],
      ...task
    }
  }

  removeTask (index: number) {
    this.tasks.splice(index, 1)
  }
}
