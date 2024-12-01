input_button_5.onclick = function(){
	let slovo_abreviatyra = document.getElementById('input_text_5').value;
	let clovo_res =slovo_abreviatyra[0].toUpperCase();
	if(slovo_abreviatyra[slovo_abreviatyra.length-1] == ' '){
		document.getElementById('div_char_abreviatyra').innerHTML = `без пробела в конце :)`;
	}else if(slovo_abreviatyra[0] == ' '){
		document.getElementById('div_char_abreviatyra').innerHTML = `без пробела в начале :)`;
	}else{
		for(let i = 1;i<slovo_abreviatyra.length;i++){
			if(slovo_abreviatyra[i]==' '){
				clovo_res += slovo_abreviatyra[i+1].toUpperCase();
				i++;
			}
		}
		slovo_abreviatyra = clovo_res;
		document.getElementById('div_char_abreviatyra').innerHTML = `ответ: ${slovo_abreviatyra}`;
	}
}