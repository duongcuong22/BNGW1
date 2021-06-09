<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- <router-link to="/order" class="navbar-brand text-light">Trang chủ</router-link> -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/carousel" class="navbar-brand text-light"
              >Carousel</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/socket" class="navbar-brand text-light"
              >Socket</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/order" class="navbar-brand text-light" v-if="this.$store.state.isLogin"
              >Thông tin</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/home" class="navbar-brand text-light" v-if="this.$store.state.isLogin"
              >Đặt bàn</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/" class="navbar-brand text-light" v-if="this.$store.state.isLogin"
              >Đăng nhập</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/register" class="navbar-brand text-light" v-if="this.$store.state.isLogin"
              >Đăng ký</router-link
            >
          </li>
        </ul>
        <div @click="logOut" class="btn-logout fas fa-sign-out-alt" v-if="this.$store.state.isLogin">
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.getItem("name"),
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("checkLogout")
      this.$cookies.remove('token')
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>
  .btn-logout {
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    color: #fff;
  }
  .btn-logout:hover {
    background: white;
    color: black;
  }
</style>
