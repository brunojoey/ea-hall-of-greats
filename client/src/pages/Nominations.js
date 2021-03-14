import { useState, useEffect } from "react";
import NomineeTable from "../components/Table/nomineeTable";
// import SearchBar from '../components/SearchBar';
import StarDecoration from "../components/StarDecoration";
import gamesAPI from "../utils/gamesAPI";
import "./Pages.scss";

function Nominations({ history }) {
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      setGames(data);
    };

    fetchData();
  }, [setGames]);

  return (
    <main className="nominations-page">
      <StarDecoration />
      <h2 className="nominations-page-heading">The Notorious Nominees</h2>
      {/* <SearchBar games={games} history={history}/> */}
      <NomineeTable games={games} history={history} />
      <StarDecoration />
    </main>
  );
};

export default Nominations;