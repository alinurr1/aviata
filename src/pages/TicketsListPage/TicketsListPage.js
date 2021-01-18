import AirlineOptions from '@/components/AirlineOptions';
import TariffOptions from '@/components/TariffOptions';
import FlightOptionCard from '@/components/FlightOptionCard';

import results from '@/data/results.json';

export default {
  name: 'TicketsListPage',

  components: {
    AirlineOptions,
    TariffOptions,
    FlightOptionCard,
  },

  data() {
    return {
      numberOfTickets: 5,
      airlines: results.airlines,
      flights: results.flights,
    };
  },
};
