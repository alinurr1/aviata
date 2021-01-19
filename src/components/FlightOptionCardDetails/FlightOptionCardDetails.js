const daysOfWeek = {
  0: 'пн',
  1: 'вт',
  2: 'ср',
  3: 'чт',
  4: 'пт',
  5: 'сб',
  6: 'вс',
};

const months = {
  0: 'янв',
  1: 'фев',
  2: 'мар',
  3: 'апр',
  4: 'май',
  5: 'июн',
  6: 'июл',
  7: 'авг',
  8: 'сен',
  9: 'окт',
  10: 'ноя',
  11: 'дек',
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
