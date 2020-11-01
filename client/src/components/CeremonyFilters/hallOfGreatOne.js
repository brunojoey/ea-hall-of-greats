import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { Typography } from "@material-ui/core";
import CeremonyTable from "../Table/ceremonyTable";
import HogOneRundown from '../RundownFilters/hallOfGreatsOne';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 1);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h3' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>The First Hall of Greats</Typography>
      <ReactPlayer url='https://www.youtube.com/watch?v=75w5xT9AOnA' className='hallOfGreatVideo' alt='Hall of Greats #1 https://www.youtube.com/watch?v=75w5xT9AOnA' />
      <CeremonyTable games={games} history={history} />
      <HogOneRundown games={games} history={history} />  
    </div>
  );
}

export default HallOfGreatOne;
