//obtiene el ancho del dispositivo del usuario
var ancho = window.screen.width;
var url = window.location.href;

//si el ancho es menor que 500px hace esto, de lo contrario no hace nada
if (ancho<500) {
	window.location = url + "mobile/index-mobile.html";
}
