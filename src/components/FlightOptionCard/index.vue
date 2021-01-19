<template>
  <div>
    <div class="flight-card d-flex">
      <flight-option-card-details
        :is-refundable="flight.refundable"
        :carrier="flight.validating_carrier"
        :carrier-name="flight.itineraries[0][0].carrier_name"
        :departure-date="flight.itineraries[0][0].dep_date"
        :arrival-date="flight.itineraries[0][0].arr_date"
        :travel-time="flight.itineraries[0][0].traveltime"
        :segments="flight.itineraries[0][0].segments"
        :stop-duration="flight.itineraries[0][0].layovers[0]"
      />
      <flight-option-card-actions :price="flight.price_raw"/>
    </div>
  </div>
</template>

<script src="./FlightOptionCard.js" />
