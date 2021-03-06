import StarDecoration from "../components/StarDecoration";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Pages.scss";

function About() {
  return (
    <main className="about">
      <StarDecoration />
      <h1 className="about-heading" style={{textAlign: 'center'}}>About The Hall of Greats</h1>
      <section className="description-container">
        <p>
          <a href="https://www.easyallies.com" className="about-links">
            The Easy Allies
          </a>
          {" "}have been conducting their own video game Hall of Fame they like to
          call{" "}
          <a href="https://easyallies.com/#!/show/the-hall-of-greats" className='about-links'>
            The Hall of Greats
          </a>
          ! The inaugural ceremony happened in February of 2017. Ever since,
          every three to four months, the Allies gather to decide the two best
          games of each ceremony to induct into the Hall of Greats!{" "}
        </p>
        <p>
          Currently there are 30 games inducted into the illustrious hall, which
          you can find{" "}
          <Link to="/winners" className="about-links">
            here
          </Link>
          . The Allies who have the most games inducted are:{" "}
          <Link to="allies/michael_damiani" className="about-links">
            Michael Damiani
          </Link>{" "}
          &amp;{" "}
          <Link to="allies/brad_ellis" className="about-links">
            Brad Ellis
          </Link>
          , each inducting six games. The Ally who sadly has the most games
          banned is:{" "}
          <Link to="allies/don_casanova" className="about-links">
            Don Casanova
          </Link>
          , where he had three straight games be banned starting with the second
          Hall of Greats. There have been three situations where a Patreon Vote
          was required to induct a game into the Hall of Greats,{" "}
          <Link to="ceremonies/hall_great_one" className="about-links">
            The First Hall of Greats
          </Link>
          ,{" "}
          <Link to="ceremonies/hall_great_eight" className="about-links">
            The Eighth Hall of Greats
          </Link>
          , and the most impressive feat being when Patreon decided both games
          to get inducted when there was a three-way tie,{" "}
          <Link to="ceremonies/hall_great_ten" className="about-links">
            The Tenth Hall of Greats
          </Link>
          .{" "}
        </p>
      </section>
      <h2 className="rules-heading">The Rules</h2>
      <section>
        <ul className="rules-list">
          <li>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            Starting with the eighth Hall of Greats, alliances were banned.
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            Starting with the fifth Hall of Greats, a person cannot vote for
            their own nominated game.
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            Starting with the second Hall of Greats, games that received no
            votes from other Allies are banned for one year.{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            If the second and third games are tied, the Easy Allies community on
            Patreon will vote on the game they want to be inducted, between the
            tied games.{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            Each Ally has six votes. Their first choice for induction will
            receive three points, the second choice will receive two points, and
            their last choice will receive one.
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            Each Ally must present their game in a five minute speech. Then,
            that game will be critiqued by the other Allies in a five minute
            cross examination to make sure that game earns its way to the Hall
            of Greats.{" "}
          </li>
        </ul>
      </section>
      <h2 className="bans-heading" data-testid="bans-heading">
        The Current Bans
      </h2>
      <section>
        <ul className="banned-list">
          <li>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            Dead Rising <strong>(Until Q4 2021)</strong>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            The Elder Scrolls V: Skyrim <strong>(Until Q4 2021)</strong>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            Dishonored 2 <strong>(Until Q1 2022)</strong>
          </li>
        </ul>
      </section>
      <StarDecoration />
    </main>
  );
}

export default About;
