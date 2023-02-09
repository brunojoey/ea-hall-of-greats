import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import "./AllyTabs.scss";
import BenMoore from "../AllyFilters/benMoore";
import BradEllis from "../AllyFilters/bradEllis";
import BrandonJones from "../AllyFilters/brandonJones";
import DanielBloodworth from "../AllyFilters/danielBloodworth";
import DonCasanova from "../AllyFilters/donCasanova";
import IslaHinck from "../AllyFilters/islaHinck";
import KyleBosman from "../AllyFilters/kyleBosman";
import MichaelDamiani from "../AllyFilters/michaelDamiani";
import MichaelHuber from "../AllyFilters/michaelHuber";

function AllyTabs({ match, history }) {
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "ben_moore",
    1: "brad_ellis",
    2: "brandon_jones",
    3: "daniel_bloodworth",
    4: "don_casanova",
    5: "isla_hinck",
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
    isla_hinck: 5,
    kyle_bosman: 6,
    michael_damiani: 7,
    michael_huber: 8,
  };

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/allies/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <nav>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          className="ally-page-tab-bar"
        >
          <Tab
            label="Ben Moore"
            className="tab-allies"
          />
          <Tab
            label="Brad Ellis"
            className="tab-allies"
          />
          <Tab
            label="Brandon Jones"
            className="tab-allies"
          />
          <Tab
            label="Daniel Bloodworth"
            className="tab-allies"
          />
          <Tab
            label="Don Casanova"
            className="tab-allies"
          />
          <Tab
            label="Isla Hinck"
            className="tab-allies"
          />
          <Tab
            label="Kyle Bosman"
            className="tab-allies"
          />
          <Tab
            label="Michael Damiani"
            className="tab-allies"
          />
          <Tab
            label="Michael Huber"
            className="tab-allies"
          />
        </Tabs>

        {selectedTab === 0 && <BenMoore history={history} />}
        {selectedTab === 1 && <BradEllis history={history} />}
        {selectedTab === 2 && <BrandonJones history={history} />}
        {selectedTab === 3 && <DanielBloodworth history={history} />}
        {selectedTab === 4 && <DonCasanova history={history} />}
        {selectedTab === 5 && <IslaHinck history={history} />}
        {selectedTab === 6 && <KyleBosman history={history} />}
        {selectedTab === 7 && <MichaelDamiani history={history} />}
        {selectedTab === 8 && <MichaelHuber history={history} />}
      </nav>
    </>
  );
}

export default AllyTabs;
