<template>
  <v-container>
    <Comic
      :comic="comic"
      @previous-comic="previousComic"
      @next-comic="nextComic"
    />
  </v-container>
</template>

<script>
import Comic from "@/components/Comic.vue";
import axios from "axios";
export default {
  name: "ComicsView",
  data() {
    return {
      comic: {},
      comicNumber: 100,
    };
  },
  components: {
    Comic,
  },
  created() {
    axios
      .get(`https://xkcd.now.sh/?comic=${this.comicNumber}`) // Ho provato con il link mandatomi da voi ma non funzionava, ho trovato questo link su internet
      .then((response) => {
        this.comic = response.data;
      });
  },
  methods: {
    nextComic() {
      this.comicNumber++;
      axios
        .get(`https://xkcd.now.sh/?comic=${this.comicNumber}`)
        .then((response) => {
          this.comic = response.data;
        });
    },
    previousComic() {
      this.comicNumber--;
      axios
        .get(`https://xkcd.now.sh/?comic=${this.comicNumber}`)
        .then((response) => {
          this.comic = response.data;
        });
    },
  },
};
</script>
