import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: [],
    isLogin: true,
  },
  getters: {},
  mutations: {
    checkLogin(state) {
      if (Vue.$cookies.get("token")) {
        state.isLogin = true;
      } else {
        state.isLogin = true;
      }
    },
    checkLogout(state) {
      state.isLogin = true
    },
    totalPrice(state, payload) {
      //  totalPrice = parseInt(payload.totalPrice);
      let totalPrice = parseInt(payload.amount) * 500;
      if (
        parseInt(payload.amount) > 9 &&
        payload.time !== "evening" &&
        payload.place === "home"
      ) {
        totalPrice = totalPrice - totalPrice * 0.5;
      } else if (
        parseInt(payload.amount) > 9 &&
        payload.time === "evening" &&
        payload.place === "home"
      ) {
        totalPrice = totalPrice - totalPrice * 0.4;
      } else if (
        parseInt(payload.amount) > 9 &&
        payload.time !== "evening" &&
        payload.place !== "home"
      ) {
        totalPrice = totalPrice - totalPrice * 0.4;
      } else if (parseInt(payload.amount) > 9) {
        totalPrice = totalPrice - totalPrice * 0.3;
      } else if (
        parseInt(payload.amount) < 9 &&
        payload.time !== "evening" &&
        payload.place === "home"
      ) {
        totalPrice = totalPrice - totalPrice * 0.2;
      } else if (payload.time !== "evening") {
        totalPrice = totalPrice - totalPrice * 0.1;
      } else if (payload.place === "home") {
        totalPrice = totalPrice - totalPrice * 0.1;
      } else {
        totalPrice = totalPrice;
      }
      payload.totalPrice = totalPrice;
      state.data.push(payload);
    },
    deleteItem(state, payload) {
      state.data.splice(state.data.indexOf(payload), 1);
    },
    editItem(state, payload) {},
  },
  actions: {
    checkLogin({ commit }) {
      commit("checkLogin");
    },
    checkLogout({commit}) {
      commit('checkLogout')
    }
    ,
    totalPrice({ commit }, payload) {
      commit("totalPrice", payload);
    },
    deleteItem({ commit }, payload) {
      commit("deleteItem", payload);
    },
    editItem({ commit }, payload) {
      commit("editItem", payload);
    },
  },
});

export default store;
