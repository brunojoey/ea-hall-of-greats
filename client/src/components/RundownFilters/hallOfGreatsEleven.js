import React, { useEffect, useState } from "react";
import RundownTable from "../Table/rundownTable";
import gamesAPI from "../../utils/gamesAPI";

function HallOfGreatElevenRundown(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.hallOfGreat === 11);
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <section>
      <h3 className='voting-title'>The Voting Rundown</h3>
      <RundownTable games={games} history={history} />
    </section>
  );
}

export default HallOfGreatElevenRundown;