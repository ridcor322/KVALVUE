import firebase from "firebase/compat/app"
import "firebase/compat/database"

export default {
    actions: {
        async createComm({commit}, {id, topicId, comm}) {
            try {
                const comment = await firebase.database().ref(`/comms/${id}`).set({id, topicId, comm})
            } catch (e) {
                throw (e)
            }
        }
    }
}
