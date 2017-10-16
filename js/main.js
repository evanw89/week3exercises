var zodiac = 
{
	name: "scorpio",
	image: "https://images.ganeshaspeaks.com/images_gsv7/scorpio200.png",
	description: "Transient, Self-Willed, Purposeful, Unyielding"
}

// var hiddenH1 = document.getElementById("hiddenH1");
// var hiddenP = document.getElementById("hiddenP");

function getHoroscope() {

	document.getElementById("hiddenH1").innerHTML = zodiac.name;
	document.getElementById("hiddenImg").src = zodiac.image;
	document.getElementById("hiddenP").innerHTML = zodiac.description;

}