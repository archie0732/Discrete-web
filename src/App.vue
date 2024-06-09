<template>
  <div :style="{ backgroundColor: backgroundColor }" id="app">
    <h1>離散計算器</h1>
    <div>
      <label for="base" class="aa">基數 (Base): </label>
      <input v-model.number="base" type="number" id="base" />
    </div>
    <div>
      <label for="exponent" class="aa">指數 (Exponent): </label>
      <input v-model.number="exponent" type="number" id="exponent" />
    </div>
    <div class="oo">
      
      <label for="ch" class="font">現在模式(now use)</label>
      <div @click="toggleDiv" class="check">{{ buttontext }}</div>
    </div>
    <div v-if="isCheck">
      <label for="mod" class="aa">取模 (Mod):</label>
      <input v-model.number="mod" type="number" id="mod" />
    </div>
    <div>
      <h2 class="result">Result</h2>
      <h2 class="result">{{ result }}</h2>
    </div>
  </div>
</template>

<script>
import './style.css';
import {slove} from './index.js';
export default {
  data() {
    return {
      base: 0,
      exponent: 0,
      mod:1,
      isCheck:0,
      buttontext:'未取模(non-mod)',
    };
  },
  computed: {
    result() {
      if(this.isCheck==0){
        return (Math.pow(this.base, this.exponent));
      }
      else if(this.isCheck==1){
        return (Math.pow(this.base, this.exponent))%this.mod;
      }
      else{
        return slove(Math.pow(this.base,this.exponent),this.mod);
      }
    }
  },
  methods:{
    toggleDiv(){
      this.isCheck++;
      if(this.isCheck==3){
        this.isCheck=0;
      }
      if(this.isCheck==0){
        this.buttontext='未取模(non mod)';
      }
      else if(this.isCheck==1){
        this.buttontext='取模(mod)';
      }
      else {
        this.buttontext = '取逆模(inverse mod)';
      }
    }
  }
};
</script>

<style scoped>

</style>
