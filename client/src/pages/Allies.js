import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import BenMoore from '../components/AllyFilters/benMoore';
import BradEllis from '../components/AllyFilters/bradEllis';
import BrandonJones from '../components/AllyFilters/brandonJones';
import DanielBloodworth from '../components/AllyFilters/danielBloodworth';
import DonCasanova from '../components/AllyFilters/donCasanova';
import IanHinck from '../components/AllyFilters/ianHinck';
import KyleBosman from '../components/AllyFilters/kyleBosman';
import MichaelDamiani from '../components/AllyFilters/michaelDamiani';
import MichaelHuber from '../components/AllyFilters/michaelHuber';
import './Pages.css'

// const useStyles = makeStyles((theme) => ({
//   tab: {
//     paddingTop: 10,
//   },
// }));

const Allies = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "Ben%20Moore",
    1: "Brad%20Ellis",
    2: "Brandon%20Jones",
    3: "Daniel%20Bloodworth",
    4: "Don%20Casanova",
    5: "Ian%20Hinck",
    6: "Kyle%20Bosman",
    7: "Michael%20Damiani",
    8: "Michael%20Huber",
  };

  const indexToTabName = {
    "Ben%20Moore": 0,
    "Brad%20Ellis": 1,
    "Brandon%20Jones": 2,
    "Daniel%20Bloodworth": 3,
    "Don%20Casanova": 4,
    "Ian%20Hinck": 5,
    "Kyle%20Bosman": 6,
    "Michael%20Damiani": 7,
    "Michael%20Huber": 8
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/allies/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange} className='tab-bar' >
        <Tab label="Ben Moore" />
        <Tab label="Brad Ellis" />
        <Tab label="Brandon Jones" />
        <Tab label="Daniel Bloodworth" />
        <Tab label="Don Casanova" />
        <Tab label="Ian Hinck" />
        <Tab label="Kyle Bosman" />
        <Tab label="Michael Damiani" />
        <Tab label="Michael Huber" />
      </Tabs>
      {/* <Typography
      variant="h2"
        style={{ margin: ".25em 0 .25em 0", textAlign: "center" }}
      >
        The Allies Picks
      </Typography> */}
      {selectedTab === 0 && <BenMoore render={props}/>}
      {selectedTab === 1 && <BradEllis />}
      {selectedTab === 2 && <BrandonJones />}
      {selectedTab === 3 && <DanielBloodworth />}
      {selectedTab === 4 && <DonCasanova />}
      {selectedTab === 5 && <IanHinck />}
      {selectedTab === 6 && <KyleBosman />}
      {selectedTab === 7 && <MichaelDamiani />}
      {selectedTab === 8 && <MichaelHuber />}
    </>
  );
}

export default Allies;
