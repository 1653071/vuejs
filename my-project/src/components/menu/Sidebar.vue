<template>
  <div class="sidebar">
    <Logo />
    <div class="item-sidebar">
      <a >Users</a>
      <a>Salary</a>
      <a>Product</a>
      <a>Users</a>
    </div>
  </div>
</template>
<script>
import Logo from "../logo/Logo.vue";
export default {
  name: "Sidebar",
  components: { Logo },
};
</script>
<style scoped>
.sidebar {
  height: 100vh;

  background-color: #2E3D56;
  width: 100%;
}
.sidebar .item-sidebar{

  background-color: #3B4F6F;
  color: #E6E2DE;
  font-weight: 400;
}
.sidebar .item-sidebar a{
  display: block;
  cursor: pointer;
  padding: 8px 16px;
  text-decoration: none;
}.sidebar .item-sidebar a:hover{
  background-color: #4f5d73;
  font-weight: 800;
}
.sidebar .item-sidebar a:active{
  background-color: #4f5d73;
  font-weight: 800;
}
</style>
