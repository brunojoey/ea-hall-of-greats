import React, { useState } from "react";
import { Button, Menu} from "@material-ui/core";
import { Link } from "react-router-dom";
import './Dropdown.scss';

function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section>
      <Button
        className="nav-links"
        style={{color: 'white'}}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/winners" className="nav-links">
          The Inductees
        </Link>
        <Link to="/nominations" className="nav-links">
          The Nominees
        </Link>
        <Link to="/ceremonies" className="nav-links">
          The Ceremonies
        </Link>
        <Link to="/allies" className="nav-links">
          The Allies
        </Link>
      </Menu>
    </section>
  );
};

export default Dropdown;
