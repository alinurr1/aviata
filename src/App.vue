<template>
  <div class="container">
    <TicketsListPage />
  </div>
</template>

<script>
import '@/assets/styles/index.scss';
import TicketsListPage from '@/pages/TicketsListPage';

export default {
  name: 'App',
  components: {
    TicketsListPage,
  },
};
</script>

<style lang="scss">

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"),
  url("./assets/fonts/open-sans.ttf") format("truetype");
}

</style>
