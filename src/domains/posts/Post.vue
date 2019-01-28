<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Blog Posts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding fullscreen>
      <ion-card :key="index" v-for="(post, index) in rows">
        <ion-card-header>
          <img :src="post.better_featured_image.source_url" alt="" />
          <ion-card-title><span v-html="post.title.rendered"></span></ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <span v-html="post.excerpt.rendered"></span>
        </ion-card-content>
      </ion-card>
    </ion-content>

  </ion-page>
</template>

<script>
import PostService from '@/domains/posts/service/PostService'
const service = PostService.build()
export default {
  name: 'Posts',
  data: () => ({
    rows: []
  }),
  methods: {
    fetchRecords () {
      service
        .read()
        .then(this.fetchRecordsSuccess)
    },
    fetchRecordsSuccess (response) {
      if (Array.isArray(response)) {
        this.rows = response
        return
      }
      this.rows = []
    }
  },
  mounted () {
    this.fetchRecords()
  }
}
</script>
