<template>
  <div>
    <b-navbar toggleable type="light" variant="faded" class="px-0">
      <b-navbar-brand href="/" class="m-0 d-flex align-items-center">
        <b-img src="icon.png" alt="Books Icon" class="mr-3" width="32" />
        <div>
          Victor's Library
        </div>
      </b-navbar-brand>

      <div>
        <b-button v-b-toggle.sidebar id="navbar-toggler-button">
          <!-- Toggle Between Two Icons -->
          <!-- <template #default="{ expanded }">
              <b-icon scale="2" v-if="expanded" icon="x"></b-icon>
              <b-icon scale="1.5" v-else icon="list"></b-icon>
          </template> -->
            <b-icon scale="1.7" icon="list"></b-icon>
          <div>
            Menu
          </div>
        </b-button>
      </div>
    </b-navbar>

    <b-sidebar id="sidebar" backdrop-variant="dark" backdrop shadow no-header>
      <template #default="{ hide }">
        <div class="px-3 py-2">
          <div class="text-right">
            <b-button id="close-sidebar-button" @click="hide">
              <b-icon scale="2.4" icon="x" class="float-end"></b-icon>
              <div>
                Close
              </div>
            </b-button>
          </div>
          <h5 id="sidebar-headline" class="mt-1">
            Victor's Library is a repository of knowlege.
          </h5>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="http://reenchantment.band" @click="hide"><b-icon icon="music-note" style="margin-right: 2px" />Reenchantment.Band</b-nav-item>
              <b-nav-item href="http://songs.victorslibrary.com" @click="hide"><b-icon icon="clock-history" class="mr-2" />Previous Version</b-nav-item>
              <b-nav-item href="http://bandcamp.com/contact?b=1631569890" @click="hide"><b-icon icon="mailbox" class="mr-2" />Contact</b-nav-item>
            </b-nav>
          </nav>
          <p>
            © {{currentYear}} Victor Fisher
          </p>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { BootstrapVue, BIcon, BIconList, BIconX, BIconMusicNote, BIconMailbox, BIconClockHistory } from 'bootstrap-vue'

  Vue.use(BootstrapVue)
  Vue.component('BIcon', BIcon)
  Vue.component('BIconList', BIconList)
  Vue.component('BIconX', BIconX)  
  Vue.component('BIconMusicNote', BIconMusicNote)
  Vue.component('BIconMailbox', BIconMailbox)
  Vue.component('BIconClockHistory', BIconClockHistory)

  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    }
  }
</script>

<style scoped>
  .navbar-brand {
    font-weight: 600;
    font-size: 24px;
  }

  .navbar-brand:hover {
    color: silver;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .navbar-toggler {
    border-width: 0px;
    color: rgba(0, 0, 0, 0.9)
  }

  .navbar-toggler:hover {
    color: silver;
  }

  #sidebar-headline {
    font-weight: 600;
  }

  #close-sidebar-button {
    background-color: #f8f9fa;
    border:0;
    color: rgba(0, 0, 0, 0.9)
  }

  #navbar-toggler-button {
    border:0;
    background-color: white;
    color: rgba(0, 0, 0, 0.9);
  }

  #close-sidebar-button:hover {
    color: silver;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  #navbar-toggler-button:hover {
    color: silver;
  }

  #close-sidebar-button:focus, #navbar-toggler-button:focus {
    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;  
  }
</style>