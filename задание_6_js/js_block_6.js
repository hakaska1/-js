let res = '';
input_button_6_plus.onclick = function(){
	let slovo_obedinenie = document.getElementById('input_text_6').value;
	res += slovo_obedinenie;
	document.getElementById('input_text_6').value = '';
	console.log(res);
}
input_button_6_res.onclick = function(){
	document.getElementById('div_char_obedinenie').innerHTML = `ответ: ${res}`;
}