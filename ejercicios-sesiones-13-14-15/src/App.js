// Partiendo del proyecto final, deberéis utilizar crear un formulario con el que crear tareas. Para hacer esto usaréis:
// Formik para el formulario.
// Yup para las validaciones.

import { useState } from "react";
import FormTask from "./components/FormTask";
import Tasks from "./components/Tasks";
import Task from "./models/task.model";

const container = {
  width: "1000px",
  margin: "0 auto",
  padding: "20px 40px",
  display: "flex",
  flexDirection: "column",
};

function App() {
  const [task, setTask] = useState([]);

  const addTask = (title) => {
    const id = task.length;
    const newTask = new Task(id, title);
    setTask([...task, newTask]);
  };

  const handleChange = (id) => {
    const updateTask = task.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    );

    setTask(updateTask);
  };

  return (
    <div style={container}>
      <FormTask addTask={addTask} />
      <Tasks task={task} handleChange={handleChange} />
    </div>
  );
}

export default App;
