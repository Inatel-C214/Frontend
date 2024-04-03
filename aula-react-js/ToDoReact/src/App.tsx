import { useEffect, useState } from "react";
import "./App.css";
import { ToDoList } from "./ToDoList/services/TodoList";
import { LocalStorageAdapter } from "./ToDoList/repository/LocalStorageAdapter";
import { Task } from "./ToDoList/models/Task";

type FormData = {
  title: string;
  description: string;
  targetDate: string;
  type?: string;
  priority?: string;
};

function App() {
  const localStorageAdapter = new LocalStorageAdapter();
  const tasks = new ToDoList(localStorageAdapter);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    targetDate: "",
    type: "",
    priority: "",
  });

  const [tasksList, setTasksList] = useState<Task[]>([]);

  const onChangeInput = (field: string, data: string) => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: data,
    }));
  };

  const createTask = () => {
    console.log("FMD", formData);
    tasks.add(formData);
  };

  const getTasks = () => {
    const list = tasks.getTasks() as Task[];
    console.log(list);
    if (!list) {
      return;
    }
    setTasksList(list);
  };

  useEffect(() => {
    getTasks();
  })

  return (
    <>
      <div className="box">
        <h1>ToDo List</h1>
        <form className="form">
          <div className="input-div">
            <label>Nome</label>
            <div
              style={{
                width: "10rem",
              }}
            >
              <input
                style={{
                  width: "95%",
                }}
                type="text"
                onChange={(e) => onChangeInput("title", e.target.value)}
              ></input>
            </div>
          </div>

          <div className="input-div">
            <label>Data de entrega</label>
            <div
              style={{
                width: "10rem",
              }}
            >
              <input
                style={{
                  width: "95%",
                }}
                type="text"
                onChange={(e) => onChangeInput("targetDate", e.target.value)}
              ></input>
            </div>
          </div>

          <div className="input-div">
            <label>Tipo</label>
            <div
              style={{
                width: "10rem",
              }}
            >
              <input
                style={{
                  width: "95%",
                }}
                type="text"
                onChange={(e) => onChangeInput("type", e.target.value)}
              ></input>
            </div>
          </div>

          <div className="input-div">
            <label>Prioridade</label>
            <div
              style={{
                width: "10rem",
              }}
            >
              <select
                style={{
                  width: "100%",
                }}
                onChange={(e) => onChangeInput("priority", e.target.value)}
              >
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
              </select>
            </div>
          </div>

          <div className="input-div">
            <label>Descrição</label>
            <div
              style={{
                width: "10rem",
              }}
            >
              <textarea
                rows={10}
                style={{
                  resize: "none",
                  width: "95%",
                }}
                onChange={(e) => onChangeInput("description", e.target.value)}
              ></textarea>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "right",
            }}
            className="input-div"
          >
            <button
              style={{
                borderRadius: 1,
                width: "100px",
              }}
              onClick={(e) => {
                e.preventDefault();
                createTask();
              }}
            >
              Salvar
            </button>
          </div>
        </form>

        <div>
          {tasksList.map((task) => (
            <div>Titulo: {task.title}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
