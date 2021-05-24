import Dropdown from '../Dropdown';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from "@material-ui/core/";
import './Header.scss';

function Header() {
  return (
    <header className='header-root'>
      <AppBar position="static">
        <Toolbar className='menu-bar'>
          <Link to="/" className='menu-title'>
            <span style={{ color: "white" }}>EASY</span>
            <span style={{ color: "red" }}>ALLIES</span>{" "}
          </Link>
          <Dropdown />
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;