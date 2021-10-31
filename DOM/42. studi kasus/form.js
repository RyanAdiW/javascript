function buat_login() {
	// menghapus elemen dengan id 'x'
	var elem = document.getElementById('x');
	elem.parentElement.removeChild(elem);

	// membuat element paragraf (p) di dalaman element div
	var p = document.createElement("p");
	p.className = "tulisan_login";
	p.innerHTML = "Silakan Login";
	var element = document.getElementsByTagName('div')[0];
	element.appendChild(p);

	// membuat elemen form di dalam elemen div
	var form = document.createElement("FORM");
	element.appendChild(form);

	// membuat form username
	var label = document.createElement("label");
	label.innerHTML = "Username";
	form.appendChild(label);

	var input_username = document.createElement("input");
	input_username.type = "text";
	input_username.name = "username";
	input_username.className = "form_login"
	form.appendChild(input_username);

	// membuat form password
	var label2 = document.createElement("label1");
	label2.innerHTML = "Password";
	form.appendChild(label2);

	var input_password = document.createElement("input");
	input_password.type = "password";
	input_password.name = "username";
	input_password.className = "form_login"
	form.appendChild(input_password);

	// membuat button submit
	var tombol = document.createElement("input");
	tombol.type = "submit";
	tombol.className = "tombol_login"
	form.appendChild(tombol);
}