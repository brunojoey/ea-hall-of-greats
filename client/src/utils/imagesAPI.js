import axios from 'axios';

export default {
  getImages: function() {
    return axios.get('/api/images');
  },

  getImage: function(id) {
    return axios.get('/api/images/' + id);
  }
}