<template>
  <div>
    <b-row>
      <b-col cols="2"><Sidebar /> </b-col>
      <b-col cols="10">
        <PageHeader />
        <div class="user-table container">
          <div class="d-flex justify-content-between panel-header">
            <TableHeader />
            <b-button id="show-btn" @click="showModal">Add User</b-button>
          </div>

          <UsersTable></UsersTable>
        </div>
      </b-col>
    </b-row>
    <b-modal ref="my-modal" hide-footer title="Add New User">
      <div class="d-block text-center">
        <AddUserForm />
      </div>
      <b-button class="mt-2" variant="outline-danger" block @click="hideModal"
        >Close</b-button
      >
      <b-button
        class="mt-2"
        variant="outline-primary"
        block
        @click="toggleModal"
        >Add</b-button
      >
    </b-modal>
    <b-modal ref="modal-delete" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
        >Close Me</b-button
      >
      <b-button
        class="mt-2"
        variant="outline-warning"
        block
        @click="toggleModal"
        >Toggle Me</b-button
      >
    </b-modal>
  </div>
</template>
<script>
import Sidebar from "../components/menu/Sidebar.vue";
import Modal from "../components/modal/Modal.vue";
import UsersTable from "../components/table/UsersTable.vue";
import AddUserButton from "../components/button/AddUserButton.vue";
import PageHeader from "../components/header/PageHeader.vue";
import TableHeader from "../components/header/TableHeader.vue";
import AddUserForm from "../components/form/AddUserForm.vue";
export default {
  name: "UsersScreen",
  components: {
    Sidebar,
    Modal,
    UsersTable,
    AddUserButton,
    PageHeader,
    TableHeader,
    AddUserForm
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    }
  }
};
</script>
<style scoped>
.user-table {
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 10px 30 px #888888;
  padding-bottom: 50px;
  margin-top: 40px;
}
.button-col {
  text-align: left;
}
.panel-header {
  padding: 24px;
}
</style>
