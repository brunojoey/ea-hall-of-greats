import React, { useState } from "react";
import { Button, Menu } from "@material-ui/core/";
import { Link } from "react-router-dom";
import './styles.css';

function CeremonyDropdown() {
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
        className="ceremony-button"
        style={{ color: "black", border: '1px solid black', justifyItems: 'center', marginTop: '1em' }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Ceremonies
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/ceremonies/hall_great_one" className="nav-links">
          Hall of Greats One
        </Link>
        <Link to="/ceremonies/hall_great_two" className="nav-links">
          Hall of Greats Two
        </Link>
        <Link to="/ceremonies/hall_great_three" className="nav-links">
          Hall of Greats Three
        </Link>
        <Link to="/ceremonies/hall_great_four" className="nav-links">
          Hall of Greats Four
        </Link>
        <Link to="/ceremonies/hall_great_five" className="nav-links">
          Hall of Greats Five
        </Link>
        <Link to="/ceremonies/hall_great_six" className="nav-links">
          Hall of Greats Six
        </Link>
        <Link to="/ceremonies/hall_great_seven" className="nav-links">
          Hall of Greats Seven
        </Link>
        <Link to="/ceremonies/hall_great_eight" className="nav-links">
          Hall of Greats Eight
        </Link>
        <Link to="/ceremonies/hall_great_nine" className="nav-links">
          Hall of Greats Nine
        </Link>
        <Link to="/ceremonies/hall_great_ten" className="nav-links">
          Hall of Greats Ten
        </Link>
        <Link to="/ceremonies/hall_great_eleven" className="nav-links">
          Hall of Greats Eleven
        </Link>
        <Link to="/ceremonies/hall_great_twelve" className="nav-links">
          Hall of Greats Twelve
        </Link>
        <Link to="/ceremonies/hall_great_thirteen" className="nav-links">
          Hall of Greats Thirteen
        </Link>
      </Menu>
    </div>
  );
};

export default CeremonyDropdown;
