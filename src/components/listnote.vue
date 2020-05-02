<template>
  <section>
    <div id="item" v-for="note in notes" :key="note.id">
      <span class="deleteicon" @click="removeNote(note)">X</span>
      <h3 class="title" @click="selectNote(note.id)">{{note.title}}</h3>
      <p>{{note.note.slice(0,35)}}...</p>
    </div>
    <addnote />
  </section>
</template>
<script>
import addnote from "@/components/addnote";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    addnote
  },
  methods: {
    selectNote(id) {
      this.$store.dispatch("showNote", id);
    },
    removeNote(data) {
      this.$store.dispatch("deleteNote", data);
      this.selectNote(this.notes[0].id);
    }
  },
  computed: {
    ...mapGetters(["notes"]),
    ...mapActions(["deleteNote"])
  }
};
</script>
<style scoped>
.deleteicon {
  float: right;
  cursor: pointer;
  font-size: 25px;
}
.deleteicon:hover {
  color: gray;
}
#item * {
  text-align: left !important;
}
#item {
  padding: 5px 9px;
}
section #item:hover {
  background: black;
  transition: ease 0.4s;
  color: white;
}
section #item:first-of-type {
  background: black;
  transition: ease 0.4s;
  color: white;
}
h3 {
  text-transform: uppercase;
  margin: 3px 0 !important;
  cursor: pointer;
}
p {
  text-transform: capitalize;
  color: #ced0d1;
  margin: 3px 0;
}
</style>