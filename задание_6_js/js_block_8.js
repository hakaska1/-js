function del(arr,del_col){
		//цикл удаляет из массива viragenia_cal умножение и деления
	let cal = 0;
	for(let i = 0;i<arr.length;i++){	
		if((arr[i] == ':')||(arr[i] == '/')){
			cal++;
		}
		if(cal == del_col){
			arr.splice(i,1);
			break;
		}
		arr.splice(i,1);
		i--;	
	}
	return arr;
}
input_button_8.onclick = function(){
	let url = document.getElementById('input_text_8').value;
	let protocol = '';
	let domen = '';
	let pyti = '';
	let protocol_res = [];
	let domen_res = [];
	let url_arr = [];
	for(let i = 0;i<url.length;i++){
		url_arr[i] = url[i];
	}
	
	for(let i = 0;i<url_arr.length;i++){
		if(url_arr[i] == ':'){
			protocol = protocol_res;
			break;
		}else{
			protocol_res +=url_arr[i];
		}
	}

	url_arr = del(url_arr,3);

	for(let i = 0;i<url_arr.length;i++){
		if(url_arr[i] == '/'){
			domen = domen_res;
			break;
		}else{
			domen_res +=url_arr[i];
		}
	}

	url_arr = del(url_arr,1);
	for(let i = 0;i<url_arr.length;i++){
		pyti += url_arr[i];
	}
	document.getElementById('div_char_protokol').innerHTML = `Протокол: ${protocol}`
	document.getElementById('div_char_domen').innerHTML = `домен: ${domen}`
	document.getElementById('div_char_pyti').innerHTML = `путь: /${pyti}`
}