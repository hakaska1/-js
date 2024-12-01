input_button_4.onclick = function(){
	let clovo_string = document.getElementById('input_text_4').value;
	let clovo_res ='';
	for(let i = 0;i<clovo_string.length;i++){
		if(clovo_string[i]=='-'){
			clovo_res += clovo_string[i+1].toUpperCase();
			i++;
		}else{
			clovo_res += clovo_string[i];
		}
	}
	clovo_string = clovo_res;
	document.getElementById('div_char_podtherkivanie').innerHTML = `ответ: ${clovo_string}`;
}