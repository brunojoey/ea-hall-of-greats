import React, { useEffect, useState } from "react";
import AllyTable from '../Table/allyTable';
import gamesAPI from "../../utils/gamesAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function DonCasanova(props) {
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
      console.log("DATA", data);
      data = data.filter((games) => games.ally === 'Don Casanova');
      console.log("NEW DATA", data);
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Don Casanova's Picks</h2>
      <AllyTable games={ally} history={history} />
    </div>
  );
}

export default DonCasanova;
