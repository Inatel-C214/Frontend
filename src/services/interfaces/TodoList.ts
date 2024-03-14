import { Task } from '../../models/Task'

export interface TodoList {
    add: (task: Task) => void | string | Error
    getTasks: () => Task []
    updateTask: (index: number, task: Partial<Task>) => void
    removeTask: (index: number) => void
}
