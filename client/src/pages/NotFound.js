import { Link } from 'react-router-dom';
import StarDecoration from "../components/StarDecoration";
import "./Pages.scss";

const NotFound = () => {
  return (
    <>
    <StarDecoration />
    <div className='not-found-div'>
      <h1>Oops - We Cannot Find the Page You Are Looking For</h1>
      <Link to='/' className="not-found-div-link">Go to the Home Page</Link>
    </div>
    </>
  )
};

export default NotFound;