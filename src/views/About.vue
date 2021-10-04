<template>
<div>
  <Header />
  <section class="proy" id="proy">
		<div class="overlay">
				<h2 class="proy_header">A<span class="lixon">LIXON</span></h2>
    </div>
		
  </section>

  <section>
    <h2>Acerca de Nosotros</h2>

      <div class="container-grid">
        <div class="row">
          <div class="col-lg-6 info-about">
            <h3>Misión</h3>
            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente veniam, quam facilis
                            nobis nostrum aspernatur incidunt dolorem illum beatae tempora placeat exercitationem
                            quasi molestiae ut vel assumenda fugit consequuntur tenetur.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe libero autem earum
                            ipsum perspiciatis assumenda labore illum quae maiores, enim cupiditate numquam
                            consectetur consequuntur, provident inventore fuga placeat nobis animi?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate debitis laboriosam
                            tempore soluta minima unde! Qui, et consequatur sit ipsa ea atque officiis ratione modi
                            repudiandae, officia praesentium ipsum unde?
            </p>
          </div>
          <div class="col-lg-6 info-about">
          <h3>Visión</h3>
          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente veniam, quam facilis
                            nobis nostrum aspernatur incidunt dolorem illum beatae tempora placeat exercitationem
                            quasi molestiae ut vel assumenda fugit consequuntur tenetur.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe libero autem earum
                            ipsum perspiciatis assumenda labore illum quae maiores, enim cupiditate numquam
                            consectetur consequuntur, provident inventore fuga placeat nobis animi?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate debitis laboriosam
                            tempore soluta minima unde! Qui, et consequatur sit ipsa ea atque officiis ratione modi
                            repudiandae, officia praesentium ipsum unde?
          </p>
        </div>
      </div>
    </div>

  </section>

  <section>
    <h2>Nuestro Equipo de Trabajo</h2>
    <div class="container-grid">
      <div class="row container-images">
        <div class="col-lg-2 image">
          <img src="../assets/003-teenager.png" alt="">
          <h4>Andrés</h4>
        </div>
        <div class="col-lg-2 image">
          <img src="../assets/004-teenager.png" alt="">
          <h4>Zuleidy</h4>
        </div>
      </div>
    </div>
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

