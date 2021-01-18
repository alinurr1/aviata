<template>
  <div class="airline-filters">
    <h2 class="airline-filters__header">Авиакомпании</h2>
    <ul class="airline-filters__list">
      <li
        v-for="(airline, airlineIdx) in airlines"
        :key="airlineIdx"
        class="airline-filters__option"
      >
        <input type="checkbox" :id="airline" :value="airline">
        <label>{{ airline }}</label>
      </li>
    </ul>
  </div>
</template>

<script src="./AirlineOptions.js" />
