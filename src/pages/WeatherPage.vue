<template>
    <q-page class="flex flex-center q-pa-md">
      <div class="weather-container q-pa-md q-mb-md">
        <q-card class="q-pa-md q-mb-md">
          <q-card-section>
            <h2 class="text-center">Weather</h2>
          </q-card-section>
          <q-card-section>
            <q-input v-model="city" label="Search for a city.." />
            <q-btn class="q-mt-md bg-black" label="Search" @click="fetchWeather" color="primary" />
          </q-card-section>
          <q-card-section v-if="weather">
            <h3>Location: {{ weather.name }}</h3>
            <p>Temperature: {{ weather.main.temp }}°C</p>
            <p>Description: {{ weather.weather[0].description }}</p>
          </q-card-section>
          <q-card-section v-if="error">
            <p class="text-red-5">{{ error }}</p>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'WeatherPage',
    data() {
      return {
        city: '',
        weather: null,
        error: ''
      }
    },
    methods: {
      async fetchWeather() {
        const apiKey = 'b3ad8d7d5aacfe71798e72a9cd03f1ee';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('City not found');
          }
          const data = await response.json();
          this.weather = data;
          this.error = '';
        } catch (error) {
          this.error = 'City not found';
          this.weather = null;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .weather-container {
    max-width: 500px;
    width: 100%;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-red-5 {
    color: #f44336;
  }
  
  .bg-black {
    background-color: #000000;
    color: #ffffff;
  }
  
  .q-btn.bg-black {
    background-color: #000000;
    color: #ffffff;
    width: 100%;
  }
  </style>
  