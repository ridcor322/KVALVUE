import firebase from "firebase/compat/app"
import "firebase/compat/database"

export default {
    state: {
      posts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.posts = posts;
      }
    },
    actions: {
      // Получаем посты из Firebase и сохраняем их в хранилище Vuex
      async getPosts({ commit }) {
        const postsRef = firebase.database().ref(`/posts/`);
        try {
          const snapshot = await postsRef.once('value');
          const posts = [];
          snapshot.forEach((childSnapshot) => {
            const post = {
              id: childSnapshot.key,
              ...childSnapshot.val()
            };
            posts.push(post);
          });
          commit('setPosts', posts);
        } catch (error) {
          console.error(error);
        }
      },
      async getTrash({ commit }) {
        const postsRef = firebase.database().ref(`/deleted/`);
        try {
          const snapshot = await postsRef.once('value');
          const posts = [];
          snapshot.forEach((childSnapshot) => {
            const post = {
              id: childSnapshot.key,
              ...childSnapshot.val()
            };
            posts.push(post);
          });
          commit('setPosts', posts);
        } catch (error) {
          console.error(error);
        }
      }
    },
    getters: {
      // Получаем пост по id
      getPostById: (state) => (id) => {
        return state.posts.find((post) => post.id === id);
      }
    }
  }