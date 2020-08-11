import React, { useState } from "react";
import { Tabs, Tab, Typography } from "@material-ui/core";
import BenMoore from '../components/AllyFilters/benMoore';
import BradEllis from '../components/AllyFilters/bradEllis';
import BrandonJones from '../components/AllyFilters/brandonJones';
import DanielBloodworth from '../components/AllyFilters/danielBloodworth';
import DonCasanova from '../components/AllyFilters/donCasanova';
import IanHinck from '../components/AllyFilters/ianHinck';
import KyleBosman from '../components/AllyFilters/kyleBosman';
import MichaelDamiani from '../components/AllyFilters/michaelDamiani';
import MichaelHuber from '../components/AllyFilters/michaelHuber';
import './style.css'

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
    0: "ben_moore",
    1: "brad_ellis",
    2: "brandon_jones",
    3: "daniel_bloodworth",
    4: "don_casanova",
    5: "ian_hinck",
    6: "kyle_bosman",
    7: "michael_damiani",
    8: "michael_huber",
  };

  const indexToTabName = {
    ben_moore: 0,
    brad_ellis: 1,
    brandon_jones: 2,
    daniel_bloodworth: 3,
    don_casanova: 4,
    ian_hinck: 5,
    kyle_bosman: 6,
    michael_damiani: 7,
    michael_huber: 8
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
      {selectedTab === 0 && <BenMoore />}
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
