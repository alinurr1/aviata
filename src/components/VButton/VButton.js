export default {
  name: 'VButton',

  props: {
    text: String,
    color: String,
    outline: Boolean,
    disable: Boolean,
    onClick: Function,
  },

  computed: {
    getClasses() {
      let classes = 'v-button';
      const baseClass = 'v-button';
      if (this.color) classes += ` ${baseClass}--thm-${this.color} `;
      if (this.outline) classes += ` ${baseClass}--outline `;
      if (this.disable) classes += ` ${baseClass}--disable `;
      return classes;
    },
  },
};
