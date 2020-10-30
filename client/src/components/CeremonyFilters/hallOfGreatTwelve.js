import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import HallOfGreatTwelveRundown from '../RundownFilters/hallOfGreatsTwelve';
import ReactPlayer from 'react-player';
import { Typography } from "@material-ui/core";
import gamesAPI from "../../utils/gamesAPI";
import CeremonyTable from "../Table/ceremonyTable";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 12);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h3' style={{textAlign: 'center', margin: '.5em 0 .5em 0'}}>The Twelfth Hall of Greats</Typography>
      <ReactPlayer url='https://www.youtube.com/watch?v=BBwj6gpT_MM' className='hallOfGreatVideo' alt='Hall of Greats #12 https://www.youtube.com/watch?v=BBwj6gpT_MM'/>
      <CeremonyTable games={games} history={history} />
      <Link to="/rundowns/hall_great_twelve" component={HallOfGreatTwelveRundown} />
    </div>
  );
}

export default HallOfGreatOne;
