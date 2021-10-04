<template>
    <div>
		<header2> 
			<router-link class="btn btn-primary" to="/login" role="button" color="#ffffff">
            <i class="fa fa-home fa2"></i></router-link> 
		</header2>

        <br>    
        <br>    
        <br>    
        <br>    
        <br>    
        <br>    
        <br>    
        <br>
        <br>    
        <br>    
        <br>    

           <div class="container-grid">
              <div class="row">
                <div class="col-lg-6 info-contact" href="./Home.html">
                  <p> <img src="../assets/1632184721717.jpg" width="300" height="300" alt=""></p>
                </div> 
					
                <div class="formulario">
                <div class="col-lg-10">
                <br>
                <br>
                <br>
                <form name=recuperarcontrasena to="/login">
                  <div class="form-control">  
								
                    <label for="email"><b float="left" text-align="left">Ingrese su correo electronico</b></label>
                    <input placeholder="Correo electronico" type="email" id="email" name="email" required>
       
                    <button type="submit">Recuperar contraseña</button>
                  </div>
							
                </form>
						
              </div> 
            </div>
			</div>

		</div>

        <br>    
        <br>    
        <br>    
        <br>    
        <br>    
        <br>    
        <br>    
        <br>
        <br>    
        <br>    
        <br>
        <br>    

        <div class="copyright">&copy;2021-G5-82</div>	

    </div>
</template>



<style scoped>
.button {
  background-color: #0098db;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

input[type=text], input[type=password], input[type=email]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #0098db;
  color: white;
  padding:14px;
  margin:8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container5 {
  padding: 16px;
}

span a{
	text-decoration: none;
	text-align: right;
	float: right;
	padding-top: 0px;
	font-size: 15px
}

span.rgt {
    text-align: right;
	float: right;
    padding-top: 8px;
	font-size: 15px
		
		
}

.rememberme{
    font-size: 12px;

}

.container-grid{
    width: 100%;
    margin:auto;
}

.row{
    display: flex;  
    width: 100%;
    text-align: left;  
    flex-wrap: wrap; 
    justify-content: left;
}

.col-sm-1 {width: 8.33%;}
.col-sm-2 {width: 16.66%;}
.col-sm-3 {width: 25%;}
.col-sm-4 {width: 33.33%;}
.col-sm-5 {width: 41.66%;}
.col-sm-6 {width: 50%;}
.col-sm-7 {width: 58.33%;}
.col-sm-8 {width: 66.66%;}
.col-sm-9 {width: 75%;}
.col-sm-10 {width: 83.33%;}
.col-sm-11 {width: 91.66%;}
.col-sm-12 {width: 100%;}

@media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-lg-1 {width: 8.33%;}
    .col-lg-2 {width: 16.66%;}
    .col-lg-3 {width: 25%;}
    .col-lg-4 {width: 33.33%;}
    .col-lg-5 {width: 41.66%;}
    .col-lg-6 {width: 50%;}
    .col-lg-7 {width: 58.33%;}
    .col-lg-8 {width: 66.66%;}
    .col-lg-9 {width: 75%;}
    .col-lg-10 {width: 83.33%;}
    .col-lg-11 {width: 91.66%;}
    .col-lg-12 {width: 100%;}
  }

.card col-md-7 mx-auto mt-4{
	background-color: #0098db;
}


.formulario {width: 30%;
}

header2 {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 45px;
	margin: auto;
	background-color: #0098db;
    color: #0098db;
}

.fa2 {
  padding: 10px;
  width: 100px;
  height: 20px;	
  text-align: center;
  text-decoration: none;
  margin: 0px 0px;
  color: #ffffff;
}



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

