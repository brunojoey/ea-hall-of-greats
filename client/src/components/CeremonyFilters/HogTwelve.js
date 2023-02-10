import { useEffect, useState } from "react";
import CeremonyTable from "../Table/ceremonyTable";
import RundownTable from "../Table/rundownTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";
import YoutubeVideo from "../YoutubeVideo";

function HogTwelve({ history }) {
  const [games, setGames] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 12);
      setGames(data);
    }

    fetchData();
  }, [setGames]);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Twelfth Hall of Greats</h3>
      {matches ? (
        <YoutubeVideo
          embedId="BBwj6gpT_MM"
          alt="Hall of Greats #12 https://www.youtube.com/watch?v=BBwj6gpT_MM"
        />
      ) : (
        <></>
      )}
      <CeremonyTable games={games} history={history} />
      <h3 className="voting-title">The Voting Rundown</h3>
      <RundownTable games={games} history={history} />
    </main>
  );
}

export default HogTwelve;
