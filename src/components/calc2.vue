<template>
<div>
<header>
	 	<h1>Calculadora</h1>	
 </header>
  <section>
  	<input type="number" name="v1" v-model="visor">
</section>
<section>
 	<button v-on:click="setOperador('somar')">+</button>
 	<button v-on:click="setOperador('subtrair')">-</button>
 	<button v-on:click="setOperador('multiplicar')">X</button>
 	<button v-on:click="setOperador('dividir')">/</button>
 	<button>C</button>
 	<button v-on:click="calc()">=</button>
</section>
<section>
    <button v-on:click="preencher('9')">9</button>
 	<button v-on:click="preencher('8')">8</button>
 	<button v-on:click="preencher('7')">7</button>
 	<button v-on:click="preencher('6')">6</button>
 	<button v-on:click="preencher('5')">5</button>
 	<button v-on:click="preencher('4')">4</button>
 	<button v-on:click="preencher('3')">3</button>
 	<button v-on:click="preencher('2')">2</button>
 	<button v-on:click="preencher('1')">1</button>
 	<button v-on:click="preencher('0')">0</button>
 </section>
</div>
</template>
<script >
export default {
	name: 'calc2',
	data(){
		return {
			v1:'',
			v2:'', 
			operador:null,
			resultado:'',
			visor:''
		}
	},
	methods:{
		preencher(value){
			if (this.operador === null){
				this.v1 = this.v1 + value	
				this.visor = this.v1
			}else{
				this.v2 = this.v2 + value
				this.visor = this.v2  	  			
			} 	
		},
		setOperador(operador){ 
			this.operador = operador
		},
		calc(){
			if(this.operador === 'somar'){
				this.resultado = parseInt(this.v1) + perseInt(this.v2)
			}else if (this.operador === 'subtrair'){ 
				this.resultado = parseInt(this.v1) - parseInt(this.v2)
			}else if (this.operador === 'multiplicar'){
				this.resultado = parseInt(this.v1) * parseInt(this.v2)
			 }else{ 
			   this.resultado = parseInt(this.v1) / perseInt(this.v2)
			}
			this.visor = this.resultado
		}
	}
}	
</script>
<style scoped>
	
</style>