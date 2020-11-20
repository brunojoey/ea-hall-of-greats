import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CeremonyTable from "../Table/ceremonyTable";
import HogTwelveRundown from "../RundownFilters/hallOfGreatsTwelve";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 12);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Twelfth Hall of Greats</h3>
      {matches ? (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=BBwj6gpT_MM"
          className="hall-page-video"
          alt="Hall of Greats #12 https://www.youtube.com/watch?v=BBwj6gpT_MM"
        />
      ) : (
        <></>
      )}
      <CeremonyTable games={games} history={history} />
      <HogTwelveRundown games={games} history={history} />
    </main>
  );
}

export default HallOfGreatOne;
