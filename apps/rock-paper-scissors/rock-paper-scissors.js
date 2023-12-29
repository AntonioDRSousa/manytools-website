const min = 1;
const max = 3;
let ptsPlayer = 0;
let ptsCPU = 0;

rand = function(min, max){
	return min + Math.floor(Math.random()*(max-min+1));
};

// 1 is rock, 2 is paper, 3 is scissors
play = function(x){
	let r = rand(min,max);
	let result;
	let p1;
	let p2;
	
	if(x==1){
		p1 = 'rock';
		switch(r){
			case 1: result = 0;
			break;
			case 2: result = -1;
			break;
			case 3: result = 1;
			break;
		}
	}
	else if(x==2){
		p1 = 'paper';
		switch(r){
			case 1: result = 1;
			break;
			case 2: result = 0;
			break;
			case 3: result = -1;
			break;
		}
	}
	else{
		p1 = 'scissors';
		switch(r){
			case 1: result = -1;
			break;
			case 2: result = 1;
			break;
			case 3: result = 0;
			break;
		}
	}

	if(r==1){
		p2 = 'rock';
	}
	else if(r==2){
		p2 = 'paper';
	}
	else{
		p2 = 'scissors';
	}
	
	document.getElementById("image1").src = "img/"+p1+".jpg";
	document.getElementById("image2").src = "img/"+p2+".jpg";
				
	let message = "Player picked "+p1+" and CPU picked "+p2+". "
	let color = "";
	
	switch(result){
		case -1:
			message += "CPU WIN, Player Lose.";
			color = "red";
			ptsCPU++;
		break;
		case 0: message += "Tie."; color = "blue";
		break;
		case 1: 
			message += "Player Win, CPU Lose.";
			color = "lime";
			ptsPlayer++;
		break;
	};
	
	document.getElementById("results").innerHTML = message;
	document.getElementById("results").style.color = color;
	document.getElementById("pts1").innerHTML = "Player: " + ptsPlayer;
	document.getElementById("pts2").innerHTML = "CPU: " + ptsCPU;
};