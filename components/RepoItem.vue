<template lang="html">
  <nuxt-link class="repo-item"
    :to="{
      name: 'REPO_DETAIL',
      params: {
        username: repo.owner.login,
        reponame: repo.name
      }
    }">
    <repo-content :repo="repo"></repo-content>
  </nuxt-link>
</template>

<script>
import RepoContent from './RepoContent';
export default {
  props: ['repo'],
  components: {
    RepoContent
  }
}
</script>

<style lang="scss">
.repo-item {
  border-radius: 6px;
  background-color: #ffffff;
  border: solid 0.5px #e5e5e5;
  margin-bottom: 5px;
  display: block;
  text-decoration: none !important;
  overflow: hidden;
}
</style>
