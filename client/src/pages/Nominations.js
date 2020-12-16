import { useState, useEffect } from "react";
import NomineeTable from "../components/Table/nomineeTable";
import SearchBar from '../components/SearchBar';
import StarDecoration from "../components/StarDecoration";
import gamesAPI from "../utils/gamesAPI";
// import Loader from "react-loader-spinner";
import "./Pages.scss";

function Nominations({ history }) {
  const [word, setWord] = useState(" ");
  const [games, setGames] = useState([]);

  const [filter, setFilter] = useState(games);

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      setGames(data);
    }

    fetchData();
  }, []);

  const handleChange = event => {
    let oldGameList = [];
    oldGameList = games.map(gameQuery => {
      return (
        <tbody key={gameQuery._id}>
          <tr>
            <td
              className="table-infoE"
              style={{
                padding: "1em",
              }}
            >
              <span
                onClick={() =>
                  history.push(`/ceremonies/${gameQuery.hallLink}`)
                }
                className="hall-page-link"
              >
                {gameQuery.hallOfGreat}
              </span>
            </td>
            <td
              className="table-infoR"
              style={{
                padding: ".5em",
              }}
            >
              <span
                onClick={() => history.push(`/allies/${gameQuery.allyLink}`)}
                className="ally-page-link"
              >
                {gameQuery.ally}
              </span>
            </td>
            <td
              className="table-infoR"
              style={{
                padding: ".5em",
              }}
            >
              <span
                onClick={() => history.push(`/games/${gameQuery._id}`)}
                className="game-page-link"
              >
                {gameQuery.game.toLowerCase()}
              </span>
            </td>
            <td
              className="table-infoE"
              style={{
                padding: ".5em",
              }}
            >
              {gameQuery.genre}
            </td>
            <td
              className="table-infoE"
              style={{
                padding: ".5em",
              }}
            >
              {gameQuery.developer}
            </td>
            <td
              className="table-infoE"
              style={{
                padding: ".5em",
              }}
            >
              {gameQuery.year}
            </td>
            <td
              className="table-infoE"
              style={{
                padding: ".5em",
              }}
            >
              {gameQuery.metacritic}
            </td>
            <td className="table-infoE">{gameQuery.votes}</td>
            <td
              className="table-infoE"
              style={{
                padding: ".5em",
              }}
            >
              {gameQuery.victory}
            </td>
            <td
              className="table-infoE"
              style={{
                padding: ".5em",
              }}
            >
              {gameQuery.banned}
            </td>
          </tr>
        </tbody>
      );
    });

    if (event !== " ") {
      console.log("event beginning", event);
      setWord(event);
      console.log("word", word);
      
      let newGameList;
      newGameList = oldGameList.filter(gameQuery =>
      gameQuery.game.includes(word.toLowerCase())
      );
      console.log("new game list", newGameList);

      setFilter(newGameList);
      console.log("set filter", filter);
    } else {
      setFilter(games);
    }
    console.log("event", event.target.value);
  };


  return (
    <main className="nominations-page">
      <StarDecoration />
      <h2 className="nominations-page-heading">The Notorious Nominees</h2>
      <SearchBar games={games} history={history} value={word} filter={filter} handleChange={event => handleChange(event.target.value)}/>
      <NomineeTable games={games} history={history} />
      <StarDecoration />
    </main>
  );
};

export default Nominations;