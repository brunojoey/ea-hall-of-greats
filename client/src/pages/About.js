import StarDecoration from "../components/StarDecoration";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Pages.scss";

function About() {
  return (
    <main className="about">
      <StarDecoration />
      <h1 className="about-heading" style={{ textAlign: "center" }}>
        About The Hall of Greats
      </h1>
      <section className="description-container">
        <p>
          <a href="https://www.easyallies.com" className="about-links">
            The Easy Allies
          </a>{" "}
          have been conducting their own video game Hall of Fame they like to
          call{" "}
          <a
            href="https://easyallies.com/#!/show/the-hall-of-greats"
            className="about-links"
          >
            The Hall of Greats
          </a>
          ! The inaugural ceremony happened in February of 2017. Ever since,
          every three to five months, the Allies gather to decide the two best
          games of each ceremony to induct into the Hall of Greats!{" "}
        </p>
        <p>
          Currently there are 34 games inducted into the illustrious hall, which
          you can find{" "}
          <Link to="/winners" className="about-links">
            here
          </Link>
          . The Ally who has the most games inducted is:{" "}
          <Link to="allies/michael_damiani" className="about-links">
            Michael Damiani
          </Link>{" "}
          who has inducted eight games. The Allies who sadly have the most games
          banned are:{" "}
          <Link to="allies/don_casanova" className="about-links">
            Don Casanova
          </Link>
          and{" "}
          <Link to="allies/brandon_jones" className="about-links">
            Brandon Jones
          </Link>
          . Each having four games banned. There have been three situations
          where a Patreon Vote was required to induct a game into the Hall of
          Greats,{" "}
          <Link to="ceremonies/hall_great_one" className="about-links">
            The First Hall of Greats
          </Link>
          ,{" "}
          <Link to="ceremonies/hall_great_eight" className="about-links">
            The Eighth Hall of Greats
          </Link>
          , and the most impressive feat being when the Patreon community
          decided both games to get inducted when there was a three-way tie,{" "}
          <Link to="ceremonies/hall_great_ten" className="about-links">
            The Tenth Hall of Greats
          </Link>
          .{" "} Four the last ceremony in 2021, the Allies chose to switch things up and begin a Hall of Shame where they pick a game that is highly unworthy of being called a Great and more so needed to be Shamed.
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
            Starting with the tenth Hall of Greats, with a break in the eleventh
            Hall of Greats, the allies do not say the exact points of what they
            are voting for, instead keeping it secret from chat.{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className="fa-star" />
            Starting with the fourteenth Hall of Greats, a nominee can encompass
            all versions of the game.
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
            <Link to="/games/611489baf90ad10004b2ceb8" className="about-links">
              <FontAwesomeIcon icon={faStar} className="fa-star" />
              Minecraft <strong>(Until Q3 2022)</strong>
            </Link>
          </li>
        </ul>
      </section>
      <StarDecoration />
    </main>
  );
}

export default About;
