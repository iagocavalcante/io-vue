<template>
  <ion-page>
    <ion-content>
      <ion-item>
        <ion-avatar slot="start">
          <img :src="'https://avatars3.githubusercontent.com/u/5131187?s=40&v=4'">
        </ion-avatar>
        <ion-label>Iago Cavalcante</ion-label>
      </ion-item>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Autor de artigos</ion-card-subtitle>
          <ion-card-title>Desenvolvedor Fullstack</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Começando alguns experimentos com ionic, vue e capacitor. Breve teremos artigo sobre.
          Fiquem atentos ao meu medium, blog vila do silício e imasters! 
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

</style>
