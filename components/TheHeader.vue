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
              <b-icon scale="1.5" icon="list"></b-icon>
          </template>
        </b-navbar-toggle>
    </b-navbar>

    <b-sidebar id="sidebar" backdrop-variant="dark" backdrop shadow>
      <template #default="{ hide }">
        <div class="px-3 py-2">
          <p style="font-weight: 600">
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
  }

  .navbar-brand:hover {
    color: silver;
  }

  .navbar-toggler {
    border-width: 0px;
    color: black;
  }

  .navbar-toggler:hover {
    color: silver;
  }
</style>