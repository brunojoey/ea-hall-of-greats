import { useEffect, useState } from "react";
import CeremonyTable from "../Table/ceremonyTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";
import YoutubeVideo from "../YoutubeVideo";

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
        <YoutubeVideo
          embedId="q1yyhGNn54A"
          alt="Hall of Greats #19 https://www.youtube.com/watch?v=q1yyhGNn54A"
        />
      ) : (
        // <ReactPlayer
        //   url="https://www.youtube.com/watch?v=q1yyhGNn54A"
        //   className="hall-page-video"
        <></>
      )}
      <CeremonyTable games={games} history={history} />
      <p style={{ textAlign: "center" }}>
        A runoff vote was held between the three allies not in the tie and the
        Twitch Chat as they received voting power!
      </p>
      <p style={{ textAlign: "center" }}>* Voting Was Not Disclosed</p>
    </main>
  );
}

export default HogNinteen;
