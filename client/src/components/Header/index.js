import React from "react";
import Dropdown from '../MenuDropdown';
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
    flexGrow: 1
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
            <a href="/" style={{textDecoration: 'none'}}>
              <strong style={{ color: "white" }}>EASY</strong>
              <strong style={{ color: "red" }}>ALLIES</strong>{" "}
            </a>
          </Typography>
          <div>
            <Dropdown />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
