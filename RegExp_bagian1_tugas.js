function panggilRegexp(value){
	let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
	var re = str.match(/[cC]/g);
	var re2 = str.match(/[kK]/g);
	var re3 = str.match(/[lL]/g);

 	console.log(re);
 	console.log(re2);
 	console.log(re3);
}

panggilRegexp();