<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
  <div v-for='gettersUser in gettersUsers' :key='gettersUser.id'>
    {{gettersUser.id}} {{gettersUser.name}} {{gettersUser.address}}
    </div>
    <h1>Made By Actions</h1>
  <div v-for='user in users' :key='user.id'>
    {{user.id}} {{user.name}} {{user.address}}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
//import the global store object from Vuex
import {useStore} from 'vuex'
// declare the store variable
const store = useStore();

const msg = ref("Welcome to my Vuex Store");

const getUsers = computed(() => {
  return store.getters.getUsers
})

const users = computed(() => {
  return store.state.users
})

onMounted(() => {
// dispatch the fetchUsers action which commits a mutation to update the state
  store.dispatch("fetchUsers");
})
</script>