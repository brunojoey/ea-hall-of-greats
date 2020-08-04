import React, { useState } from 'react';
import { Button, Menu } from '@material-ui/core/';
import { Link } from "react-router-dom";
import './style.css'

function MenuNav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color: 'white'}}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className='menu-nav'>
          <Link to="/" onClick={handleClose}>Home</Link>
          <Link to="/winners" onClick={handleClose}>The Inductees</Link>
          <Link to="/nominations" onClick={handleClose}>The Nominations</Link>
          <Link to="/allies" onClick={handleClose}>The Allies</Link>
        </div>
      </Menu>
    </div>
  );
};

export default MenuNav;