import FlightOptionCardDetails from '@/components/FlightOptionCardDetails';
import FlightOptionCardActions from '@/components/FlightOptionCardActions';

export default {
  name: 'FlightOptionCard',

  components: {
    FlightOptionCardDetails,
    FlightOptionCardActions,
  },

  props: {
    flight: Object,
  },
};
