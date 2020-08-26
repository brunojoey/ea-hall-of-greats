import React, { useEffect, useState, useMemo } from "react";
import gamesAPI from "../../utils/gamesAPI";
import SortedTable from './sortedTable';
// import useSortableData from "../../utils/useSortableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

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
