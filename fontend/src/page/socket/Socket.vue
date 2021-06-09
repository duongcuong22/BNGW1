<template>
  <div class="socket">
    <div class="box">
      <ul v-for="(item, index) in data" :key="index">
        <li>{{item.user}}:</li>
        <li>{{ item.message }}</li>
      </ul>
    </div>
    <div class="send-message">
      <input type="text" v-model="form.message" />
      <button @click="sendMessage">gửi</button>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
const socket = io("localhost:3001");
export default {
  data() {
    return {
      data: [],
      form: {
        message: "",
        type: this.$cookies.get("type"),
        user: this.$cookies.get("name")
      },
    };
  },
  created() {
    socket.on("chat message", (data) => {
      this.data.push(data);
    });
  },
  methods: {
    sendMessage() {
      socket.emit("chat message", this.form);
      this.form.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.socket {
  .box {
    margin: 10px auto;
    width: 500px;
    height: 400px;
    border: 1px solid black;
    ul {
      li {
        list-style: none;
      }
    }
  }
  .send-message {
    input {
      margin-left: 410px;
      width: 462px;
    }
  }
}
</style>
