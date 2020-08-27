import React, { useEffect, useState } from "react";
import SortedTable from '../Table/sortedTable';
import gamesAPI from "../../utils/gamesAPI";

function MichaelDamiani(props) {
  const [ally, setAlly] = useState([]);
  const [bradDamiani, setBradDamiani] = useState([]);
  const { history } = props;

  // function renderImages({ image, alt }) {
  //   imageJson.map((images) => {
  //     <Image src={buildRoutes(imageJson.image)} alt={imageJson.alt} />
  //   })
  // };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      console.log("DATA", data);
      data = data.filter((games) => games.ally === 'Michael Damiani' && 'Brad Ellis and Michael Damiani');
      console.log("NEW DATA", data);
      setAlly(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchNewData() {
      let { data } = await gamesAPI.getGames();
      let newData = data.filter((games) => games.ally === 'Brad Ellis and Michael Damiani');
      console.log('New Data', newData)
      setBradDamiani(newData);
    }

    fetchNewData();
  }, []);

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Michael Damiani's Picks</h2>
      <SortedTable games={ally, bradDamiani} history={history} />
    </div>
  );
}

export default MichaelDamiani;
