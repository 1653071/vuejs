<template>
  <div class="userstable container">
    <b-table hover :items="items" :fields="fields">
      <template #cell(actions)="row">
        <b-button
          variant="success"
          size="sm"
          @click="update(row.index, row.item, $event.target)"
          class="mr-2"
        >
          Update
        </b-button>
        <b-button
          variant="danger"
          size="sm"
          @click="info(row.index, row.item, $event.target)"
          class="mr-1"
        >
          Delete
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
      </template>
    </b-table>
    <b-modal :id="infoModal.id">
      <div class="d-block text-center">
        <h4>Confirm Delete User {{ infoModal.content }} ??</h4>
      </div>
      <b-button class="mt-2" variant="outline-danger" block @click="hideModal"
        >Cancel</b-button
      >
      <b-button
        class="mt-2"
        variant="outline-success"
        block
        @click="toggleModal"
        >Confirm</b-button
      >
    </b-modal>
    <b-modal id="update-table" title="Thay đổi thông tin" class="update">
          <div class="d-block text-center">

          </div>
          <b-button
            class="mt-2"
            variant="outline-danger"
            block
            @click="hideModal"
            >Cancel</b-button
          >
          <b-button
            class="mt-2"
            variant="outline-success"
            block
            @click="toggleModal"
            >Confirm</b-button
          >
        </b-modal>
  </div>
</template>

<script>
export default {
  name: "UsersTable",
  components: {},
  data() {
    return {
      fields: ["name", "email", "actions"],
      items: [
        { id: 1, name: "Dickerson", email: "Macdonald" },
        { id: 2, name: "Dickerson1", email: "Macdonald1" },
        { id: 3, name: "Dickerson2", email: "Macdonald2" },
        { id: 4, name: "Dickerso3", email: "Macdonald3" },
      ],
      infoModal: {
        id: "info111",
        title: "",
        content: "",
      },
    };
  },
  methods: {
    info(index, item, button) {
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    update(index, item, button) {

      this.$root.$emit("bv::show::modal", "update-table", button);
    },
  },
};
</script>
<style>
.userstable {
}
</style>
