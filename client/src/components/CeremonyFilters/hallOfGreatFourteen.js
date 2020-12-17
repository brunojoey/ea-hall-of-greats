import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CeremonyTable from "../Table/ceremonyTable";
import RundownTable from "../Table/rundownTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";

function HallOfGreatFourteen({ history }) {
  const [games, setGames] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 14);
      setGames(data);
      console.log('games', games)
    }

    fetchData();
  });

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Fourteenth Hall of Greats</h3>
      {matches ? (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=SOSOYqCY0TI"
          className="hall-page-video"
          alt="Hall of Greats #14 https://www.youtube.com/watch?v=SOSOYqCY0TI"
        />
      ) : (
        <></>
      )}
      <CeremonyTable games={games} history={history} />
      <h3 className='voting-title'>The Voting Rundown</h3>
      <RundownTable games={games} history={history} />
      <p style={{textAlign: 'center'}}>* Assumed Votes Given</p>
    </main>
  );
};

export default HallOfGreatFourteen;