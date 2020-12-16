// import { useState } from "react";
import "./SearchBar.scss";

function SearchBar(props) {
  const { history, filter, handleChange } = props;
  console.log("props", props);

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
};

export default SearchBar;