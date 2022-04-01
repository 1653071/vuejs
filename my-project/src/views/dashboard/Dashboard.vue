<template>
  <div >
    <b-row>
      <b-col cols="4"><Sidebar /> </b-col>
      <b-col cols="8"><UsersTable /></b-col>
        
    </b-row>
  </div>
</template>
<script>
import Sidebar from "../components/menu/Sidebar.vue";
import Modal from "../components/modal/Modal.vue";
import UsersTable from "../components/table/UsersTable.vue";
import AddUserButton from "../components/button/AddUserButton.vue";
export default {
  name: "UsersScreen",
  components: {
    Sidebar,
    Modal,
    UsersTable,
    AddUserButton,
  },
};
</script>
<style scoped>

</style>