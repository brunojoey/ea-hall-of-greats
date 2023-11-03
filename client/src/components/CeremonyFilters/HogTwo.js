import { useEffect, useState } from "react";
import CeremonyTable from "../Table/ceremonyTable";
import RundownTable from "../Table/rundownTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";
import YoutubeVideo from "../YoutubeVideo";

function HogTwo({ history }) {
  const [games, setGames] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 2);
      setGames(data);
    }

    fetchData();
  }, [setGames]);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Second Hall of Greats</h3>
      {matches ? (
        <YoutubeVideo
          embedId="4dqdQAJk90g"
          alt="Hall of Greats #2 Video"
        />
      ) : (
        <> </>
      )}
      <CeremonyTable games={games} history={history} />
    </main>
  );
}

export default HogTwo;
