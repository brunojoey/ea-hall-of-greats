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
      console.log("data", data)
      setGames(data);
    }

    fetchData();
  }, [setGames]);

  return (
    <>
      {games ? (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.igdb.com/igdb/image/upload/t_cover_big/co20ac.jpg"
              alt="Name"
            />
            <Carousel.Caption>
              <h3>Title</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.igdb.com/igdb/image/upload/t_cover_big/co20ac.jpg"
              alt="Name"
            />
            <Carousel.Caption>
              <h3>Title</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        <></>
      )}
    </>
  );
}

export default GameCarousel;
