import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import gamesAPI from "../../utils/gamesAPI";

function GameCarousel() {
  const [games, setGames] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.victory === "True");
      let randomGame = data.random(data[0]);
      setGames(randomGame);
    }

    fetchData();
  }, [setGames]);

  return (
    <>
      {games ? (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={games.image}
                alt={games.name}
              />
              <Carousel.Caption>
                <h3>{games.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </>
        </Carousel>
      ) : (
        <></>
      )}
    </>
  );
}

export default GameCarousel;
