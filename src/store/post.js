import firebase from "firebase/compat/app"

export default {
    actions: {
        async createPost({commit}, {id, date, doneornot, title, body}) {
            try {
                const post = await firebase.database().ref(`/posts/${id}`).set({ id, date, doneornot, title, body})
            } catch (e) {
                throw (e)
            }
        },
    }
}