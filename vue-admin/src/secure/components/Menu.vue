<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/dashboard" active-class="active" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" active-class="active" class="nav-link">Users</router-link>
          </li>
        </ul>
      </div>
    </nav>    
</template>

<script>
export default {
    name: "Menu"
}
</script>