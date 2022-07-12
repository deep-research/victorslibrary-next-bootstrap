<template>
    <div>
        <b-navbar toggleable="lg" variant="light" type="light">
            <b-navbar-brand href="#">Victor's Library</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>         
                <b-navbar-nav>
                    <b-nav-item href="https://bandcamp.com/contact?b=1631569890" target="_blank">Contact</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item href="http://songs.victorslibrary.com" target="_blank">Old Version of This Website</b-nav-item>
                </b-navbar-nav> 
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style scoped>
    .navbar {
        border-bottom: 1px solid silver;
    }
</style>