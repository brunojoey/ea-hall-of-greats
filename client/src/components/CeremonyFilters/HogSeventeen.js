import { useEffect, useState } from "react";
import CeremonyTable from "../Table/ceremonyTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";
import YoutubeVideo from "../YoutubeVideo";

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
        <YoutubeVideo
          embedId="ZwjNudvXV9o"
          alt="Hall of Greats #17 Video"
        />
      ) : (
        <> </>
      )}
      <CeremonyTable games={games} history={history} />
    </main>
  );
}

export default HogSeventeen;