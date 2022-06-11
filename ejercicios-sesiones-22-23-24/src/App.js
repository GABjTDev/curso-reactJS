// Replicar desde cero el ejemplo de Redux que se ha realizado en la sesión 23, es importante asegurarse de haber asimilado y entendido todos los conceptos.
// Repositorio con el proyecto: https://gitlab.com/masajo/ob-react-redux.git

import { Provider } from "react-redux";
import Container from "./components/Container";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container mb-5">
        <h1>Practicando con redux saga</h1>
        <Container />
      </div>
    </Provider>
  );
}

export default App;
