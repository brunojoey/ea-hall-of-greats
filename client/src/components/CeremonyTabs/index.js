import { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarDecoration from "../StarDecoration";

import HogOne from "../CeremonyFilters/HogOne";
import HogTwo from "../CeremonyFilters/HogTwo";
import HogThree from "../CeremonyFilters/HogThree";
import HogFour from "../CeremonyFilters/HogFour";
import HogFive from "../CeremonyFilters/HogFive";
import HogSix from "../CeremonyFilters/HogSix";
import HogSeven from "../CeremonyFilters/HogSeven";
import HogEight from "../CeremonyFilters/HogEight";
import HogNine from "../CeremonyFilters/HogNine";
import HogTen from "../CeremonyFilters/HogTen";
import HogEleven from "../CeremonyFilters/HogEleven";
import HogTwelve from "../CeremonyFilters/HogTwelve";
import HogThirteen from "../CeremonyFilters/HogThirteen";
import HogFourteen from "../CeremonyFilters/HogFourteen";
import HogFifteen from "../CeremonyFilters/HogFifteen";
import HogSixteen from "../CeremonyFilters/HogSixteen";
import HogSeventeen from "../CeremonyFilters/HogSeventeen";

const useStyles = makeStyles((theme) => ({
  tab: {
    padding: 10,
    minWidth: 30, // a number of your choice
    width: 120, // a number of your choice
    margin: "0 auto",
  },
}));

const CeremonyTabs = (props) => {
  const classes = useStyles();
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
          classes={{ root: classes.tab }}
          label="Hall of Greats 1"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 2"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 3"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 4"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 5"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 6"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 7"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 8"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 9"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 10"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 11"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 12"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 13"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 14"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 15"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 16"
          className="tab-ceremonies"
        />
        <Tab
          classes={{ root: classes.tab }}
          label="Hall of Greats 17"
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
      <StarDecoration />
    </>
  );
};

export default CeremonyTabs;
