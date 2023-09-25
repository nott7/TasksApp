<template>
  <v-card
    class="mx-auto justify-center d-flex flex-column pa-6"
    max-width="700"
  >
    <v-card-title class="flex-column no-wrap">
      <v-row class="justify-space-between mb-4">
        <p>n° {{ comic.num }}</p>
        <p>{{ comic.day }} / {{ comic.month }} / {{ comic.year }}</p>
      </v-row>

      <h1>{{ comic.title }}</h1>
    </v-card-title>
    <v-card-text class="d-flex justify-center mt-5">
      <img :src="comic.img" alt="Comic Image" />
    </v-card-text>
    <v-card-actions class="justify-center mt-5">
      <v-btn class="mx-auto" color="primary" @click="$emit('previous-comic')">
        &lt;
      </v-btn>
      <v-btn class="mx-auto" color="primary" @click="$emit('next-comic')">
        &gt;
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Comic",
  props: {
    comic: Object,
  },
};
</script>

<style scoped>
.row {
  width: 100%;
}

img {
  max-height: 500px;
  max-width: 100%;
}
</style>
