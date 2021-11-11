import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import gamesAPI from "../../utils/gamesAPI";

function GameCarousel() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.victory === "True");
      let randomGame = Math.floor(Math.random() * data.length);
      console.log("Random Game", randomGame);
      setGames(data[randomGame]);
    }

    fetchData();
  }, [setGames]);

  return (
    <>
      {games ? (
        <figure className="home-page-card" style={{alignItems: "center"}}>
          <img
            src={games.image}
            alt={games.alt}
            className="home-page-image"
          />
        </figure>
    ) : (
        <></>
      )}
    </>
  );
}

export default GameCarousel;
