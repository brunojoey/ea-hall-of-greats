import React, { useState } from "react";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import HallOfGreatOne from "../components/CeremonyFilters/hallOfGreatOne";
import HallOfGreatTwo from "../components/CeremonyFilters/hallOfGreatTwo";
import HallOfGreatThree from "../components/CeremonyFilters/hallOfGreatThree";
import HallOfGreatFour from "../components/CeremonyFilters/hallOfGreatFour";
import HallOfGreatFive from "../components/CeremonyFilters/hallOfGreatFive";
import HallOfGreatSix from "../components/CeremonyFilters/hallOfGreatSix";
import HallOfGreatSeven from "../components/CeremonyFilters/hallOfGreatSeven";
import HallOfGreatEight from "../components/CeremonyFilters/hallOfGreatEight";
import HallOfGreatNine from "../components/CeremonyFilters/hallOfGreatNine";
import HallOfGreatTen from "../components/CeremonyFilters/hallOfGreatTen";
import HallOfGreatEleven from "../components/CeremonyFilters/hallOfGreatEleven";
import HallOfGreatTwelve from "../components/CeremonyFilters/hallOfGreatTwelve";
import HallOfGreatThirteen from "../components/CeremonyFilters/hallOfGreatThirteen";

const useStyles = makeStyles((theme) => ({
  tab: {
    paddingTop: 10,
    minWidth: 50, // a number of your choice
    width: 123, // a number of your choice
  },
}));

const Ceremonies = (props) => {
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
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/ceremonies/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange} className='tab-bar-one' indicatorColor="primary">
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 1" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 2" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 3" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 4" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 5" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 6" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 7" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 8" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 9" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 10" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 11" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 12" />
        <Tab classes={{ root: classes.tab }}  label="Hall of Greats 13" />
      </Tabs>
      {/* <Typography
        variant="h2"
        style={{ margin: ".5em 0 .5em 0", textAlign: "center" }}
      >
        The Coveted Ceremonies
      </Typography> */}
      {selectedTab === 0 && <HallOfGreatOne />}
      {selectedTab === 1 && <HallOfGreatTwo />}
      {selectedTab === 2 && <HallOfGreatThree />}
      {selectedTab === 3 && <HallOfGreatFour />}
      {selectedTab === 4 && <HallOfGreatFive />}
      {selectedTab === 5 && <HallOfGreatSix />}
      {selectedTab === 6 && <HallOfGreatSeven />}
      {selectedTab === 7 && <HallOfGreatEight />}
      {selectedTab === 8 && <HallOfGreatNine />}
      {selectedTab === 9 && <HallOfGreatTen />}
      {selectedTab === 10 && <HallOfGreatEleven />}
      {selectedTab === 11 && <HallOfGreatTwelve />}
      {selectedTab === 12 && <HallOfGreatThirteen />}
    </>
  );
};

export default Ceremonies;