import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Menu } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.scss";

function Dropdown() {
  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <section>
      <Button
        className="nav-list-links"
        style={{ color: "white" }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faBars} className="fa-bars" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-list-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-list-links">
                About
              </Link>
            </li>
            <li>
              <Link to="/winners" className="nav-list-links">
                The Inductees
              </Link>
            </li>
            <li>
              <Link to="/nominations" className="nav-list-links">
                The Nominations
              </Link>
            </li>
            <li>
              <Link to="/ceremonies" className="nav-list-links">
                The Ceremonies
              </Link>
            </li>
            <li>
              <Link to="/allies" className="nav-list-links">
                The Allies
              </Link>
            </li>
          </ul>
        </nav>
      </Menu>
    </section>
  );
}

export default Dropdown;
