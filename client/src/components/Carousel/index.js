import { useState, useEffect } from "react";
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
        games.map((game) => {
          return (
            <div>
              <figure className="home-page-card" style={{alignItems: "center"}}>
                <img
                  src={game.image}
                  alt={game.alt}
                  className="home-page-image"
                />
              </figure>
              <figure className="home-page-card" style={{alignItems: "center"}}>
                <img
                  src={game.image}
                  alt={game.alt}
                  className="home-page-image"
                />
              </figure>
              <figure className="home-page-card" style={{alignItems: "center"}}>
                <img
                  src={game.image}
                  alt={game.alt}
                  className="home-page-image"
                />
              </figure>
            </div>
          )
        })
    ) : (
        <></>
      )}
    </>
  );
}

export default GameCarousel;
