import React, { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
// import SameGameModal from "../components/Modal";
import StarDecoration from "../components/StarDecoration";
import "./Pages.scss";

function Winners(props) {
  const [games, setGames] = useState([]);
  const { history } = props;

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.victory === "True");
      setGames(data);
    }

    fetchData();
  }, []);

  let winnerCard;
  if (games) {
    winnerCard = games.map((winner) => {
      return (
          <div className="winner-page-game" onClick={() => history.push(`/games/${winner._id}`) }>
            <figure className="winner-page-shape">
              <img src={winner.image} alt={winner.alt} className="winner-page-image"/>
              <caption className="winner-page-caption"> {winner.game} 
                <span style={{display: 'block'}} >&rarr;</span>
              </caption>
            </figure>
          </div>
      );
    });
  }

  return (
    <main className="winner-page">
      <StarDecoration />
      <h2 className="winner-page-heading">The Illustrious Inductees</h2>
      <section className='winner-page-map'>
        {winnerCard}
      </section>
      {/* <WinnerTable games={games} history={history} /> */}
      <StarDecoration />
    </main>
  );
}

export default Winners;
