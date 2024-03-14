import { TaskModel } from '../database/database'
import { Task } from '../models/Task'

export async function createTask (task: Task): Promise< unknown[]> {
  try {
    const newTask = await TaskModel.create(task)
    return [newTask, null]
  } catch (error) {
    return [null, error]
  }
}

// export async function getUserTasks (): Promise<User | null> {
//   return await User.findByPk(id)
// }

// export async function updateUser (user: User): Promise<[number, User[]] | undefined> {
//   return await User.update(user, { where: { id: user.id } })
// }

// export async function deleteUser (id: number): Promise<void> {
//   const user = await User.findByPk(id)
//   if (user) {
//     await user.destroy()
//   }
// }
