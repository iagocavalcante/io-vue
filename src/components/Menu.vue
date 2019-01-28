<template>
  <ion-menu side="start" menuId="first">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list :key="index" v-for="(route, index) in routes">
        <ion-item @click="goToPath(route.path)">{{route.name}}</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    routes: [
      {name: 'Home', path: '/'},
      {name: 'Login', path: '/login'},
      {name: 'About', path: '/about'},
      {name: 'Blog', path: '/blog'}
    ]
  }),
  methods: {
    goToPath (path) {
      this.$router.push(path)
    }
  }
}
</script>

