<template>

<router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<script setup>
import {ref} from 'vue'


</script>

<style >

body{
    background: rgb(44, 42, 47);
}
.fade-enter-active {
    transition: all 1s linear; 
    
    filter:blur(0%);
    filter:opacity(100%);  
    /* transform: scale(1);  */
}
.fade-enter-from,
  .fade-leave-to { 
    filter:blur(20px); 
    filter:opacity(0%);  
    
    /* transform: scale(2); */
  }
</style>
