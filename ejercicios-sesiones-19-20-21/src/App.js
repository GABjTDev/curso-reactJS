// Hacer una petición HTTP con Axios a la API descrita en la web https://api.chucknorris.io/ y crear un Componente React capaz de generar chistes aleatorios de Chuck Norris y mostrarlos.
// Debe haber un botón que permita al usuario generar nuevos chistes.
// También debe mostrarse un par de botones con Material UI que permitan votar (positivamente o negativamente un chiste).
// Se debe mostrar el número de chistes te "han gustado" y cuántos "te han disgustado".

import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Jokes from "./components/Jokes";

function App() {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);
  const [jokesStatus, setJokesStatus] = useState({
    likes: 0,
    dislikes: 0,
  });

  const handleButton = (e) => {
    if (e.target.name === "like") {
      setJokesStatus({ ...jokesStatus, likes: jokesStatus.likes + 1 });
    }

    if (e.target.name === "dislike") {
      setJokesStatus({ ...jokesStatus, dislikes: jokesStatus.dislikes + 1 });
    }

    generateRandom().then((res) => {
      setJoke(res);
      setLoading(false);
    });
  };

  async function generateRandom() {
    setLoading(true);

    const { data } = await axios("https://api.chucknorris.io/jokes/random");

    return data;
  }

  const handleNewJoke = () => {
    generateRandom().then((res) => {
      setJoke(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    generateRandom().then((res) => {
      setJoke(res);
      setLoading(false);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <h1>Chucknorris App</h1>
      {loading && <p>Cargando....</p>}
      {!loading && <Jokes joke={joke} handleButton={handleButton} />}
      {!loading && (
        <Button
          variant="contained"
          color="success"
          onClick={handleNewJoke}
          style={{ marginBottom: "15px" }}
        >
          Get New Joke
        </Button>
      )}
      <Typography style={{ color: "royalblue" }}>
        Likes: {jokesStatus.likes}
      </Typography>
      <Typography style={{ color: "red" }}>
        Dislikes: {jokesStatus.dislikes}
      </Typography>
    </Container>
  );
}

export default App;
