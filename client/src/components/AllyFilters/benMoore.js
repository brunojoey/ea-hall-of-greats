import { useEffect, useState } from "react";
import gamesAPI from "../../utils/gamesAPI";
import useMediaQuery from "../../utils/useMediaQuery";
import AllyTable from "../Table/allyTable";
import './Filters.scss';

function BenMoore({ history }) {
  const [ally, setAlly] = useState([]);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      data = data.filter((games) => games.ally === "Ben Moore");
      setAlly(data);
    }

    fetchData();
  }, []);

  let benMooreCard;
  benMooreCard = ally.map((benGames) => {
    return (
      <div
        className="ally-page-card"
        key={benGames._id}
      >
        <div className="ally-page-card-side ally-page-card-front">
          <img
            src={benGames.image}
            alt={benGames.alt}
            className="ally-page-image"
          />
        </div>
        <div className="ally-page-card-side ally-page-card-back">
          <ul>
            <li>Hall of Great {benGames.hallOfGreat}</li>
            <li>Votes Received: {benGames.votes}</li>
            <li>Victory: {benGames.victory}</li>
            <li>Banned: {benGames.banned}</li>
            <li onClick={() => history.push(`/games/${benGames._id}`)}>Game Page</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <main className="ally-page">
      <h3 className="ally-page-title">Ben Moores' Picks</h3>
      {/* {matches ? (
        <div className="ally-page-container">
          <section>{benMooreCard}</section>
        </div>
      ) : ( */}
        <AllyTable games={ally} history={history} />
      {/* )} */}
    </main>
  );
}

export default BenMoore;
