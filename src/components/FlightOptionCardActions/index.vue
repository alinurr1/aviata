<template>
  <div class="flight-card-actions">
    <div class="row d-flex justify-content-center">
      <h2 class="flight-card-actions__price">{{ formattedPrice }}</h2>
    </div>
    <div class="row d-flex justify-content-center">
      <v-button
        text="Выбрать"
        color="green"
        :on-click="() => console.log('Hi')"
      />
    </div>
    <div class="row d-flex justify-content-center">
      <p class="flight-card-actions__passengers">Цена за всех пассажиров</p>
    </div>
    <div class="row d-flex justify-content-around align-items-center mx-2 mb-3">
      <span class="flight-card-actions__no-luggage">
        {{ luggage['20KG'] ? '20 кг' : 'Нет багажа' }}
      </span>
      <span class="flight-card-actions__add-luggage">Добавить багаж</span>
    </div>
  </div>
</template>

<script src="./FlightOptionCardActions.js" />
