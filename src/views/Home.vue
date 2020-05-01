<template>
  <div class="grid-container" v-bind:style="{height:height+'px'} ">
    <div class="Notes">
      <listnote />
    </div>
    <div class="Content">
      <notecontent />
    </div>
  </div>
</template>

<script>
import listnote from "@/components/listnote.vue";
import notecontent from "@/components/content.vue";
export default {
  name: "Home",
  components: {
    notecontent,
    listnote
  },
  data() {
    return {
      height: window.innerHeight
    };
  }
};
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "Notes Content";
}

.Notes {
  grid-area: Notes;
  border-right: 2px dotted black;
}

.Content {
  grid-area: Content;
}
</style>
