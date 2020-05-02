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
      },
      {
        id: 4,
        title: 'This is the 4 note',
        note: 'This is the third description about bla bla black sheep..This is the content of this particular note...it has an id of 3 for now'
      },
      {
        id: 5,
        title: 'This is the 5 note',
        note: 'This is the third description about bla bla black sheep..This is the content of this particular note...it has an id of 3 for now'
      },
      {
        id: 6,
        title: 'This is the 6 note',
        note: 'This is the third description about bla bla black sheep..This is the content of this particular note...it has an id of 3 for now'
      }
    ]
  },
  mutations: {
    GET_NOTE(state, payload) {
      state.noteData = payload
    },
    ADD_NOTE(state, payload) {
      state.notes.push(payload)
    },
    DELETE_NOTE: (state, note) => {
      let noteIndex = state.notes.findIndex(n => n.id === note.id);
      state.notes.splice(noteIndex, 1);
    },
  },
  actions: {
    showNote: (context, param) => {
      let data = context.getters.singleNote(param);
      context.commit('GET_NOTE', data);
    },
    addNote: (state, payload) => {
      state.commit('ADD_NOTE', payload)
    },

    deleteNote: (state, note) => {
      state.commit('DELETE_NOTE', note);
    }
  },
  getters: {
    notes: state => {
      return state.notes
    },

    singleNote: state => noteId => {
      return state.notes.find(note => note.id == noteId)
    },
    updateId(state) {
      let lastid = 3
      state.notes.forEach(element => {
        if (element.id > lastid) {
          lastid = element.id;
        }
      });
      return lastid;
    }

  },
  modules: {}
})