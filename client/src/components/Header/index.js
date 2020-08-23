import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-materialize";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core/";
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "black",
  },
}));

function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const path = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Dropdown
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/' onClick={() => props.setPath('/')}>Home</Link>
        <Link to='/winners' onClick={() => props.setPath('/winners')}>The Inductees</Link>
        <Link to='/nominations' onClick={() => props.setPath('/nominations')}>The Nominees</Link>
        <Link to='/ceremonies' onClick={() => props.setPath('/ceremonies')}>The Ceremonies</Link>
        <Link to='/allies' onClick={() => props.setPath('/allies')}>The Allies</Link>
      </Dropdown>
    </div>
  );
}

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.menuBar} position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <strong style={{ color: "white" }}>EASY</strong>
            <strong style={{ color: "red" }}>ALLIES</strong>{" "}
          </Typography>
          <div className="nav-links-div">
              <Link to="/" className="nav-links active">Home</Link> 
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
          </div>
              {/* {SimpleMenu} */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
