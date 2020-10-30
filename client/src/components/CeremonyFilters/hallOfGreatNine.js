import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography } from "@material-ui/core";
import CeremonyTable from "../Table/ceremonyTable";
import HallofGreatNineRundown from '../RundownFilters/hallOfGreatsNine';
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 9);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h3' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>The Ninth Hall of Greats</Typography>
      <ReactPlayer url='https://www.youtube.com/watch?v=SxhlPJK4J0g' className='hallOfGreatVideo' alt='Hall of Greats #9 https://www.youtube.com/watch?v=SxhlPJK4J0g' />
      <CeremonyTable games={games} history={history} />
      <Link to="/rundowns/hall_great_nine" component={HallofGreatNineRundown} />   
    </div>
  );
}

export default HallOfGreatOne;
