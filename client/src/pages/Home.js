import { Link } from "react-router-dom";
import StarDecoration from "../components/StarDecoration";
import useMediaQuery from "../utils/useMediaQuery";
import "./Pages.scss";

function Home() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <main className="home">
      <StarDecoration />
      <h1 className="home-title">Welcome to The Hall of Greats</h1>
      {matches ? (
        <ul className="home-links-div">
          <li>
            <Link to="/about" className="home-links">
              About
            </Link>
          </li>
          <li>
            <Link to="/winners" className="home-links">
              Winners
            </Link>
          </li>
          <li>
            <Link to="/nominations" className="home-links">
              Nominations
            </Link>
          </li>
          <li>
            <Link to="/ceremonies" className="home-links">
              Ceremonies
            </Link>
          </li>
          <li>
            <Link to="/allies" className="home-links">
              Allies
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="home-links-div-two">
          <li className="home-links-two">
            <Link to="/about" className="home-links-two">
              About
            </Link>
          </li>
          <li className="home-links-two">
            <Link to="/winners" className="home-links-two">
              Winners
            </Link>
          </li>
          <li className="home-links-two">
            <Link to="/nominations" className="home-links-two">
              Nominations
            </Link>
          </li>
          <li className="home-links-two">
            <Link to="/ceremonies" className="home-links-two">
              Ceremonies
            </Link>
          </li>
          <li className="home-links-two">
            <Link to="/allies" className="home-links-two">
              Allies
            </Link>
          </li>
        </ul>
      )}
      <StarDecoration />
    </main>
  );
}

export default Home;
