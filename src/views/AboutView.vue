<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('env', process.env.VUE_APP_API_URL)
  },
  data() {
    return {

    }
  },
}
</script>
