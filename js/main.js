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
	
	if(nombre == ""){
		alert("Debe ingresar Nombre");
	}
	if(apellido == ""){
		alert("Debe ingresar Apellido");	
	}
	if(email == ""){
		alert("Debe ingresar Email");	
	}
	if(direccion == ""){
		alert("Debe ingresar Dirección");	
	}
	if(telefono == ""){
		alert("Debe ingresar Teléfono");	
	}
	
	clientes.innerHTML = "<b>Nombre: </b>" + nombre + "<br><b>Apellido: </b>" + apellido + "<br><b>Email: </b>" + 
		email + "<br><b>Dirección: </b>" + direccion + "<br><b>Teléfono: </b>" + telefono + "<br><b>Pack de té: </b>" + pack;
}
