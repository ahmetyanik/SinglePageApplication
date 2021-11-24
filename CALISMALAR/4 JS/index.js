function nextSquare(n) {

    console.log((Math.sqrt(n)+"").includes("."));
	
	if((Math.sqrt(n)+"").includes(".")){
		return null;
	}else{
		return (Math.sqrt(n)+1)*(Math.sqrt(n)+1);
	} 
	
}

