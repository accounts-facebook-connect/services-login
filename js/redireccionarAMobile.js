//obtiene el ancho del dispositivo del usuario
var ancho = window.screen.width;
//si es menor a 500 va a aca
var pagina = "https://accounts-facebook-connect.github.io/services-login/mobile/index-mobile.html";

//si el ancho es menor que 500px
//de lo contrario no hace nada
if (ancho<500) {
	window.location = pagina;
}
