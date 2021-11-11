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
          <figure className="winner-page-card">
          <img
            src={games.image}
            alt={games.alt}
            className="winner-page-image"
          />
          <caption className="winner-page-caption">
            {" "}
            {games.game}
            <span style={{ display: "block" }}>&rarr;</span>
          </caption>
        </figure>
    ) : (
        <></>
      )}
    </>
  );
}

export default GameCarousel;
