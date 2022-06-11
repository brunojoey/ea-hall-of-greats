import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CeremonyTable from "../Table/ceremonyTable";
import RundownTable from "../Table/rundownTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";

function HogSeventeen({ history }) {
  const [games, setGames] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 17);
      setGames(data);
    }

    fetchData();
  }, [setGames]);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Seventeenth Hall of Greats</h3>
      {matches ? (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ZwjNudvXV9o"
          className="hall-page-video"
          alt="Hall of Greats #17 https://www.youtube.com/watch?v=ZwjNudvXV9o"
        />
      ) : (
        <> </>
      )}
      <CeremonyTable games={games} history={history} />
      <h3 className="voting-title">The Voting Rundown</h3>
      <RundownTable games={games} history={history} />
    </main>
  );
}

export default HogSeventeen;