<template>
  <ul>
    <li>
      <router-link to="/home">Home</router-link>
    </li>
    <li>
      <router-link to="/sign-in">SignIn
      </router-link>
    </li>
    <li>
      <router-link to="/sign-up">Sign-Up
      </router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </ul>
</template>


<script>
  export default{
  	name: 'home',
  }
</script>
