// Utiliza useReducer y useContext para poder gestionar tareas en un proyecto de React. El proyecto debe permitir:
// Crear tareas
// Borrar tareas
// Filtrar tareas

import ContainerReducer from "./components/ContainerReducer";

// Repo para uso de useReducer y useContext: https://gitlab.com/masajo/ob-react-usereducer

function App() {
  return (
    <div className="App">
      <h1>UseReducer y UseContext</h1>
      <ContainerReducer />
    </div>
  );
}

export default App;
