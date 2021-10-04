<template>
		<!-- Footer Section -->
		<div>
		<section class="footer_banner" id="contact">
			<p class="footer_text">Siganos en nuestras redes: </p>

			<a class="btn btn-primary" href="https://www.instagram.com/Alixon/" role="button">
				<i class="fa fa-instagram"></i></a>

			<a class="btn btn-primary" href="https://www.linkedin.com/in/Alixon" role="button">
				<i class="fa fa-linkedin"></i></a>

			<a class="btn btn-primary" href="https://twitter.com/Alixon" role="button">
				<i class="fa fa-twitter"></i></a>

		</section>
		<!-- Copyrights Section -->
		<div class="copyright">&copy;2021-G5-82</div>
		</div>
</template>

<script>
export default{
    name: "Footer"
}
</script>

<style scoped>

@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

/* Bloque de footer */

.footer_banner {
	background-color: #FFFFFF;
	padding-top: 5px;
	padding-bottom: 5px;
	margin-bottom: 0px;
	text-align: center;
	margin-top: 0px;

}

.footer_text{
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
	background-color: #FFFFFF;
	color: #000;
	font-weight: 100;
	letter-spacing: 2px;
	border-top-width: 2px;
	font-size: 12px;
}

.fa {
  padding: 0px;
  font-size: 40px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  margin: 0px 0px;
  color: #0098DB;
  background-color: #FFFFFF;
}

/* Bloque de copyright */
.copyright {
	text-align: center;
	padding-top: 5px;
	padding-bottom: 5px;
	background-color: #000000;
	color: #FFFFFF;
	text-transform: uppercase;
	font-weight: 100;
	letter-spacing: 2px;
	border-top-width: 2px;
	font-size: 12px;
}

</style>
