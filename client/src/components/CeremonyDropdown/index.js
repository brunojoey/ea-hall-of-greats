import { useState } from "react";
import { Tabs, Tab, Button, Menu } from "@material-ui/core";
import StarDecoration from "../StarDecoration";

import HogOne from "../CeremonyFilters/HogOne.js";
import HogTwo from "../CeremonyFilters/HogTwo.js";
import HogThree from "../CeremonyFilters/HogThree.js";
import HogFour from "../CeremonyFilters/HogFour.js";
import HogFive from "../CeremonyFilters/HogFive.js";
import HogSix from "../CeremonyFilters/HogSix.js";
import HogSeven from "../CeremonyFilters/HogSeven.js";
import HogEight from "../CeremonyFilters/HogEight.js";
import HogNine from "../CeremonyFilters/HogNine.js";
import HogTen from "../CeremonyFilters/HogTen.js";
import HogEleven from "../CeremonyFilters/HogEleven.js";
import HogTwelve from "../CeremonyFilters/HogTwelve.js";
import HogThirteen from "../CeremonyFilters/HogThirteen.js";
import HogFourteen from "../CeremonyFilters/HogFourteen.js";
import HogFifteen from "../CeremonyFilters/HogFifteen.js";
import HogSixteen from "../CeremonyFilters/HogSixteen.js";
import HogSeventeen from "../CeremonyFilters/HogSeventeen.js";
import HogEighteen from "../CeremonyFilters/HogEighteen";

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
    15: "hall_great_sixteen",
    16: "hall_great_seventeen",
    17: "hall_great_eighteen",
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
    hall_great_sixteen: 15,
    hall_great_seventeen: 16,
    hall_great_eighteen: 17
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
        style={{
          backgroundColor: "red",
          color: "white",
          marginTop: "1rem",
          left: "37%",
        }}
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
          <Tab label="Hall of Greats 16" />
          <Tab label="Hall of Greats 17" />
          <Tab label="Hall of Greats 18" />
        </Tabs>
      </Menu>

      {selectedLink === 0 && <HogOne history={history} />}
      {selectedLink === 1 && <HogTwo history={history} />}
      {selectedLink === 2 && <HogThree history={history} />}
      {selectedLink === 3 && <HogFour history={history} />}
      {selectedLink === 4 && <HogFive history={history} />}
      {selectedLink === 5 && <HogSix history={history} />}
      {selectedLink === 6 && <HogSeven history={history} />}
      {selectedLink === 7 && <HogEight history={history} />}
      {selectedLink === 8 && <HogNine history={history} />}
      {selectedLink === 9 && <HogTen history={history} />}
      {selectedLink === 10 && <HogEleven history={history} />}
      {selectedLink === 11 && <HogTwelve history={history} />}
      {selectedLink === 12 && <HogThirteen history={history} />}
      {selectedLink === 13 && <HogFourteen history={history} />}
      {selectedLink === 14 && <HogFifteen history={history} />}
      {selectedLink === 15 && <HogSixteen history={history} />}
      {selectedLink === 16 && <HogSeventeen history={history} />}
      {selectedLink === 17 && <HogEighteen history={history} />}
      <StarDecoration />
    </div>
  );
}

export default CeremonyDropdown;
