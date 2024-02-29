export type Task = {
    title: string,
    description: string,
    date: string,
    type?: string,
    priority?: string,
    subtasks?: Task[],
}

export class ToDoList {
  private tasks: Task[] = []

  add (task: Task) {
    this.tasks.push(task)
  }
}
