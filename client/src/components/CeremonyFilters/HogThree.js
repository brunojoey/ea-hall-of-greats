import { useEffect, useState } from "react";
import CeremonyTable from "../Table/ceremonyTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";
import YoutubeVideo from "../YoutubeVideo";

function HogThree({ history }) {
  const [games, setGames] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 3);
      setGames(data);
    }

    fetchData();
  }, [setGames]);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Third Hall of Greats</h3>
      {matches ? (
        <YoutubeVideo
          embedId="f3XsR6Z5Rlw"
          alt="Hall of Greats #3 Video"
        />
      ) : (
        <></>
      )}
      <CeremonyTable games={games} history={history} />
    </main>
  );
}

export default HogThree;
