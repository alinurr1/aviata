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
      'getTariffOptions',
    ]),

    getFilteredTickets() {
      // eslint-disable-next-line max-len
      let airlineFilteredList = this.flights.filter((flight) => this.getAirlineOptions.includes(flight.itineraries[0][0].carrier_name));
      if (!airlineFilteredList.length) airlineFilteredList = this.flights;
      if (this.getTariffOptions.includes('direct')) {
        // eslint-disable-next-line max-len
        airlineFilteredList = airlineFilteredList.filter((flight) => flight.itineraries[0][0].segments.length === 1);
      }
      if (this.getTariffOptions.includes('refundable')) {
        // eslint-disable-next-line max-len
        airlineFilteredList = airlineFilteredList.filter((flight) => flight.refundable === true);
      }
      if (this.getTariffOptions.includes('luggage')) {
        // eslint-disable-next-line max-len
        airlineFilteredList = airlineFilteredList.filter((flight) => flight.services['20KG']);
      }
      if (!this.getAirlineOptions.length && !this.getTariffOptions.length) return this.flights;
      return airlineFilteredList;
    },
  },

  methods: {
    ...mapMutations([
      'setAirlineOptions',
      'setTariffOptions',
    ]),

    emptyFilter() {
      this.setAirlineOptions([]);
      this.setTariffOptions([]);
    },
  },
};
