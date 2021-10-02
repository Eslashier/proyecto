<template>
    <header> 
        <a class="logo" href="Home.html">
        <img src="../assets/1632184721717.jpg" alt="">
        </a>

        <nav>
        <ul>
            <li><a href="./Home.html">Inicio </a></li>
            <li><a href="./Proyectos.html">Proyectos </a></li>
            <li><a href="./About.html">Acerca de Nosotros </a></li>
            <li><a href="./contact.html">Contáctenos </a></li>
            <li><a href="./login.html">Iniciar sesión</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>

header {
	display: flex;
	justify-content: space-between;
	width: 95%;
	margin: auto;
}

.logo {
	display: flex;
	align-items: center;
}

.logo img {
	width: 50px;
	height: 40px;
}

nav {
	float: right;
	width: 50%; /* Ubicación botones de navegación en el espacio nav*/
	text-align: right; /* Alineacion del texto */
	margin-right: 25px; /* Espacio desde la margen derecha */
}
header nav ul {
	list-style: none; /* Quitar formato de lista */
	float: right; /* Alineacion de botones */
}
nav ul li { /* Propiedades barra de navegación */
	float: left;
	color: #FFFFFF;
	font-size: 15px;
	text-align: left;
	margin-right: 30px;
	letter-spacing: 1px;
	font-weight: bold;
	transition: all 0.3s linear;
}

h4 a { /* Categoria */
	color: #76C04D; /* Color fuente */
	text-decoration: none; /* Quitar subrayado de links */
}

ul li a { /* Categoria */
	color: #000000; /* Color fuente */
	text-decoration: none; /* Quitar subrayado de links */
}

li:hover a {
	color: #76C04D; /* Color botones de navegación al poner el puntero */
}
</style>