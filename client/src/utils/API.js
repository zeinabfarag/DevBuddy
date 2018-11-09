import axios from 'axios';

export default {
  // Gets all books
  getUser: function() {
    return axios.get('/api/user/');
  },
  // Gets the book with the given id
  postUser: function(id) {
    return axios.post('/api/user/');
  }
};
