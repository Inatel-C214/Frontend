import { TaskModel } from './database'
import { UpdateTask, Task } from '../models/Task'

export async function createTask (task: Task): Promise< unknown[]> {
  try {
    await TaskModel.sync()
    const newTask = await (await TaskModel.create(task)).save()
    return [newTask, null]
  } catch (error) {
    console.log('ERRO', error)
    return [null, error]
  }
}

export async function getTasks (): Promise<unknown[]> {
  const response = await TaskModel.findAll({
    raw: true,
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
  return response
}

export async function updateTask (task: UpdateTask): Promise<boolean> {
  const [response] = await TaskModel.update(task, { where: { id: task.id } })
  if (response > 0) return true
  return false
}

export async function deleteTask (id: number): Promise<void> {
  const task = await TaskModel.findByPk(id)
  if (task) {
    await task.destroy()
  }
}

const taskEx = {
  id: 1,
  title: 'any_title3',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

// createTask(taskEx)
// getTasks()

const getAndShow = async () => {
  const res = await getTasks()
  const tk = res[0] as Task
  console.log(tk)
  console.log(tk.title)
}

getAndShow()
// updateTask(taskEx)
// deleteTask(1)
