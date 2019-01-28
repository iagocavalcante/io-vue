<template>
  <ion-page class="ion-page" main>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <Menu/>
    <ion-content main>
      <home/>
    </ion-content>
  </ion-page>
</template>

<script>
import Menu from '@/components/Menu'
import Home from '@/domains/home/Home'
export default {
  components: { Menu, Home}
}
</script>

<style>
ion-title {
  text-align: center;
}
</style>

