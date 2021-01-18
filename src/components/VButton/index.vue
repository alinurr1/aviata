<template>
  <button
    type="button"
    @click="onClick"
    :class="getClasses"
  >
    {{ text }}
  </button>
</template>

<script src="./VButton.js" />
