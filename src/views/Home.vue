<template>
<div>
  <Header />
  
  <section class="proy" id="proy">
		<div class="overlay">
			<h2 class="proy_header">A<span class="lixon">LIXON</span></h2>
		</div>
	</section>

	<section class="logo-home">
		<img src="../assets/1632184721717.jpg" alt="">
	</section>

  <Footer />
</div>  
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Contact',
  components:{
    Header,
    Footer,
  },
}
</script>
