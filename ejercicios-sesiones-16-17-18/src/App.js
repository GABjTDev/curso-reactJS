// Crear el sistema de enrutado de la aplicación en React:
// Permitir la navegación de Login a Registro y viceversa
// No podremos acceder a Tareas a no ser que nos hayamos logeado primero.
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
