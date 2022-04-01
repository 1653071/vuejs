<template>
  <div class="userstable container">
    <b-table hover :items="items" :fields="fields">
      <template #cell(actions)="row">
        <b-button
          variant="success"
          size="sm"
          @click="row.toggleDetails"
          class="mr-2"
        >
          Update
        </b-button>
        <b-button
          variant="danger"
          size="sm"
          @click="info($event.target)"
          class="mr-2"
       
        >
          Delete
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <b-modal :id="infoModal.id">
          <div class="d-block text-center">
            <h4>Confirm Delete User {{infoModal.title}} ??</h4>
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
      </template>
    </b-table>

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
        { id: 4, name: "Dickerso3", email: "Macdonald3" }
      ],
      infoModal: {
          id: 0,
          title: '',
          content: ''
      }
    };
  },
  methods:{
    
    info(button) {
    
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
  }
};
</script>
<style>
.userstable {
}
</style>
