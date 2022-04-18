<template>
  <div class="container">
    <img :src="poket.url" alt="" class="mon-img">
    <div class="name">이름 : {{poket.name}}</div>
    <div class="type">타입 : {{poket.type}}</div>
  </div>
</template>

<script>
  export default {
    props:{
      poket:{
        type:Object,
        default:()=>{
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
    .mon-img{
      width: 70%;
    }
  }
</style>