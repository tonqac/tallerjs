var gato = 1;

/*
document.querySelector("button").onclick = function(){

	if(gato==1){
		document.getElementById("imagen").setAttribute("src","images/gato2.jpg");
		gato = 2;
	}
	else{
		document.getElementById("imagen").setAttribute("src","images/gato1.jpg");
		gato = 1;	
	}

	console.log(gato);
}
*/

/*
document.querySelector("button").onclick = function(){

	if(gato==1){
		gato = 2;
	}
	else{
		gato = 1;
	}

	document.getElementById("imagen").setAttribute("src","images/gato"+gato+".jpg");
	
}
*/

var pasadorDeGatos = setInterval(function(){

	if(document.getElementById("imagen").getAttribute("src")=="images/gato1.jpg"){
		document.getElementById("imagen").setAttribute("src","images/gato2.jpg");
	}
	else{
		document.getElementById("imagen").setAttribute("src","images/gato1.jpg");
	}
	
}, 1000);


document.getElementById("boton").onclick = function(){
	clearInterval(pasadorDeGatos);
}