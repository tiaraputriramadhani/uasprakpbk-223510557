<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="home-container q-pa-md q-mb-md">
      <div class="additional-container q-pa-md q-mt-md q-mb-md">
        <q-card class="q-pa-md">
          <h1 class="text-center">Weather Widget</h1>
          <q-btn label="Go to Weather" @click="goToWeather" class="q-mt-md bg-black" />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToWeather() {
      this.$router.push('/weather');
    },
  },
};
</script>

<style scoped>
.home-container {
  max-width: 500px;
  width: 100%;
}

.text-center {
  text-align: center;
}

.q-btn.bg-black {
  background-color: #000000;
  color: #d8cfcfeb;
  width: 100%;
}

.q-page {
  height: 80vh; 
  background: linear-gradient(to bottom right, #7c9bbf, #db7bb1); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}

</style>
