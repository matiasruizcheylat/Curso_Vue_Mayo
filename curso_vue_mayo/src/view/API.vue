
<template>
  <div>
    <h3> Listado De Usuarios </h3>
     <table class="tablita">
       <tr><th>ID</th><th>Nombre</th><th>Email</th></tr>
        <tr v-for="usuario in usuarios" :key="usuario.id"  >
                                   <td> {{ usuario.id }}
                                   <td> {{ usuario.name }}   </td>
                                   <td>  {{ usuario.email }}   </td>
                              
                        
                             
                               
       </tr>        
      </table>
  </div>
  
</template>



<script>
import axios from "axios";
export default {
    data: () => ({
     usuarios:[],
     }),
  created() {
    const url ="https://jsonplaceholder.typicode.com/users"; 
    axios.get(url).then((response) => {
      this.usuarios = response.data;
    }); 
  }, 
  components: {
  }

}
</script>



<style>
  .tablita{
     margin: auto;
  }
  .tablita td,th{
    border-bottom:1px solid;
    padding:2px 20px 0px 30px;
    text-align:left;
  }
</style>