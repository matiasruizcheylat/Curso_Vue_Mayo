<template>
  <div>
    <h3>El formulario de Donantes:</h3>

    
     
      <form class="elForm">
        <label><input type="text" v-model="form.name"/> NOMBRE</label><span class="obligatorio"> *</span><br>
        <label><input type="text" v-model="form.dni"/> DNI</label><span class="obligatorio"> *</span><br>
        <label><input type="checkbox" v-model="form.donante"/> FUE DONANTE</label><br>  
        <label><input type="date"  v-model="form.fecha" />Fecha de nacimiento</label><br>
        <label><button @click.prevent="agregar()">GUARDAR</button></label><br>
          
      </form>

 <h3> Listado De Donantes </h3>
     <table class="tablita">
       <tr><th>NOMBRE</th><th>DNI</th><th>Donante</th><th>Fecha Nac.</th></tr>
        <tr v-for="fruta in frutas" :key="fruta.name"  >
                                   <td> {{ fruta[0]}}
                                   <td> {{ fruta[1] }}   </td>
                                   <td> {{ fruta[2] }}   </td>
                                   <td> {{ fruta[3] }}   </td>
                                                     
       </tr>        
      </table>
</div>

  
</template>



<script>

export default {
  data: () => ({
     form:{ 
		name: null,
		dni: null,
    donante: 0,
    fecha: null,
        },
       frutas:[],
		}),

  methods: {
		agregar() {
            console.log(this.form);
            this.$store.dispatch("name", this.form.name);  
            this.$store.dispatch("dni", this.form.dni);
            this.$store.dispatch("donante", this.form.donante);
            this.$store.dispatch("fecha", this.form.fecha);
            this.frutas.push([ this.form.name, this.form.dni, this.form.donante, this.form.fecha]);

            this.$store.dispatch("frutas", this.frutas);
          //frutas.push({ name:this.form.name, cantidad:this.form.cantidad});
		},
}
}
</script>

<style>
  .elForm{
    display: inline-block;
    margin:0 auto;
    text-align: left;
    margin-top:20px;
    
  }
    .elForm label{
       display: block;
     
  }
  .obligatorio{
    color:#D00;
    font-size:24px;
  }

</style>