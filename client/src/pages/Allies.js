import AllyTabs from '../components/AllyTabs';
import AllyDropdown from "../components/AllyDropdown";
import useMediaQuery from "../utils/useMediaQuery";

function Allies(props) {
  const matches = useMediaQuery("(min-width: 768px)");

  return <> { matches ? <AllyTabs {...props}/> : <AllyDropdown {...props}/> }</>;
};

export default Allies;