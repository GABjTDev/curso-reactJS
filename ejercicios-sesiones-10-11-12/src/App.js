// En este ejercicio tendréis que crear un componente el cual contenga un elemento, puede ser un rectángulo, cuadrado.

import { useRef } from "react";

// Las dimensiones del elemento serán de ancho 255px y de alto 255px y su color inicial tiene que ser negro.
// Dentro del componente crearéis varios métodos de captura del ratón que harán lo siguiente para que el color del elemento cambie:
// Un método para que cuando el ratón entre en el contenedor, se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.
// Un método para que cuando salga el ratón del componente se detenga por completo el cambio de color.
// Por último, un método en el que cuando se pulsa dos veces en el componente, se tiene que detener el cambio de color.

const box = {
  width: "255px",
  height: "300px",
  backgroundColor: "black",
  transition: "all .2 ease",
};

function App() {
  const boxRef = useRef();

  let red = 0;
  let green = 0;
  let blue = 0;

  function generateColors() {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    boxRef.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  let randomColors;

  const handleOver = () => {
    randomColors = setInterval(generateColors, 100);
  };

  const handleLeave = () => {
    clearInterval(randomColors);
  };

  const handleDlbClick = () => {
    clearInterval(randomColors);
  };

  return (
    <div className="App">
      <h1>Box random Color</h1>
      <div
        style={box}
        onMouseEnter={handleOver}
        onMouseLeave={handleLeave}
        onDoubleClick={handleDlbClick}
        ref={boxRef}
      ></div>
    </div>
  );
}

export default App;
