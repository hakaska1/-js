const namber_prov_block_3 = ['0','1','2','3','4','5','6','7','8','9'];
input_button_3.onclick = function(){
	let slovo_input_1 = document.getElementById("input_text_3").value;	//получаю слово введенное пользователем
	let res_reg_lowe = ``;
	for(let i=0;i<slovo_input_1.length;i++){
		if(slovo_input_1[i] == slovo_input_1[i].toUpperCase()){
			res_reg_lowe += slovo_input_1[i].toLowerCase();
		}else if(slovo_input_1[i] == slovo_input_1[i].toLowerCase()){
			res_reg_lowe += slovo_input_1[i].toUpperCase();
		}else{
		}
			for(let j = 0;j<namber_prov_block_3.length;j++){
				if(slovo_input_1[i] == namber_prov_block_3[j] ){
					res_reg_lowe += '_';
					break;
				}	
			}

	}
	slovo_input_1 = res_reg_lowe.replace( /\d+/g, '' );
	document.getElementById('div_char_registor').innerHTML = `ответ: ${slovo_input_1}`;
}