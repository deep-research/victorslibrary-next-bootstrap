<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">Victor's Library</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link" activeClass="active" aria-current="page" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" activeClass="active" to="/search">Search</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" activeClass="active" to="http://reenchantment.band/">Music</NuxtLink>
            </li>
            <!-- <li class="nav-item dropdown">
              <NuxtLink class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </NuxtLink>
              <ul class="dropdown-menu">
                <li><NuxtLink class="dropdown-item" to="#">Action</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="#">Another action</NuxtLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><NuxtLink class="dropdown-item" to="#">Something else here</NuxtLink></li>
              </ul>
            </li> -->
            <!-- <li class="nav-item">
              <NuxtLink class="nav-link disabled">Disabled</NuxtLink>
            </li> -->
          </ul>
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>
  </div>
</template>
