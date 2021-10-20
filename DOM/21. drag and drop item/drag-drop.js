function dragStart() {
	event.dataTransfer.setData("Text",event.target.id);
}

function dragging() {
	document.getElementById("objectText").innerHTML = "Element sedang didrag";
}

function allowDrop() {
	event.preventDefault();
}

function drop() {
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(data));

	document.getElementById("objectText").innerHTML = "Element sudah didrop";
}