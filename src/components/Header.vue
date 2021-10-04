<template>
  <div>
    <header> 
      <router-link to="/" class="logo" >
      <img src="../assets/1632184721717.jpg" alt="">
      </router-link>

		<nav>
			<ul>
				<li><router-link class="routerLink" to="/">Inicio</router-link></li>
				<li><router-link class="routerLink" to="/proyectos">Proyectos </router-link></li>
				<li><router-link class="routerLink" to="/about">Acerca de Nosotros </router-link></li>
				<li><router-link class="routerLink" to="/contact">Contáctenos </router-link></li>
				<li><router-link class="routerLink" to="/login">Iniciar sesión</router-link></li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script>
export default{
    name: "Header"
}
</script>
