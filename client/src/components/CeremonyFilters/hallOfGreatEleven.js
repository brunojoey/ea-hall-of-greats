import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HallOfGreatElevenRundown from '../RundownFilters/hallOfGreatsEleven';
import ReactPlayer from 'react-player';
import { Typography } from "@material-ui/core";
import CeremonyTable from "../Table/ceremonyTable";
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 11);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h3' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>The Eleventh Hall of Greats</Typography>
      <ReactPlayer url='https://www.youtube.com/watch?v=fEJXc01mxGI' className='hallOfGreatVideo' alt='Hall of Greats #11 https://www.youtube.com/watch?v=fEJXc01mxGI' />
      <CeremonyTable games={games} history={history} />
      <Link to="/rundowns/hall_great_eleven" component={HallOfGreatElevenRundown} />   
    </div>
  );
}

export default HallOfGreatOne;
