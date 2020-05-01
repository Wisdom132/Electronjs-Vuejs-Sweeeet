<template>
  <section>
    <h1>{{noteData}}</h1>
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