<template>
  <div class="sidebar">
    <Logo />
    <div>
      
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
  background-color: #3a3845;
  width: 100%;
}
</style>
