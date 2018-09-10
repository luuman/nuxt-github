<template>
  <div>
    <p>{{ $t('links.english') }}
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button><br>
      <nuxt-link to="/">Home</nuxt-link>
    </p>
  </div>
</template>