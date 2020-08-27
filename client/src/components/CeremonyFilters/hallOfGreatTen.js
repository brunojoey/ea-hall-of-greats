import React, { useEffect, useState } from "react";
import SortedTable from "../Table/sortedTable";
import gamesAPI from "../../utils/gamesAPI";

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
      data = data.filter((games) => games.hallOfGreat === 10);
      console.log("NEW DATA", data);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>The Tenth Hall of Greats</h2>
      <SortedTable games={games} history={history} />
    </div>
  );
}

export default HallOfGreatOne;
