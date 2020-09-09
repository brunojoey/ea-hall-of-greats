import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
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
        </Toolbar>
      </AppBar>
    </div>
  );
};
