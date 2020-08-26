import React, { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
import SortedTable from '../components/Table/sortedTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Typography } from "@material-ui/core";
import "./Pages.css";
import '../components/Table/style.css';

// function renderImages() {
//   imageJson.map((images) => {
//     return(
//       <Image src={buildRoutes(images.image)} alt={images.alt} />
//     )
//   })
// };

function Winners(props) {
  const [games, setGames] = useState([]);
  // const [sortedField, setSortedField] = useState(null);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log('data', data);
      data = data.filter((games) => games.victory === 'True');
      setGames(data);
      console.log('data', data)
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //   let { data } = await GamesDB.ally;
  //   console.log("DATA", data);
  //   };

  //   fetchData();
  // }, [])
  
  return (
    <div>
      <Typography
        variant="h2"
        style={{ margin: ".5em 0 .5em 0", textAlign: "center" }}
      >
        The Illustrious Inductees
      </Typography>
      <SortedTable games={games} />
    </div>
  );
};

export default Winners;
