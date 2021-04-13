<!--使用jsx创建的组件-->
<script lang="jsx" setup>
import {ref} from 'vue'
export default {
  setup(props) {
    const a=ref(0)
    const clic=function(params) {
      a.value++
    }
   return ()=> (
     <>
       <h2>this is jsx:{a.value}</h2>
       <button onclick={clic}>点击</button>
     </>
   )
   
  }
  
}

</script>