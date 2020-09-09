import React, { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import SortedTable from '../SortableTable/sortedTable';
// import "./style.css";

function NomineeTable(props) {
  const { history } = props;
  const [games, setGames] = useState([]); 

  // Retrieves Database
  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      setGames(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <SortedTable games={games} history={history} />
    </div>
  );
}

export default NomineeTable;
