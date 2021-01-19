import AirlineOptions from '@/components/AirlineOptions';
import TariffOptions from '@/components/TariffOptions';
import FlightOptionCard from '@/components/FlightOptionCard';

import results from '@/data/results.json';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TicketsListPage',

  components: {
    AirlineOptions,
    TariffOptions,
    FlightOptionCard,
  },

  data() {
    return {
      airlines: results.airlines,
      flights: results.flights,
    };
  },

  computed: {
    ...mapGetters([
      'getAirlineOptions',
      'getLuggageOptions',
    ]),

    getFilteredTickets() {
      // eslint-disable-next-line max-len
      const filteredList = this.flights.filter((flight) => this.getAirlineOptions.includes(flight.itineraries[0][0].carrier_name));
      if (this.getAirlineOptions.length) return filteredList;
      return this.flights;
    },
  },

  methods: {
    ...mapMutations([
      'setAirlineOptions',
      'setLuggageOptions',
    ]),

    emptyFilter() {
      this.setAirlineOptions([]);
      this.setLuggageOptions([]);
    },
  },
};
