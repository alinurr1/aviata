<template>
  <div>
    <div
      v-for="(flight, flightIdx) in flights"
      :key="flightIdx"
      class="flight-card d-flex"
    >
      <flight-option-card-details/>
      <flight-option-card-actions :price="flight.price"/>
    </div>
  </div>
</template>

<script src="./FlightOptionCard.js" />
