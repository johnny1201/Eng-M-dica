function piramide(n){
	let u = ''
	let a = '*'
	for (let i=n; i>=1; i--){
			u += '_'
		}
	for (let l=1; l<=n; l++){
		console.log( u.substring(0,n-l),  a,  u.substring(0,n-l) )	
		a += '**'
	}
}
