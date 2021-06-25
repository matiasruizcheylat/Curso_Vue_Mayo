<template>
	<div>
		<h3>Último donante registrado</h3>
		<hr>
		<h4>Nombre:{{name}}</h4>
        <h4>DNI:{{ dni }}</h4>
		<h4>Donante: <span v-if="donante==='true'">SI</span><span v-else>NO</span></h4>
		<h4>Fecha Nac: <span v-if="fecha==='null'">-</span><span v-else>{{fecha}}</span></h4>	
	</div>
</template>

<script>
	export default {
		data: () => ({
           name: null, dni: null, donante: null, fecha: null, frutas: null 
		}),
		components: {},

		mounted() {
			this.name = this.$store.getters.name;
            this.dni = this.$store.getters.dni;
            this.donante = this.$store.getters.donante;
			this.fecha = this.$store.getters.fecha;
			this.frutas = this.$store.getters.frutas;
		},

		methods: {
			
		},
	};
</script>
