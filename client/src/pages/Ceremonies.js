import CeremonyDropdown from "../components/CeremonyDropdown";
import CeremonyTabs from "../components/CeremonyTabs";
import useMediaQuery from "../utils/useMediaQuery";

function Ceremonies(props) {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {" "}
      {matches ? (
        <CeremonyTabs {...props} />
      ) : (
        <CeremonyDropdown {...props} />
      )}{" "}
    </>
  );
}

export default Ceremonies;
