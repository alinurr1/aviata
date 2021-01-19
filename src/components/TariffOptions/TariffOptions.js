import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'TariffOptions',

  data() {
    return {
      tariffs: [
        {
          value: 'direct',
          label: 'Только прямые',
        },
        {
          value: 'luggage',
          label: 'Только с багажом',
        },
        {
          value: 'refundable',
          label: 'Только возвратные',
        },
      ],
    };
  },

  computed: {
    ...mapGetters([
      'getTariffOptions',
    ]),
  },

  methods: {
    ...mapMutations([
      'setTariffOptions',
    ]),

    isChecked(tariff) {
      return this.getTariffOptions.includes(tariff.value);
    },

    checkOption(tariff) {
      if (this.isChecked(tariff)) this.removeTariff(tariff.value);
      else this.addTariff(tariff.value);
    },

    addTariff(tariff) {
      this.setTariffOptions([...this.getTariffOptions, tariff]);
    },

    removeTariff(tariff) {
      this.setTariffOptions(this.getTariffOptions.filter((val) => val !== tariff));
    },
  },
};
