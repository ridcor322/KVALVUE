import firebase from "firebase/compat/app"
import "firebase/compat/database"

export default {
    state: {
        comms: []
      },
      mutations: {
        setComms(state, comms) {
          state.comms = comms;
        },
      },
    actions: {
        async getComms({ commit }) {
            const commsRef = firebase.database().ref(`/comms/`);
            try {
              const snapshot = await commsRef.once('value');
              const comms = [];
              snapshot.forEach((childSnapshot) => {
                const comm = {
                    id: childSnapshot.key,
                    topicId: childSnapshot.val().topicId,
                    ...childSnapshot.val()
                };
                comms.push(comm);
              });
              commit('setComms', comms);
            } catch (error) {
              console.error(error);
            }
          },
    }
    }
