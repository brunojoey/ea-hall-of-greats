import axios from 'axios';

const getGames = () => {
  return axios.get('/api/games');
};

const getGame = (id) => {
  return axios.get('/api/games/' + id);
};

const gamesExport = { getGames, getGame };

export default gamesExport;