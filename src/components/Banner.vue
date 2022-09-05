<template>
  <div>
      <button @click="back">前进</button>
      <button @click="forward">后退</button>
      <button @click="test">gogogogogogo</button>
  </div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        },
        test(){
            this.$router.go(3)
        }
    }
}
</script>

<style>

</style>