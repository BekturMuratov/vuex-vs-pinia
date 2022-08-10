import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: []
  },
  getters: {
    getUsers: (state) => state.users 
  },
  mutations: {
    SET_USERS(state,users) {
      state.users = users
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
          commit('SET_USERS', data.data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }
  },
  modules: {
  }
})
