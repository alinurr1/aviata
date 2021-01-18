<template>
  <div class="tariff-filters">
    <h2 class="tariff-filters__header">Опции тарифа</h2>
    <ul class="tariff-filters_list">
      <li
        v-for="(tariff, tariffIdx) in tariffs"
        :key="tariffIdx"
        class="tariff-filters_option"
      >
        <input type="checkbox" :id="tariff" :value="tariff">
        <label>{{ tariff }}</label>
      </li>
    </ul>
  </div>
</template>

<script src="./TariffOptions.js" />
