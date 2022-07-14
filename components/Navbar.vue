<template>
    <b-navbar toggleable="lg" variant="dark" type="dark">
        <b-container>
            <b-navbar-brand href="/">Victor's Library</b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>         
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="http://reenchantment.band">Original Music</b-nav-item>
                    <b-nav-item href="https://songs.victorslibrary.com">Old Website</b-nav-item>
                    <b-nav-item href="https://bandcamp.com/contact?b=1631569890">Contact</b-nav-item>
                </b-navbar-nav> 
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<style scoped>
    .navbar {
        background-image: url("../static/background.png");
        background-size: 350px;
    }
    .navbar-brand {
        font-family: 'Merienda One', cursive;
        letter-spacing: .5rem;
        /* text-shadow: 2px 2px darkred; */
        /* text-shadow: 2px 2px royalblue; */
        /* text-shadow: 2px 2px blueviolet; */
        white-space: initial !important;
        font-size: 44px;
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
        background-color: rgba(192,192,192, .5);
    }
    @media only screen and (max-width: 558px) {
        .navbar-brand {
            font-size: 32px;
        }
    }
    .navbar .container {
        flex-wrap: nowrap
    }
</style>