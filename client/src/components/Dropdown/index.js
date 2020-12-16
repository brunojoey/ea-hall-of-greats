import { useState } from "react";
import { Button, Menu } from "@material-ui/core";
import "./Dropdown.scss";

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
        className="nav-list-links"
        style={{ color: "white" }}
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
          <nav>
            <ul className='nav-list'>
              <li><a href='/' className='nav-list-links'>Home</a></li>
              <li><a href='/about' className='nav-list-links'>About</a></li>
              <li><a href='/winners' className='nav-list-links'>The Inductees</a></li>
              <li><a href='/nominations' className='nav-list-links'>The Nominations</a></li>
              <li><a href='/ceremonies' className='nav-list-links'>The Ceremonies</a></li>
              <li><a href='/allies' className='nav-list-links'>The Allies</a></li>
            </ul>
          </nav>
      </Menu>
    </section>
  );
};

export default Dropdown;