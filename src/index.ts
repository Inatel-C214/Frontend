/* eslint-disable @typescript-eslint/no-explicit-any */
import readline from 'readline'
import { promisify } from 'util'
import { Task, ToDoList } from './Todo'

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const userInput = promisify(reader.question).bind(reader)

async function getUserInput (prompt: string): Promise<any> {
  return await userInput(prompt)
}

const taskList = new ToDoList()

async function addNewTask () {
  const newTask: Task = {
    title: '',
    description: '',
    date: '',
    type: '',
    priority: ''
  }
  newTask.title = await getUserInput('Digite o título da tarefa: ')
  newTask.description = await getUserInput('Digite a descrição da tarefa: ')
  newTask.date = await getUserInput('Digite a data limite da tarefa: ')

  taskList.add(newTask)
}

async function startTodoList () {
  const userChoise = await getUserInput('Digite 1 para adicionar uma tarefa ou 0 para sair: ')

  switch (userChoise) {
    case '0':
      reader.close()
      return
    case '1':
      await addNewTask()
      reader.close()
      return
    default:
      reader.close()
  }
}

startTodoList()
