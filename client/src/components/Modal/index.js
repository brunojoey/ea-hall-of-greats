import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import gamesAPI from "../../utils/gamesAPI";
import StarDecoration from "../../components/StarDecoration";

function SameGameModal(props) {
  const [games, setGames] = useState();
  const [open, setOpen] = useState(false);
  const { history } = props;


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      let { data } = await gamesAPI.getGames();
      setGames(data);
    }

    fetchData();
  }, []);

  let modalBody;
  if (games.game === games.game) {
    modalBody = games.map((sameGame) => {
      return (
        <h3>{sameGame.game}</h3>
      )
    });
  }
  console.log('modal text', modalBody);

  return (
    <section>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>
    </section>
  );
}

export default SameGameModal;
