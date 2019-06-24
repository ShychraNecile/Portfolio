var mockUpMenuGegevens = [
{
	MenuNaam: "Tagliatelli", 
	MenuPlaatjeUrl: "https://www.solo.be/uploadedimages/recepten/afbeeldingen/642/436/27122010125838_tagliatelle-zalm-prei.jpg",
	RestaurantNaam: "Giovanni"
},{
	MenuNaam: "Tagliatelli2", 
	MenuPlaatjeUrl: "https://www.solo.be/uploadedimages/recepten/afbeeldingen/642/436/27122010125838_tagliatelle-zalm-prei.jpg",
	RestaurantNaam: "Giovanni"
},{
	MenuNaam: "Tagliatelli3", 
	MenuPlaatjeUrl: "https://www.solo.be/uploadedimages/recepten/afbeeldingen/642/436/27122010125838_tagliatelle-zalm-prei.jpg",
	RestaurantNaam: "Giovanni"
},{
	MenuNaam: "Tagliatelli4", 
	MenuPlaatjeUrl: "https://www.solo.be/uploadedimages/recepten/afbeeldingen/642/436/27122010125838_tagliatelle-zalm-prei.jpg",
	RestaurantNaam: "Giovanni"
},{
	MenuNaam: "Tagliatelli5", 
	MenuPlaatjeUrl: "https://www.solo.be/uploadedimages/recepten/afbeeldingen/642/436/27122010125838_tagliatelle-zalm-prei.jpg",
	RestaurantNaam: "Giovanni"
},
]
var lowCalGroningenUrl = "https://meteoserver.nl/api/liveweer.php?lat=52.1052957&long=5.1806729&key=02462ed844"; 

function submitCal() {
  console.log (document.getElementById("invoer-calorieen").value);
}
function showValue(id, value) {
  document.getElementById (id).textContent = value;
}
function verbergOpties() {
  	var filter = document.getElementById("keuze-afhaal-etc");
	filter.style.display = "none";
	var button = document.getElementById ("uitgebreidZoeken");
	button.textContent= "Uitgebreid zoeken";
}
function toonOpties() {
	var filter = document.getElementById("keuze-afhaal-etc");
	filter.style.display = "block";
	var button = document.getElementById ("uitgebreidZoeken");
	button.textContent= "Verbergen";
}
function uitgebreidZoeken() { // toggle
	var filter = document.getElementById("keuze-afhaal-etc");
	if (filter.style.display=="block" ) {
		verbergOpties(); 
	}else {
		toonOpties();
	}
}
function onload() {
	verbergOpties();
	//menuGegevensOphalen();
	populateTiles(mockUpMenuGegevens);
}
function menuGegevensOphalen() {
	$.get (lowCalGroningenUrl, function(data) {
		var menugegevens = data.liveweer[0];
		populateTiles(menugegevens);
	});
}
function populateTiles(menugegevens) {
	console.log (menugegevens);
	//var container = document.getElementById ("tilesContainer");
	console.log(menugegevens[0]);
	for(var i=0; i <menugegevens.lenght; i++) {
		console.log(menugegevens[i]);

	}
}
function selecteerAlles() {
	var checkbox1 = document.getElementById ("uit-eten");
	var checkbox2 = document.getElementById ("afhalen");
	var checkbox3 = document.getElementById ("bezorgen");
	checkbox1.checked = true;
	checkbox2.checked = true;
	checkbox3.checked = true;
}