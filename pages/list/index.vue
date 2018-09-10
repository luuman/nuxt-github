<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        list
      </h1>
      <h2 class="subtitle">
        {{ $t('links.english') }}
      </h2>
      <div class="links">
        <nuxt-link :to="`test`" class="Header__Link" exact>
            {{ $t('links.home') }}
          </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  head () {
    return {
      title: 'this.title[0].name',
      meta: [
        {
          hid: 'Keywords',
          name: 'Keywords1',
          content: 'Keywords2'
        },
        {
          hid: 'description',
          name: 'description1',
          content: 'description2'
        },
        {
          hid: 'description',
          name: 'description1',
          content: 'description2'
        },
      ]
    }
  },
  asyncData ({ params, error }) {
  },
  mouthe () {
  },
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

