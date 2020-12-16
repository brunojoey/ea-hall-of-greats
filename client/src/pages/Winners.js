import { useState, useEffect } from "react";
import gamesAPI from "../utils/gamesAPI";
import useMediaQuery from '../utils/useMediaQuery';
import WinnerTable from '../components/Table/winnerTable'
import StarDecoration from "../components/StarDecoration";
import "./Pages.scss";

function Winners({ history }) {
  const [games, setGames] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

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
            <figure className="winner-page-card">
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
      {matches ? 
      <section className='winner-page-container'>
        {winnerCard}
      </section>
      :
      <WinnerTable games={games} history={history} />
      }
      <StarDecoration />
    </main>
  );
};

export default Winners;