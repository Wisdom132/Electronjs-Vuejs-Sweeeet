<template>
  <section>
    <h1>{{noteData.title}}</h1>
    <p>{{noteData.note}}</p>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["noteData"])
  },
  mounted() {
    this.$store.dispatch("showNote", 1);
  }
};
</script>
<style scoped>
section {
  padding: 25px;
}
h1 {
  font-size: 35px;
}
section * {
  text-align: left !important;
}
</style>