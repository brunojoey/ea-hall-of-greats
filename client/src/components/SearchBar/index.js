import React, { useState } from "react";
import "./SearchBar.scss";

function SearchBar(props) {
  const { history, games } = props;
  console.log("props", props);
  const [filter, setFilter] = useState(games);
  console.log("games", games);
  console.log("filter", filter);
  const [word, setWord] = useState(" ");

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
      
      let newGameList = [];
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
    <section className="search-bar">
      <input
        type="search"
        className="queryHOG"
        name="queryHOG"
        placeholder="Search Nominations"
        onChange={event => handleChange(event.target.value)}
      >
      </input>
      {filter.map(gameQuery => (
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
                {gameQuery.game}
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
      ))}
    </section>
  );
}

export default SearchBar;
