import { useState } from "react";
import "./App.css";

type FormData = {
  title: string;
  description: string;
  targetDate: string;
  type?: string;
  priority?: string;
};

function App() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    targetDate: "",
    type: "",
    priority: "",
  });

  const onChangeInput = (field: string, data: string) => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: data,
    }));
  };

  return (
    <>
      <div className="box">
        <h1>ToDo List</h1>
        <form className="form">
          <div className="input-div">
            <label>Nome</label>
            <input
              type="text"
              onChange={(e) => onChangeInput("title", e.target.value)}
            ></input>
          </div>

          <div className="input-div">
            <label>Descrição</label>
            <input
              type="text"
              onChange={(e) => onChangeInput("description", e.target.value)}
            ></input>
          </div>

          <div className="input-div">
            <label>Data de entrega</label>
            <input
              type="text"
              onChange={(e) => onChangeInput("targetDate", e.target.value)}
            ></input>
          </div>

          <div className="input-div">
            <label>Tipo</label>
            <input
              type="text"
              onChange={(e) => onChangeInput("type", e.target.value)}
            ></input>
          </div>

          <div className="input-div">
            <label>Prioridade</label>
            <input
              type="text"
              onChange={(e) => onChangeInput("priority", e.target.value)}
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
