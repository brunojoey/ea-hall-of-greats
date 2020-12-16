import { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarDecoration from '../StarDecoration';

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

const useStyles = makeStyles((theme) => ({
  tab: {
    padding: 10,
    minWidth: 10, // a number of your choice
    width: 103, // a number of your choice
    margin: '0 auto'
  }
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
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/ceremonies/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange} className='ceremony-tab-bar' >
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 1" className='tab-ceremonies'/>
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 2" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 3" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 4" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 5" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 6" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 7" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 8" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 9" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 10" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 11" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 12" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 13" className='tab-ceremonies' />
        <Tab classes={{ root: classes.tab }} label="Hall of Greats 14" className='tab-ceremonies' />
      </Tabs>
      
      {selectedTab === 0 && <HallOfGreatOne history={history} />}
      {selectedTab === 1 && <HallOfGreatTwo history={history} />}
      {selectedTab === 2 && <HallOfGreatThree history={history} />}
      {selectedTab === 3 && <HallOfGreatFour history={history} />}
      {selectedTab === 4 && <HallOfGreatFive history={history} />}
      {selectedTab === 5 && <HallOfGreatSix history={history} />}
      {selectedTab === 6 && <HallOfGreatSeven history={history} />}
      {selectedTab === 7 && <HallOfGreatEight history={history} />}
      {selectedTab === 8 && <HallOfGreatNine history={history} />}
      {selectedTab === 9 && <HallOfGreatTen history={history} />}
      {selectedTab === 10 && <HallOfGreatEleven history={history} />}
      {selectedTab === 11 && <HallOfGreatTwelve history={history} />}
      {selectedTab === 12 && <HallOfGreatThirteen history={history} />}
      {selectedTab === 13 && <HallOfGreatFourteen history={history} />}
      <StarDecoration />
    </>
  );
};

export default CeremonyTabs;