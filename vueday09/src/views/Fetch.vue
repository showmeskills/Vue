<template>
  <div class="fetch">
    <ul>
      <li v-for="(item,idx) in data" :key="idx">
        <div>ID:{{item.id}}</div>
        <div>title:{{item.title}}</div>
        <div>completed:{{item.completed}}</div>
      </li>
    </ul>
    <button @click='handleData'>Request data</button>
  </div>
</template>

<script>


export default {
  name: 'Fetch',
  components: {
   
  },
  data(){
    return{
      data:[],
    }
  },
  methods: {
    handleData(){
      let api = 'http://jsonplaceholder.typicode.com/posts?_limit=20'
      fetch(api).then(res=>{
        return res.json()
      })
      .then(res=>{
        this.data = res
      })
    }
  }
}
</script>
