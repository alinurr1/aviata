<template>
  <div class="tickets-list">
    <div class="col-3">
      <tariff-options
        style="margin-bottom: 1.2rem"
      />
      <airline-options
        :airlines="airlines"
        style="margin-bottom: 1.2rem"
      />
      <p
        class="tickets-list__reset-filters"
        @click="emptyFilter"
      >
        Сбросить все фильтры
      </p>
    </div>
    <div class="col-9">
      <flight-option-card
        v-for="(flight, flightIdx) in getFilteredTickets"
        :key="flightIdx"
        :flight="flight"
      />
    </div>
  </div>
</template>

<script src="./TicketsListPage.js"></script>
