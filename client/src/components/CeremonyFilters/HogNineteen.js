import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CeremonyTable from "../Table/ceremonyTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";

function HogNinteen({ history }) {
  const [games, setGames] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 19);
      setGames(data);
    }

    fetchData();
  }, [setGames]);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Ninteenth Hall of Greats</h3>
      {matches ? (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Ka5kRNop_Kk"
          className="hall-page-video"
          alt="Hall of Greats #19 https://www.youtube.com/watch?v=q1yyhGNn54A"
        />
      ) : (
        <></>
      )}
      <CeremonyTable games={games} history={history} />
    </main>
  );
}

export default HogNinteen;