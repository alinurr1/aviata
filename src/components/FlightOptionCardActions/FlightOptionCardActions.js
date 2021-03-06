import VButton from '@/components/VButton';

export default {
  name: 'FlightOptionCardActions',

  components: {
    VButton,
  },

  props: {
    price: Number,
    luggage: Object,
  },

  computed: {
    formattedPrice() {
      return `${this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} `;
    },
  },
};
