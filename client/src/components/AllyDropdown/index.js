import React, { useState } from 'react';
import { Button, Menu } from "@material-ui/core/";
import { Link } from "react-router-dom";

function AllyDropdown() {
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
        className="ally-button"
        style={{ color: "black", border: '1px solid black', justifyItems: 'center', marginTop: '1em' }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Allies
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/allies/ben_moore" className="nav-links">
          Ben Moore
        </Link>
        <Link to="/allies/brad_ellis" className="nav-links">
          Brad Ellis
        </Link>
        <Link to="/allies/brandon_jones" className="nav-links">
          Brandon Jones
        </Link>
        <Link to="/allies/daniel_bloodworth" className="nav-links">
          Daniel Bloodworth
        </Link>
        <Link to="/allies/don_casanova" className="nav-links">
          Don Casanova
        </Link>
        <Link to="/allies/ian_hinck" className="nav-links">
          Ian Hinck
        </Link>
        <Link to="/allies/kyle_bosman" className="nav-links">
          Kyle Bosman
        </Link>
        <Link to="/allies/michael_damiani" className="nav-links">
          Michael Damiani
        </Link>
        <Link to="/allies/michael_huber" className="nav-links">
          Michael Huber
        </Link>
      </Menu>
    </div>
  );
};

export default AllyDropdown;