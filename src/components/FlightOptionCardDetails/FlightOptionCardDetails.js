const daysOfWeek = {
  1: 'пн',
  2: 'вт',
  3: 'ср',
  4: 'чт',
  5: 'пт',
  6: 'сб',
  7: 'вс',
};

const months = {
  1: 'янв',
  2: 'фев',
  3: 'мар',
  4: 'апр',
  5: 'май',
  6: 'июн',
  7: 'июл',
  8: 'авг',
  9: 'сен',
  10: 'окт',
  11: 'ноя',
  12: 'дек',
};

export default {
  name: 'FlightOptionCardDetails',

  props: {
    isRefundable: Boolean,
    carrier: String,
    carrierName: String,
    departureDate: String,
    arrivalDate: String,
    travelTime: Number,
    segments: Array,
    stopDuration: Number,
  },

  computed: {
    getDepartureDate() {
      const date = new Date(this.departureDate);
      return `${date.getDate()} ${months[date.getMonth()]}, ${daysOfWeek[date.getDay()]}`;
    },

    getDepartureTime() {
      const date = new Date(this.departureDate);
      const minutes = date.getMinutes() < 10 ? '0' : `${date.getMinutes()}`;
      const hours = String(date.getHours());
      return `${hours.length === 1 ? `0${hours}` : hours}:${minutes.length === 1 ? `${minutes}0` : minutes}`;
    },

    getArrivalDate() {
      const date = new Date(this.arrivalDate);
      return `${date.getDate()} ${months[date.getMonth()]}, ${daysOfWeek[date.getDay()]}`;
    },

    getArrivalTime() {
      const date = new Date(this.arrivalDate);
      const minutes = date.getMinutes() < 10 ? '0' : `${date.getMinutes()}`;
      const hours = String(date.getHours());
      return `${hours.length === 1 ? `0${hours}` : hours}:${minutes.length === 1 ? `${minutes}0` : minutes}`;
    },

    arrivalOnNextDay() {
      return new Date(this.arrivalDate).getDate() - new Date(this.departureDate).getDate() > 0;
    },

    getTravelTime() {
      const hours = Math.floor(this.travelTime / 60 / 60);
      const minutes = Math.floor(this.travelTime / 60) - (hours * 60);
      if (hours >= 24) {
        const days = Math.floor(hours / 24);
        return `${days}д ${hours - 24 * days}ч ${minutes}м`;
      }
      return `${hours}ч ${minutes}м`;
    },

    getOriginCode() {
      return this.segments[0].origin_code;
    },

    getDestinationCode() {
      return this.segments[this.segments.length - 1].dest_code;
    },

    hasStop() {
      if (this.segments.length > 1) {
        const hours = Math.floor(this.stopDuration / 60 / 60);
        const minutes = Math.floor(this.stopDuration / 60) - (hours * 60);
        return `через ${this.segments[0].dest}, ${hours}ч ${minutes}м`;
      }
      return '';
    },
  },
};
