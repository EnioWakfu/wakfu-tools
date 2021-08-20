<template>
  <v-app>
    <v-main>
      <DropCalculator/>
    </v-main>
    <v-footer>
      <small><a target="_blank" href="https://www.wakfu.com/fr/mmorpg">WAKFU MMORPG : © {{new Date().getFullYear()}} Ankama Studio. Tous droits réservés.</a> "wakfu-tools" et ses services dérivés sont des sites non-officiels sans aucun lien avec Ankama (ou presque).</small>
    </v-footer>
  </v-app>
</template>

<script>
import DropCalculator from './components/DropCalculator';

export default {
  name: 'App',

  created: function() {
    this.$vuetify.theme.dark = true;
  },

  components: {
    DropCalculator,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .v-application .text-center {
    text-align: left !important;
  }
</style>
