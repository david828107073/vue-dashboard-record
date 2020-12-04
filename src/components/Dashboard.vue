<template>
  <div>
    <div class="container-fluid">
      <Navbar/>
      <Sidebar></Sidebar>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Products from "./Products";
export default {
  components: {
    Sidebar,
    Navbar,
    Products,
  },
};
</script>

<style>
</style>