import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import AllyTable from '../Table/allyTable';
import gamesAPI from "../../utils/gamesAPI";

function DanielBloodworth(props) {
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
      data = data.filter((games) => games.ally === 'Daniel Bloodworth');
      console.log("NEW DATA", data);
      setAlly(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h4' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>Daniel Bloodworth's Picks</Typography>
      <AllyTable games={ally} history={history} />
    </div>
  );
}

export default DanielBloodworth;
