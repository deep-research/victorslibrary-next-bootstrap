<template>
    <div>
        <div id="header-div">
            <b-container>
                <TheHeader />
            </b-container>
        </div>
        <!-- <hr class="mt-0" id="navbar-hr" /> -->
        <b-container>
            <Nuxt />
        </b-container>
        <TheFooter />
    </div>
</template>

<style scoped>
 /* #navbar-hr {
    border-top: 1px solid rgba(0, 0, 0, 0.9)
 } */

 #header-div {
    background-color: white;
 }
</style>
