<template>
    <div>
        <b-navbar toggleable="lg" variant="dark" type="dark">
            <!-- The Media Query in default.vue was necessary to add a container here. -->
            <div  class="container">
                <b-navbar-brand href="#">Victor's Library</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>         
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="http://reenchantment.band">Original Music</b-nav-item>
                        <b-nav-item href="https://songs.victorslibrary.com" target="_blank">Old Website</b-nav-item>
                        <b-nav-item href="https://bandcamp.com/contact?b=1631569890" target="_blank">Contact</b-nav-item>
                    </b-navbar-nav> 
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<style scoped>
    .navbar {
        background-image: url("../static/background.png");
        background-size: 350px;
    }
</style>