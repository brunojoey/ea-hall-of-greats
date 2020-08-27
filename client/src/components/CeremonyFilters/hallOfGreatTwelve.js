import React, { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import CeremonyTable from "../Table/ceremonyTable";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  // function renderImages({ image, alt }) {
  //   imageJson.map((images) => {
  //     <Image src={buildRoutes(imageJson.image)} alt={imageJson.alt} />
  //   })
  // };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      data = data.filter((games) => games.hallOfGreat === 12);
      console.log("NEW DATA", data);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>The Twelfth Hall of Greats</h2>
      <CeremonyTable games={games} history={history} />
    </div>
  );
}

export default HallOfGreatOne;
