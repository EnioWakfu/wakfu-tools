<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6">
        <v-card>
          <v-card-title>Paramètres</v-card-title>
          <v-card-text>
            <v-text-field label="Taux de drop (%)" type="number" v-model.number="dropRate"/>
            <v-text-field label="Prospection (+ challenge)" type="number" v-model.number="prospection"/>
            <v-text-field label="Bonus final (potion de prospection, etc.) (%)" type="number" v-model.number="potionBonus"/>
            <v-text-field label="Bonus donjon (bonus Stasis) (%)" type="number" v-model.number="dungeonBonus"/>
            <v-text-field label="Bonus serveur (%)" type="number" v-model.number="serverBonus"/>
            <v-checkbox label="Booster" v-model="booster"/>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title>
            Résultat par personnage
            <v-spacer/>
            <v-tooltip class="align-end" left>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">mdi-alpha-i-circle-outline</v-icon>
              </template>
              <span>Ces taux sont calculés sur la base d'un jet par personnage du combat, ce qui n'est pas le cas dans certaines situations</span>
            </v-tooltip>
          </v-card-title>
          <v-card-text>
            <p><b>Taux de base :</b> {{toFixed(computedDropRate, 3)}}%</p>
            <p><b>Taux PvP prudent :</b> {{toFixed(computedDropRate * pvpPrudent, 3)}}%</p>
            <p><b>Taux PvP opportuniste :</b> {{toFixed(computedDropRate * pvpOpportunist, 3)}}%</p>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-switch v-model="$vuetify.theme.dark" :label="`${$vuetify.theme.dark ? 'Dark' : 'Light'} mode (pour Nozadah)`"></v-switch>
      </v-col>
      <v-col>
        <small>Mis à jour en 1.72</small>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  function toRate(n) {
    return (100 + n) / 100
  }

  export default {
    name: 'DropCalculator',

    computed: {
      computedDropRate: function () {
        const baseRate = Math.round((100 + Math.min(200, this.prospection)) * toRate(this.serverBonus));
        return Math.max(0, this.dropRate * baseRate / 100) * (this.booster ? 1.25 : 1) * toRate(this.dungeonBonus) * toRate(this.potionBonus)
      }
    },

    data: () => ({
      booster: false,
      dropRate: 1.0,
      dungeonBonus: 0.0,
      potionBonus: 0.0,
      prospection: 0.0,
      pvpPrudent: 1.25,
      pvpOpportunist: 1.5,
      serverBonus: 0.0,
    }),

    methods: {
      toFixed(n, f) {
        // toString to remove useless 0
        return parseFloat(n).toFixed(f).replace(/\.*0+$/,'');
      }
    }
  }
</script>
