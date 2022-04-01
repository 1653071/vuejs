<template>
  <div class="login-container">
    <div class="form-container">
      <b-tabs
        active-nav-item-class="font-weight-bold text-dark"
        nav-item-class="font-weight-bold text-uppercase text-danger"
        content-class="mt-3"
        no-nav-style=""
        fill
      >
        <b-tab title="Login" active>
          <LoginForm />
        </b-tab >
        <b-tab title="Register" >
          <Register />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import ImageAdmin from "../components/image/ImageAdmin.vue";

import UsersTable from "../components/table/UsersTable.vue";
import LoginForm from "../components/form/LoginForm.vue";
import Register from "../components/form/RegisterForm.vue"
export default {
  name: "LoginScreen",
  components: {
    UsersTable,
    ImageAdmin,
    LoginForm,
    Register
  }
};
</script>
<style>

.login-container {
  background-image: url("https://hkuspace-plk.hku.hk/f/programme/194/1536c696/HD%20-%20Management%20Studies%20m.jpg");
  background-color: #cccccc;
  height: 100vh;
  widows: 100px;
}

.form-container {
  position: absolute;
  top: 100px;
  right: 150px;
  background-color: white;
  border-radius: 5px;
  width: 400px;
  height: 500px;
  box-shadow: 5px 10px 8px #888888;
}
.tab-title-class {
    color: #FF0000 !important;  
}
</style>
