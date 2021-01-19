import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'AirlineOptions',

  props: {
    airlines: Object,
  },

  computed: {
    ...mapGetters([
      'getAirlineOptions',
    ]),
  },

  methods: {
    ...mapMutations([
      'setAirlineOptions',
    ]),

    isChecked(airline) {
      return this.getAirlineOptions.includes(airline);
    },

    checkOption(airline) {
      if (this.isChecked(airline)) this.removeAirline(airline);
      else this.addAirline(airline);
    },

    addAirline(airline) {
      this.setAirlineOptions([...this.getAirlineOptions, airline]);
    },

    removeAirline(airline) {
      this.setAirlineOptions(this.getAirlineOptions.filter((val) => val !== airline));
    },
  },
};
