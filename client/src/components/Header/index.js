import React from "react";
import Dropdown from '../MenuDropdown';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core/";
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
    <section className={classes.root}>
      <AppBar className={classes.menuBar} position="static">
        <Toolbar>
          <h1 className={classes.title}>
            <a href="/" style={{textDecoration: 'none'}}>
              <strong style={{ color: "white" }}>EASY</strong>
              <strong style={{ color: "red" }}>ALLIES</strong>{" "}
            </a>
          </h1>
          <Dropdown />
        </Toolbar>
      </AppBar>
    </section>
  );
};
