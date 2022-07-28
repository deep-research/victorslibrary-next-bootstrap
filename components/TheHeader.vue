<template>
  <div>
    <b-navbar toggleable type="light" variant="faded" class="px-0">
        <b-navbar-brand href="/">Victor's Library</b-navbar-brand>

        <b-navbar-toggle target="sidebar">
          <!-- Toggle Between Two Icons -->
          <!-- <template #default="{ expanded }">
              <b-icon scale="2" v-if="expanded" icon="x"></b-icon>
              <b-icon scale="1.5" v-else icon="list"></b-icon>
          </template> -->
          <template>
              <b-icon scale="1.7" icon="list"></b-icon>
          </template>
        </b-navbar-toggle>
    </b-navbar>

    <b-sidebar id="sidebar" backdrop-variant="dark" backdrop shadow no-header>
      <template #default="{ hide }">
        <div class="px-3 py-2">
          <div class="text-right">
            <b-button id="close-sidebar-button" @click="hide"><b-icon scale="2.4" icon="x" class="float-end" id="close-sidebar-icon"></b-icon></b-button>
          </div>
          <p id="sidebar-headline" class="mt-2">
            Victor's Library is a repository of knowlege.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="http://reenchantment.band" @click="hide"><b-icon icon="music-note" style="margin-right: 2px" />Original Music</b-nav-item>
              <b-nav-item href="http://songs.victorslibrary.com" @click="hide"><b-icon icon="clock-history" class="mr-2" />Previous Website Version</b-nav-item>
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
  .navbar {
    background-color: white !important;
  }

  .navbar-brand {
    font-weight: 600;
    font-size: 24px;
  }

  .navbar-brand:hover {
    color: silver;
  }

  .navbar-toggler {
    border-width: 0px;
    color: rgba(0, 0, 0, 0.9)
  }

  .navbar-toggler:hover {
    color: silver;
  }

  #close-sidebar-icon {
    color: rgba(0, 0, 0, 0.9)
  }

  #sidebar-headline {
    font-weight: 600;
    font-size: 20px;
  }

  #close-sidebar-button {
    background-color: #f8f9fa;
    border:0;
  }

  #close-sidebar-button:hover #close-sidebar-icon {
    color: silver;
  }

  #close-sidebar-button:focus {
    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;  }
</style>