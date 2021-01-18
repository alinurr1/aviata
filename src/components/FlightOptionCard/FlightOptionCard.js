import FlightOptionCardDetails from '@/components/FlightOptionCardDetails';
import FlightOptionCardActions from '@/components/FlightOptionCardActions';

export default {
  name: 'FlightOptionCard',

  components: {
    FlightOptionCardDetails,
    FlightOptionCardActions,
  },

  data() {
    return {
      flights: [
        {
          airline: 'Air Astana',
          price: 500000,
          refundable: false,
          duration: '5h',
          departureDate: {},
          arrivalDate: {},
        },
        {
          airline: 'Air Astana',
          price: 500000,
          refundable: false,
          duration: '3h',
          departureDate: {},
          arrivalDate: {},
        },
        {
          airline: 'Air Astana',
          price: 500000,
          refundable: false,
          duration: '3h',
          departureDate: {},
          arrivalDate: {},
        },
        {
          airline: 'Air Astana',
          price: 500000,
          refundable: false,
          duration: '3h',
          departureDate: {},
          arrivalDate: {},
        },
      ],
    };
  },

};
