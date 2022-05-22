import ContactComponent from "./components/ContactComponent";

// En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades:
// Mostrar contacto. Crear contacto. Eliminar contacto. Cambiar el estado del contacto entre Conectado y Desconectado.
function App() {
  return (
    <div className="container">
      <ContactComponent />
    </div>
  );
}

export default App;
