<template>
  <div class="flight-card-details">
    <div class="mb-auto d-flex justify-content-start align-items-center">
      <div
        class="d-flex align-items-center"
        style="width: 12.8rem"
      >
        <img
          class="flight-card-details__image mr-3"
          :src="`https://aviata.kz/static/airline-logos/80x80/${carrier}.png`"
          alt=""
        />
        <span>{{ carrierName }}</span>
      </div>
      <div class="ml-2">
        <div class="flight-card-details__date">{{ getDepartureDate }}</div>
        <div class="flight-card-details__time">{{ getDepartureTime }}</div>
      </div>
      <div class="mx-auto" style="width: 20rem; position: relative">
        <div class="flight-card-details__locations">
          <span>ALA</span>
          <span>TSE</span>
        </div>
        <span class="flight-card-details__duration">4 ч 20 м</span>
        <div class="flight-card-details__options__refundable">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8
             2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41
             4.658A.25.250 0 1 8 4.466z"/>
          </svg>
          <span v-if="isRefundable" class="ml-2">возвратный</span>
          <span v-else class="ml-2">невозвратный</span>
        </div>
        <div class="flight-card-details__line"/>
        <div class="flight-card-details__transfer">
          через Шымкент, 1ч 50м
        </div>
      </div>
      <div class="ml-2">
        <div class="flight-card-details__date">
          {{ getArrivalDate }}
          <span
            v-if="arrivalOnNextDay"
            style="color: rgba(255,55,36,0.8)"
          >
             +1
          </span>
        </div>
        <div class="flight-card-details__time">{{ getArrivalTime }}</div>
      </div>
    </div>
    <div class="flight-card-details__options">
      <span
        class="flight-card-details__options__text"
        style="margin-right: 2.3rem"
      >
        Детали перелета
      </span>
      <span class="flight-card-details__options__text">
        Условия тарифа
      </span>
    </div>
  </div>
</template>

<script src="./FlightOptionCardDetails.js" />
