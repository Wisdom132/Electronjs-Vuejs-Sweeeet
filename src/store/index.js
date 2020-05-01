import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    noteData: {},
    notes: [{
        id: 1,
        title: 'This is the first note',
        note: 'This is the first description about bla bla black sheep..This is the content of this particular note...it has an id of 1 for now'
      },
      {
        id: 2,
        title: 'This is the second note',
        note: 'This is the second description about bla bla black sheep..This is the content of this particular note...it has an id of 2 for now'
      },
      {
        id: 3,
        title: 'This is the third note',
        note: 'This is the third description about bla bla black sheep..This is the content of this particular note...it has an id of 3 for now'
      }
    ]
  },
  mutations: {
    GET_NOTE(state, payload) {
      state.noteData = payload
    }
  },
  actions: {
    showNote: (context, param) => {
      let data = context.getters.singleNote(param);
      context.commit('GET_NOTE', data);
    },
  },
  getters: {
    notes: state => {
      return state.notes
    },

    singleNote: state => noteId => {
      return state.notes.find(note => note.id == noteId)
    }

  },
  modules: {}
})