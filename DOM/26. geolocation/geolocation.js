var x = document.getElementById('lokasi')

function getLocation(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getPosition);
	} else{
		x.innerHTML = 'Browser kamu tidak mensupport geolokasi';
	}
}

function getPosition(position) {
	x.innerHTML = 'Latitude = ' + position.coords.latitude + '<br>Longitude = ' + position.coords.longitude;
}