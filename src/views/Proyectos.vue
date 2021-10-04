<template>
<div>
  <Header />

  <section class="proy" id="proy">
		<div class="overlay">
				<h2 class="proy_header">A<span class="lixon">LIXON</span></h2>
    </div>
		
  </section>

  <section>
    <h2>Proyectos destacados</h2>

    <carousel   :centerMode="true"
								:perPage="1"
								:navigationEnabled="true"
								paginationColor="#7e7e7e"
								paginationPosition="bottom">

      <slide>
        <div class="example-slide"> <img src="../assets/people-woman-coffee-meeting.jpg" alt="" width="1600" height="600"> </div>
      </slide>

      <slide>
        <div class="example-slide"> <img src="../assets/pexels-lukas-669615.jpg" alt="" width="1600" height="600"> </div>
      </slide>

      <slide>
        <div class="example-slide"> <img src="../assets/pexels-photo-416405.jpeg" alt="" width="1600" height="600"> </div>
      </slide>


      <slide>
        <div class="example-slide"> <img src="../assets/pexels-photo-3183153.jpeg" alt="" width="1600" height="600"> </div>
      </slide>

      <slide>
        <div class="example-slide"> <img src="../assets/startup-photos.jpg" alt="" width="1600" height="600"> </div>
      </slide>
    </carousel>
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
    Footer
  },
}
</script>

<style>

.example-slide {
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}
</style>

