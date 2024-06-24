<template>
    <q-layout view="hHh lpR fFf" class="grad-bg">      <q-header class="bg-light-gray" elevated>
        <q-toolbar>
          <q-toolbar-title class="text-black">WEATHER</q-toolbar-title>
          <q-btn-dropdown
            v-if="showTasksDropdown"
            class="text-black"
            flat
            dense
            no-caps
            label="TASKS"
            color="black"
          >
            <q-list>
              <q-item clickable v-ripple @click="goToTask(1)">Tugas 1</q-item>
              <q-item clickable v-ripple @click="goToTask(2)">Tugas 2</q-item>
              <q-item clickable v-ripple @click="goToTask(3)">Tugas 3</q-item>
              <q-item clickable v-ripple @click="goToTask(4)">Tugas 4</q-item>
              <q-item clickable v-ripple @click="goToTask(5)">Tugas 5</q-item>
              <q-item clickable v-ripple @click="goToTask(6)">Tugas 6</q-item>
              <q-item clickable v-ripple @click="goToTask(7)">Tugas 7</q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <router-view />
      </q-page-container>
      <q-footer class="bg-light-gray text-black q-layout-footer">
        <q-toolbar>
          <q-toolbar-title style="font-size: 14px;">
            <div class="footer-content">
              <div class="footer-logo">
                <q-icon name="public" size="20px" class="q-mr-sm" />
                <span>j com</span>
              </div>
              <div class="footer-socials">
                <q-icon name="instagram" size="20px" class="q-ml-sm q-mr-sm" @click="goToLink('https://www.instagram.com/tiararamadhaniptrii_?igsh=dmVidWhpM3Zuamh4')" />
              </div>
            </div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default {
    setup() {
      const route = useRoute()
      const showTasksDropdown = computed(() => route.path === '/weather')
  
      const goToTask = (taskNumber) => {
        const taskLinks = {
          1: 'https://tiara-project-cv.netlify.app/',
          2: 'https://tugas2-pbktipizuit.netlify.app/',
          3: 'https://223510557-tiput.netlify.app/',
          4: 'https://prak4-tipijuit.netlify.app/',
          5: 'https://tiput-223510557-bracelet.netlify.app/',
          6: 'https://tiput-prak6-223510557.netlify.app/',
          7: 'https://jtodos-tipijuit.netlify.app/'
        }
        window.open(taskLinks[taskNumber], '_blank')
      }
  
      const goToLink = (url) => {
        window.open(url, '_blank')
      }
  
      return {
        showTasksDropdown,
        goToTask,
        goToLink
      }
    }
  }
  </script>
  
  <style scoped>
    .bg-light-gray {
        background-color: #c6cdcd;
    }

    .grad-bg {
        min-height: 100vh; 
        background: linear-gradient(to bottom right, #7c9bbf, #db7bb1);
        background-size: cover; 
        background-position: center;
        background-repeat: no-repeat; 
    }
    
    .text-black {
        color: #000000;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    
    .q-layout-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        padding: 1px 20px;
    }
    
    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    
    .footer-logo {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
    }
    
    .footer-socials {
        display: flex;
        align-items: center;
    }
    
    .footer-socials .q-icon {
        cursor: pointer;
        color: #000000;
    }
    
    .footer-socials .q-icon:hover {
        color: #1e88e5;
    }
  </style>
  