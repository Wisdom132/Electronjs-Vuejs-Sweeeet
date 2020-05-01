<template>
  <section>
    <div id="item" v-for="(note) in notes" :key="note.id" @click="selectNote(note.id)">
      <h3>{{note.title}}</h3>
      <p>{{note.note.slice(0,35)}}...</p>
    </div>
    <addnote />
  </section>
</template>
<script>
import addnote from "@/components/addnote";
import { mapGetters } from "vuex";
export default {
  components: {
    addnote
  },
  methods: {
    selectNote(id) {
      this.$store.dispatch("showNote", id);
    }
  },
  computed: {
    ...mapGetters(["notes"])
  }
};
</script>
<style scoped>
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
}
p {
  text-transform: capitalize;
  color: #ced0d1;
  margin: 3px 0;
}
</style>