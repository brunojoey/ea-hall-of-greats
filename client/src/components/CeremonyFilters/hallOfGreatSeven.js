import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CeremonyTable from "../Table/ceremonyTable";
import RundownTable from "../Table/rundownTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";

function HallOfGreatSeven({ history }) {
  const [games, setGames] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 7);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Seventh Hall of Greats</h3>
      {matches ? (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KI8NvlEo18g"
          className="hall-page-video"
          alt="Hall of Greats #7 https://www.youtube.com/watch?v=KI8NvlEo18g"
        />
      ) : (
        <></>
      )}
      <CeremonyTable games={games} history={history} />
      <h3 className='voting-title'>The Voting Rundown</h3>
      <RundownTable games={games} history={history} />
    </main>
  );
};

export default HallOfGreatSeven;