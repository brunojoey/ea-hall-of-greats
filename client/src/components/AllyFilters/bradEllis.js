import React, { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import AllyTable from '../Table/allyTable';

function BradEllis(props) {
  const [ally, setAlly] = useState([]);
  const { history } = props;

  // function renderImages({ image, alt }) {
  //   imageJson.map((images) => {
  //     <Image src={buildRoutes(imageJson.image)} alt={imageJson.alt} />
  //   })
  // };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === 'Brad Ellis');
      console.log("DATA", data);
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Brad Ellis' Picks</h2>
      <AllyTable games={ally} history={history} />
    </div>
  );
}

export default BradEllis;
