function size_d(){
	return (ndigits<=max_size)
}

change_signal = function(){
	if (s[0]=="+"){
		var c = "-";
	}
	else{
		var c = "+";
	}
	s = c+s.substring(1,s.length);
	show_number();
}
			
write_digit = function(d){
	if(size_d()){
		s+=d;
		ndigits++;
		show_number();
	}
}

write_point = function(){
	if((!mark_point)&&(size_d())){
		s+=".";
		mark_point = true;
		show_number();
	}
}

show_number = function(){
	if (s[0]=="+"){
		document.getElementById("number").innerHTML = s.substring(1,s.length);
	}
	else{
		document.getElementById("number").innerHTML = s;
	}
}

setonoff = function(){
	if(onoff){
		onoff = false;
	}
	else{
		onoff = true;
	}
	a = 0;
	b = 0;
	s = "+";
	ndigits = 0;
	mark_point = false;
	operation = " ";
	document.getElementById("number").innerHTML = "0";
}

push = function(op){
	if(operation===" "){
		if(s==="+"){
			s+="0";
		}
		a = Number(s);
	}
	else{
		if(s==="+"){
			s+="0";
		}
		a = op_bin(a,Number(s),operation);
	}
	s = "+";
	document.getElementById("number").innerHTML = a.toString();
	operation=op;
}

op_bin = function(x,y,op){
	if(op=="+"){
		return x+y;
	}
	else if(op=="-"){
		return x-y;
	}
	else if(op=="*"){
		return x*y;
	}
	else if(op=="/"){
		return x/y;
	}
}

op_mon = function(op){
	if(op=="sqrt"){
		console.log(Math.sqrt(a));
		a = Number(s);
		a = Math.sqrt(a);
		s = a.toString();
		document.getElementById("number").innerHTML = a.toString();
	}
}

equals = function(){
	push(operation);
}

const dop = {
	"+":2,
	"-":2,
	"*":2,
	"/":2,
	"sqrt":1
}

const max_size = 16;
var ndigits = 0;
var s = "+";
var a = 0;
var mark_point = false;
var onoff = true;
var operation = " ";