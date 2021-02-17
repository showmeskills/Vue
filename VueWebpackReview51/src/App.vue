<template>
    <div id="app">
        <mt-button type="default" @click.native='handleClick' style="width:100%">default</mt-button>
        <mt-button type="primary" style="width:100%">primary</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    methods:{
        handleClick(){
            Toast('Upload Complete');
        }
    }
}
</script>

<style scoped>
  #app{
      margin: auto;
  }
</style>