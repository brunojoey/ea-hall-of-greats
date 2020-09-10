import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import './styles.css';

function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
    </div>
  );
}

export default Dropdown;
