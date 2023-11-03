import { useEffect, useState } from "react";
import CeremonyTable from "../Table/ceremonyTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";
import YoutubeVideo from "../YoutubeVideo";

function HogTwentyOne({ history }) {
  const [games, setGames] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 21);
      setGames(data);
    }

    fetchData();
  }, [setGames]);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Twenty-First Hall of Greats</h3>
      {matches ? (
        <YoutubeVideo
          embedId="naY-M3Otq4A"
          alt="Hall of Greats #21 Video"
        />
      ) : (
        <></>
      )}
      <CeremonyTable games={games} history={history} />
    </main>
  );
}

export default HogTwentyOne;
