<template>
  <div>
    <input type="text" :value="filterInput" @input="filterInput = $event.target.value">
    <div class="monlist">
      <MonList v-for="poket in filteredList" :key="poket.id" :poket="poket"></MonList>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MonList from './MonList'
// import _ from 'lodash/throttle'
  export default {
    components:{
      MonList
    },
    data(){
      return {
        poketmon:[],
        filterInput:'',
      }
    },
    mounted(){
      axios.get('../../assets/data/poketmon.json')
      .then(res => {
        console.log(res)
        this.poketmon = res.data.poketmon
      })
      .catch(e => {
        this.error.push(e)
      })
    },
    computed:{
      filteredList(){
        const value = this.filterInput
        return this.poketmon.filter(mon => {
          return mon.name.includes(value) || mon.type.includes(value) 
          // = return mon.name.indexOf(value) > -1 || mon.type.indexOf(value) > -1
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .monlist {
    display: flex;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;
    flex-direction: row;
    margin: auto;
  }
</style>