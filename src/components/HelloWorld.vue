
<template>
  <h1 class="red">{{ msg }}</h1>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <button @click="onclick">emit</button>
</template>

<script setup>
import { defineProps, reactive, useContext } from 'vue'
import { defineEmit } from 'vue'
//1.pops属性定义
defineProps({
  msg: String,
})
//2.获取上下文
const ctx = useContext()
// 向外暴露值或者方法
// 在script-setup模式下，所有数据只是默认return给template使用，不会暴露到组件外，所以父组件是无法直接通过挂载 ref 变量获取子组件的数据。
// 如果要调用子组件的数据，需要先在子组件显示的暴露出来，才能够正确的拿到，这个操作，就是由 expose 来完成。
ctx.expose({
  log: function (str) {
    console.log('子组件暴露的方法', str)
  },
})

//3.emit接收事件
const emit = defineEmit(['myclick'])
const onclick = () => {
  //也可直接使用上下文中的emit:ctx.emit('mycilck')
  emit('mycilck')
}
const state = reactive({ count: 0 })
</script>

<style scoped>
@import url('../assets/css/main.css');
a {
  color: #42b983;
}
</style>