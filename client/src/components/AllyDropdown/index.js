import { useState } from 'react';
import { Button, Menu, Tabs, Tab } from "@material-ui/core/";

import BenMoore from '../AllyFilters/benMoore';
import BradEllis from '../AllyFilters/bradEllis';
import BrandonJones from '../AllyFilters/brandonJones';
import DanielBloodworth from '../AllyFilters/danielBloodworth';
import DonCasanova from '../AllyFilters/donCasanova';
import IanHinck from '../AllyFilters/ianHinck';
import KyleBosman from '../AllyFilters/kyleBosman';
import MichaelDamiani from '../AllyFilters/michaelDamiani';
import MichaelHuber from '../AllyFilters/michaelHuber';

function AllyDropdown(props) {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  const [anchor, setAnchor] = useState(null);
  
  const linkNameToIndex = {
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
  
  const indexToLinkName = {
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

  const [selectedLink, setSelectedLink] = useState(indexToLinkName[page]);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleChange = (event, newValue) => {
    history.push(`/allies/${linkNameToIndex[newValue]}`);
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
        Allies
      </Button>
      <Menu id="simple-menu" anchorEl={anchor} keepMounted open={Boolean(anchor)} onClose={handleClose}>
        <Tabs value={selectedLink} onChange={handleChange} orientation='vertical' className='ally-page-tab-bar'>
          <Tab label="Ben Moore" className='tab-allies'/>
          <Tab label="Brad Ellis" className='tab-allies' />
          <Tab label="Brandon Jones" className='tab-allies' />
          <Tab label="Daniel Bloodworth" className='tab-allies' />
          <Tab label="Don Casanova" className='tab-allies' />
          <Tab label="Ian Hinck" className='tab-allies' />
          <Tab label="Kyle Bosman" className='tab-allies' />
          <Tab label="Michael Damiani" className='tab-allies' />
          <Tab label="Michael Huber" className='tab-allies' />
        </Tabs>
      </Menu>

      {selectedLink === 0 && <BenMoore history={history} />}
      {selectedLink === 1 && <BradEllis history={history} />}
      {selectedLink === 2 && <BrandonJones history={history} />}
      {selectedLink === 3 && <DanielBloodworth history={history} />}
      {selectedLink === 4 && <DonCasanova history={history} />}
      {selectedLink === 5 && <IanHinck history={history} />}
      {selectedLink === 6 && <KyleBosman history={history} />}
      {selectedLink === 7 && <MichaelDamiani history={history} />}
      {selectedLink === 8 && <MichaelHuber history={history} />}
    </div>
  );
};

export default AllyDropdown;