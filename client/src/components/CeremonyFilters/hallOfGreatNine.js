import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CeremonyTable from "../Table/ceremonyTable";
import HogNineRundown from "../RundownFilters/hallOfGreatsNine";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";

function HallOfGreatOne(props) {
  const [games, setGames] = useState([]);
  const { history } = props;
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 9);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Ninth Hall of Greats</h3>
      {matches ? (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=SxhlPJK4J0g"
          className="hall-page-video"
          alt="Hall of Greats #9 https://www.youtube.com/watch?v=SxhlPJK4J0g"
        />
      ) : (
        <></>
      )}
      <CeremonyTable games={games} history={history} />
      <HogNineRundown games={games} history={history} />
    </main>
  );
}

export default HallOfGreatOne;
