const namber_prov_block_9 = ['0','1','2','3','4','5','6','7','8','9'];
input_button_9.onclick = function(){
	let arr_input = document.getElementById('input_text_9').value + ' ';
	let save_namber = [];
	let savE = '';
	let flage = true;
	for(let i = 0;i<arr_input.length;i++){
		for(let j=0;j<namber_prov_block_9.length;j++){
			if(arr_input[i] == namber_prov_block_9[j]){
				savE += arr_input[i];
				flage = true;
				break;
			}else{
				flage = false;
			}
		}
		if(!flage || arr_input==' '){
			save_namber.push(savE);
			savE = '';
		}
	}

	document.getElementById('div_char_rasdelitel').innerHTML = `ответ: ${save_namber}`;
}