import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CeremonyTable from "../Table/ceremonyTable";
import RundownTable from "../Table/rundownTable";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";

function HallOfGreatThirteen(props) {
  const [games, setGames] = useState([]);
  const { history } = props;
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 13);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <main className="hall-page">
      <h3 className="hall-page-title">The Thirteenth Hall of Greats</h3>
      {matches ? (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=03jhRyoSUqQ"
          className="hall-page-video"
          alt="Hall of Greats #13 https://www.youtube.com/watch?v=03jhRyoSUqQ"
        />
      ) : (
        <> </>
      )}
      <CeremonyTable games={games} history={history} />
      <h3 className='voting-title'>The Voting Rundown</h3>
      <RundownTable games={games} history={history} />
    </main>
  );
};

export default HallOfGreatThirteen;