import axios from 'axios';

export default {
  getAllies: function() {
    return axios.get('/api/allies/');
  },

  getAlly: function(id) {
    return axios.get('/api/allies/' + id);
  }
}