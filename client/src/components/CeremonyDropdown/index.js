import { useState } from "react";
import { Tabs, Tab, Button, Menu } from "@material-ui/core";
import StarDecoration from "../StarDecoration";

import HallOfGreatOne from "../CeremonyFilters/hallOfGreatOne";
import HallOfGreatTwo from "../CeremonyFilters/hallOfGreatTwo";
import HallOfGreatThree from "../CeremonyFilters/hallOfGreatThree";
import HallOfGreatFour from "../CeremonyFilters/hallOfGreatFour";
import HallOfGreatFive from "../CeremonyFilters/hallOfGreatFive";
import HallOfGreatSix from "../CeremonyFilters/hallOfGreatSix";
import HallOfGreatSeven from "../CeremonyFilters/hallOfGreatSeven";
import HallOfGreatEight from "../CeremonyFilters/hallOfGreatEight";
import HallOfGreatNine from "../CeremonyFilters/hallOfGreatNine";
import HallOfGreatTen from "../CeremonyFilters/hallOfGreatTen";
import HallOfGreatEleven from "../CeremonyFilters/hallOfGreatEleven";
import HallOfGreatTwelve from "../CeremonyFilters/hallOfGreatTwelve";
import HallOfGreatThirteen from "../CeremonyFilters/hallOfGreatThirteen";
import HallOfGreatFourteen from "../CeremonyFilters/hallOfGreatFourteen";
import HallOfGreatFifteen from "../CeremonyFilters/hallOfGreatFifteen";

function CeremonyDropdown(props) {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  const [anchor, setAnchor] = useState(null);

  const linkNameToIndex = {
    0: "hall_great_one",
    1: "hall_great_two",
    2: "hall_great_three",
    3: "hall_great_four",
    4: "hall_great_five",
    5: "hall_great_six",
    6: "hall_great_seven",
    7: "hall_great_eight",
    8: "hall_great_nine",
    9: "hall_great_ten",
    10: "hall_great_eleven",
    11: "hall_great_twelve",
    12: "hall_great_thirteen",
    13: "hall_great_fourteen",
    14: "hall_great_fifteen",
  };

  const indexToLinkName = {
    hall_great_one: 0,
    hall_great_two: 1,
    hall_great_three: 2,
    hall_great_four: 3,
    hall_great_five: 4,
    hall_great_six: 5,
    hall_great_seven: 6,
    hall_great_eight: 7,
    hall_great_nine: 8,
    hall_great_ten: 9,
    hall_great_eleven: 10,
    hall_great_twelve: 11,
    hall_great_thirteen: 12,
    hall_great_fourteen: 13,
    hall_great_fifteen: 14,
  };

  const [selectedLink, setSelectedLink] = useState(indexToLinkName[page]);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleChange = (event, newValue) => {
    history.push(`/ceremonies/${linkNameToIndex[newValue]}`);
    setSelectedLink(newValue);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: 'red', color: "white", marginTop: '1rem', left: '37%' }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Ceremonies
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <Tabs
          value={selectedLink}
          onChange={handleChange}
          className="hall-page-tab-bar"
          orientation="vertical"
        >
          <Tab label="Hall of Greats 1" />
          <Tab label="Hall of Greats 2" />
          <Tab label="Hall of Greats 3" />
          <Tab label="Hall of Greats 4" />
          <Tab label="Hall of Greats 5" />
          <Tab label="Hall of Greats 6" />
          <Tab label="Hall of Greats 7" />
          <Tab label="Hall of Greats 8" />
          <Tab label="Hall of Greats 9" />
          <Tab label="Hall of Greats 10" />
          <Tab label="Hall of Greats 11" />
          <Tab label="Hall of Greats 12" />
          <Tab label="Hall of Greats 13" />
          <Tab label="Hall of Greats 14" />
          <Tab label="Hall of Greats 15" />
        </Tabs>
      </Menu>

      {selectedLink === 0 && <HallOfGreatOne history={history} />}
      {selectedLink === 1 && <HallOfGreatTwo history={history} />}
      {selectedLink === 2 && <HallOfGreatThree history={history} />}
      {selectedLink === 3 && <HallOfGreatFour history={history} />}
      {selectedLink === 4 && <HallOfGreatFive history={history} />}
      {selectedLink === 5 && <HallOfGreatSix history={history} />}
      {selectedLink === 6 && <HallOfGreatSeven history={history} />}
      {selectedLink === 7 && <HallOfGreatEight history={history} />}
      {selectedLink === 8 && <HallOfGreatNine history={history} />}
      {selectedLink === 9 && <HallOfGreatTen history={history} />}
      {selectedLink === 10 && <HallOfGreatEleven history={history} />}
      {selectedLink === 11 && <HallOfGreatTwelve history={history} />}
      {selectedLink === 12 && <HallOfGreatThirteen history={history} />}
      {selectedLink === 13 && <HallOfGreatFourteen history={history} />}
      {selectedLink === 13 && <HallOfGreatFifteen history={history} />}
      <StarDecoration />
    </div>
  );
};

export default CeremonyDropdown;