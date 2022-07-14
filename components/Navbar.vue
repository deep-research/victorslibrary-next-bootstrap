<template>
    <b-navbar toggleable="lg" variant="dark" type="dark" class="py-3">
        <!-- The Media Query in default.vue was necessary to add a container here. -->
        <div  class="container">
            <b-navbar-brand href="/">VICTOR'S LIBRARY</b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>         
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="http://reenchantment.band">Original Music</b-nav-item>
                    <b-nav-item href="https://songs.victorslibrary.com" target="_blank">Old Website</b-nav-item>
                    <b-nav-item href="https://bandcamp.com/contact?b=1631569890" target="_blank">Contact</b-nav-item>
                </b-navbar-nav> 
            </b-collapse>
        </div>
    </b-navbar>
</template>

<style scoped>
    .navbar {
        background-image: url("../static/background.png");
        background-size: 350px;
    }
    .navbar-brand {
        font-family: 'Gilda Display', serif !important;
        letter-spacing: .5rem;
        text-shadow: 2px 2px darkred;
        /* /* text-shadow: 2px 2px royalblue; */
        /* text-shadow: 2px 2px blueviolet; */
        font-size: 24px;
        white-space: initial;
        font-weight: bold;
    }
    .nav-link {
        color: white !important;
    }
    .nav-link:hover {
        color: silver !important;
    }
    .navbar-toggler {
        color:white;
        border-color: white;
    }
    @media only screen and (max-width: 447px) {
        .navbar-brand {
            max-width: 176px;
        }
    }
</style>