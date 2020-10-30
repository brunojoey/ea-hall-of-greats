import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';
import { Typography } from "@material-ui/core";
import HallOfGreatEightRundown from '../RundownFilters/hallOfGreatsEight';
import CeremonyTable from "../Table/ceremonyTable";
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 8);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h3' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>The Eighth Hall of Greats</Typography>
      <ReactPlayer url='https://www.youtube.com/watch?v=LKvBxu0tB0A' className='hallOfGreatVideo' alt='Hall of Greats #8 https://www.youtube.com/watch?v=LKvBxu0tB0A' />
      <CeremonyTable games={games} history={history} />
      <Link to="/rundowns/hall_great_eight" component={HallOfGreatEightRundown} />   
    </div>
  );
};

export default HallOfGreatOne;
