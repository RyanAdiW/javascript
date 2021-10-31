function buat_login() {
	// menghapus elemen dengan tag id 'x'
	var elem = document.getElementById('x');
	elem.parentElement.removeChild(elem);

	// membuat element paragraf (p) di dalam elemen div
	var p = document.createElement('p');
	p.className = "tulisan_login";
	p.innerHTML = "Silakan Mendaftar";
	var element = document.getElementsByTagName('div')[0];
	element.appendChild(p);

	// membuat elemen form di dalam elemen div
	var form = document.createElement('form');
	element.appendChild(form);

	// membuat form username di dalam elemen label
	var label = document.createElement('label');
	label.innerHTML = "Nama User";
	form.appendChild(label);
	// membuat element input di dalam element form
	var inputNamaUser = document.createElement('input');
	inputNamaUser.type = 'text';
	inputNamaUser.name ='namauser';
	inputNamaUser.placeholder = 'Nama User..'
	inputNamaUser.className = 'form_login';
	form.appendChild(inputNamaUser);

	// membuat form no hp di dalam elemen label
	var label2 = document.createElement('label2');
	label2.innerHTML = "Nomor Handphone";
	form.appendChild(label2);
	// membuat element input di dalam element form
	var inputNoHp = document.createElement('input');
	inputNoHp.type = 'tel';
	inputNoHp.name ='handphone';
	inputNoHp.placeholder = 'Nomor Handphone.'
	inputNoHp.className = 'form_login';
	form.appendChild(inputNoHp);

	// membuat form username di dalam elemen label
	var label3 = document.createElement('label3');
	label3.innerHTML = "Username";
	form.appendChild(label3);
	// membuat element input di dalam element form
	var inputUsername = document.createElement('input');
	inputUsername.type = 'text';
	inputUsername.name ='username';
	inputUsername.placeholder = 'Username atau Email ..'
	inputUsername.className = 'form_login';
	form.appendChild(inputUsername);

	// membuat form password di dalam elemen label
	var label4 = document.createElement('label4');
	label4.innerHTML = "Password";
	form.appendChild(label4);
	// membuat element input di dalam element form
	var inputPassword = document.createElement('input');
	inputPassword.type = 'password';
	inputPassword.name ='password';
	inputPassword.placeholder = 'Password ..'
	inputPassword.className = 'form_login';
	form.appendChild(inputPassword);

	// membuat tombol submit
	var tombol = document.createElement('input');
	tombol.type = 'submit';
	tombol.className = 'tombol_login';
	form.appendChild(tombol);



}