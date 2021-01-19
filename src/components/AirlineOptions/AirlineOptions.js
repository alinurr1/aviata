import { mapMutations } from 'vuex';

export default {
  name: 'AirlineOptions',

  props: {
    airlines: Object,
  },

  data() {
    return {
      selectedAirlines: [],
    };
  },

  methods: {
    ...mapMutations([
      'setAirlineOptions',
    ]),

    isChecked(airline) {
      return this.selectedAirlines.includes(airline);
    },

    checkOption(airline) {
      if (this.isChecked(airline)) this.removeAirline(airline);
      else this.addAirline(airline);
    },

    addAirline(airline) {
      this.selectedAirlines.push(airline);
      this.setAirlineOptions(this.selectedAirlines);
    },

    removeAirline(airline) {
      this.selectedAirlines = this.selectedAirlines.filter((val) => val !== airline);
      this.setAirlineOptions(this.selectedAirlines);
    },
  },
};
