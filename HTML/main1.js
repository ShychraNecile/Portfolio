//alert("Hello World");
//spelerAanDeBeurt =  
var spelerAanDeBeurt;
var symbool;

function onload(){
	var container = document.getElementById("buttonContainer");
	container.style.display = "none";
	container = document.getElementById("statusContainer");
	container.style.display = "none";

}


function startGame(){
	var p1 = document.getElementById ("player1").value;
	spelerAanDeBeurt = p1;
	document.getElementById ("huidigeSpeler").textContent=spelerAanDeBeurt;
	symbool = "X";
	document.getElementById ("symbool").textContent=symbool;
	var container = document.getElementById("buttonContainer");
	container.style.display = "block";
	container = document.getElementById("statusContainer");
	container.style.display = "block";
}

function zet(getal, button){
	button.disabled = true;
	document.getElementById ("symbool").textContent=symbool;
	button.textContent=symbool;

	if (checkWinst()){
		document.getElementById("status").textContent = "Gewonnen!";

	}	
	else if (veldenVol()){
		document.getElementById("status").textContent = "Gelijkspel!";

	}
	else {
		wisselSpeler ();
	}

}
function drieOpEenRij(buttonid1, buttonid2, buttonid3){
	return document.getElementById(buttonid1).textContent == symbool &&
			document.getElementById(buttonid2).textContent == symbool &&
			document.getElementById(buttonid3).textContent == symbool
}

function checkWinst(){
	if (drieOpEenRij("b1", "b2", "b3")) return true;
	if (drieOpEenRij("b4", "b5", "b6")) return true;
	if (drieOpEenRij("b7", "b8", "b9")) return true;
	if (drieOpEenRij("b1", "b4", "b7")) return true;
	if (drieOpEenRij("b2", "b5", "b8")) return true;
	if (drieOpEenRij("b3", "b6", "b9")) return true;
	if (drieOpEenRij("b1", "b5", "b9")) return true;
	if (drieOpEenRij("b3", "b5", "b7")) return true;
	return false;
}

function veldenVol(){
	if (!document.getElementById("b1").disabled) return false;
	if (!document.getElementById("b2").disabled) return false;
	if (!document.getElementById("b3").disabled) return false;
	if (!document.getElementById("b4").disabled) return false;
	if (!document.getElementById("b5").disabled) return false;
	if (!document.getElementById("b6").disabled) return false;
	if (!document.getElementById("b7").disabled) return false;
	if (!document.getElementById("b8").disabled) return false;
	if (!document.getElementById("b9").disabled) return false;
	return true;
}
function wisselSpeler(){
	if (spelerAanDeBeurt == document.getElementById("player1").value){
		spelerAanDeBeurt = document.getElementById("player2").value;
		symbool = "O";
	}
	else {
		spelerAanDeBeurt = document.getElementById("player1").value;
		symbool = "X";
	}
	document.getElementById("huidigeSpeler").textContent = spelerAanDeBeurt;
	document.getElementById("symbool").textContent = symbool;
}

