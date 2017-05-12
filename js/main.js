/*
function Suscriptor(nombre, apellido, email, direccion, telefono){
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.direccion = direccion;
	this.telefono = telefono
}
*/

function mostrarData(){
	var clientes = document.getElementById('clientes');
	var nombre = document.getElementById('Nombre').value;
	var apellido = document.getElementById('Apellido').value;
	var email = document.getElementById('Email').value;
	var direccion = document.getElementById('Direccion').value;
	var telefono = document.getElementById('Telefono').value;
	var pack = document.getElementById('pack').value;
	var newsletter = document.getElementById('newsletter')
	
	if(nombre == ""){
		alert("Debe ingresar Nombre");
	}else if(apellido == ""){
		alert("Debe ingresar Apellido");	
	}else if(email == ""){
		alert("Debe ingresar Email");	
	}else if(direccion == ""){
		alert("Debe ingresar Dirección");	
	}else if(telefono == ""){
		alert("Debe ingresar Teléfono");	
	}else if(pack == ""){
		alert("Debe seleccionar una opción");	
	}else if(!newsletter.checked){
		alert("Debe aceptar nuestro newsletter");
	}else{
		clientes.innerHTML = "<b>Nombre: </b>" + nombre + "<br><b>Apellido: </b>" + apellido + "<br><b>Email: </b>" + 
		email + "<br><b>Dirección: </b>" + direccion + "<br><b>Teléfono: </b>" + telefono + "<br><b>Pack de té: </b>" + pack;
	}
}
