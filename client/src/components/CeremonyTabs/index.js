import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
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
import HogSeventeen from "../CeremonyFilters/HogSeventeen";
import HogEighteen from "../CeremonyFilters/HogEighteen";
import HogNineteen from "../CeremonyFilters/HogNineteen";
import HogTwenty from "../CeremonyFilters/HogTwenty";
import HogTwentyOne from "../CeremonyFilters/HogTwentyOne";
import "./CeremonyTabs.scss";

const CeremonyTabs = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
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
    18: "hall_great_nineteen",
    19: "hall_great_twenty",
    20: "hall_great_twentyone"
  };

  const indexToTabName = {
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
    hall_great_eighteen: 17,
    hall_great_nineteen: 18,
    hall_great_twenty: 19,
    hall_great_twentyone: 20
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/ceremonies/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        className="ceremony-tab-bar"
      >
        <Tab
          label="Hall of Greats 1"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 2"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 3"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 4"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 5"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 6"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 7"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 8"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 9"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 10"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 11"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 12"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 13"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 14"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 15"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 16"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 17"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 18"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 19"
          className="tab-ceremonies"
        />
        <Tab
          label="Hall of Greats 20"
          className="tab-ceremonies"
        />
        <Tab
        label="Hall of Greats 21"
        className="tab-ceremonies"
        />
      </Tabs>

      {selectedTab === 0 && <HogOne history={history} />}
      {selectedTab === 1 && <HogTwo history={history} />}
      {selectedTab === 2 && <HogThree history={history} />}
      {selectedTab === 3 && <HogFour history={history} />}
      {selectedTab === 4 && <HogFive history={history} />}
      {selectedTab === 5 && <HogSix history={history} />}
      {selectedTab === 6 && <HogSeven history={history} />}
      {selectedTab === 7 && <HogEight history={history} />}
      {selectedTab === 8 && <HogNine history={history} />}
      {selectedTab === 9 && <HogTen history={history} />}
      {selectedTab === 10 && <HogEleven history={history} />}
      {selectedTab === 11 && <HogTwelve history={history} />}
      {selectedTab === 12 && <HogThirteen history={history} />}
      {selectedTab === 13 && <HogFourteen history={history} />}
      {selectedTab === 14 && <HogFifteen history={history} />}
      {selectedTab === 15 && <HogSixteen history={history} />}
      {selectedTab === 16 && <HogSeventeen history={history} />}
      {selectedTab === 17 && <HogEighteen history={history} />}
      {selectedTab === 18 && <HogNineteen history={history} />}
      {selectedTab === 19 && <HogTwenty history={history} />}
      {selectedTab === 20 && <HogTwentyOne history={history} />}
      <StarDecoration />
    </>
  );
};

export default CeremonyTabs;
