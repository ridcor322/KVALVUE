import Vuex from 'vuex';
import auth from './auth.js';
import post from './post.js';
import posts from './posts.js';
import comm from './comm.js';
import createcomm from './createcomm.js';

// Create store
export default new Vuex.Store({
  modules: {
    auth,
    post,
    posts,
    comm,
    createcomm
  }
}); 