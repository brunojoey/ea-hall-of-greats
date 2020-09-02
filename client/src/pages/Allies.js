import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './Pages.css'

import BenMoore from '../components/AllyFilters/benMoore';
import BradEllis from '../components/AllyFilters/bradEllis';
import BrandonJones from '../components/AllyFilters/brandonJones';
import DanielBloodworth from '../components/AllyFilters/danielBloodworth';
import DonCasanova from '../components/AllyFilters/donCasanova';
import IanHinck from '../components/AllyFilters/ianHinck';
import KyleBosman from '../components/AllyFilters/kyleBosman';
import MichaelDamiani from '../components/AllyFilters/michaelDamiani';
import MichaelHuber from '../components/AllyFilters/michaelHuber';

const useStyles = makeStyles((theme) => ({
  tab: {
    paddingTop: 10,
    minWidth: 10, // a number of your choice
    width: 110, // a number of your choice
    margin: '0 auto',
  },

}));

function Allies (props) {
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
    "ben_moore": 0,
    "brad_ellis": 1,
    "brandon_jones": 2,
    "daniel_bloodworth": 3,
    "don_casanova": 4,
    "ian_hinck": 5,
    "kyle_bosman": 6,
    "michael_damiani": 7,
    "michael_huber": 8
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/allies/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
    <nav>
      <Tabs value={selectedTab} onChange={handleChange} className='tab-bar' >
        <Tab classes={{ root: classes.tab }} label="Ben Moore" />
        <Tab classes={{ root: classes.tab }} label="Brad Ellis" />
        <Tab classes={{ root: classes.tab }} label="Brandon Jones" />
        <Tab classes={{ root: classes.tab }} label="Daniel Bloodworth" />
        <Tab classes={{ root: classes.tab }} label="Don Casanova" />
        <Tab classes={{ root: classes.tab }} label="Ian Hinck" />
        <Tab classes={{ root: classes.tab }} label="Kyle Bosman" />
        <Tab classes={{ root: classes.tab }} label="Michael Damiani" />
        <Tab classes={{ root: classes.tab }} label="Michael Huber" />
      </Tabs>
      
      {selectedTab === 0 && <BenMoore history={history} />}
      {selectedTab === 1 && <BradEllis history={history} />}
      {selectedTab === 2 && <BrandonJones history={history} />}
      {selectedTab === 3 && <DanielBloodworth history={history} />}
      {selectedTab === 4 && <DonCasanova history={history} />}
      {selectedTab === 5 && <IanHinck history={history} />}
      {selectedTab === 6 && <KyleBosman history={history} />}
      {selectedTab === 7 && <MichaelDamiani history={history} />}
      {selectedTab === 8 && <MichaelHuber history={history} />}
    </nav>

    </>
  );
};

export default Allies;
