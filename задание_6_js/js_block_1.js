const namber = ['0','1','2','3','4','5','6','7','8','9'];	//массив для проверки на цифры
const alphabet = 'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстфухцчшщьыъэюя';	//массив для проверки английских и русских букв

//функция обработки кнопки input_button_1
input_button_1.onclick = function(){
	let slovo_input = document.getElementById("input_text_1").value;	//получаю слово введенное пользователем
	let slovo = '';
	let namber_res = 0;
	let char_res = 0;
	for(let i=0;i<slovo_input.length;i++){
		slovo += slovo_input[i].toLowerCase();
	}
	for(let i=0;i<slovo.length;i++){
		for(let j = 0;j<namber.length;j++){
			if(slovo[i] ==namber[j] ){
				namber_res++;
				break;
			}	
		}
		for(let j = 0;j<alphabet.length;j++){
			if(slovo[i] == alphabet[j]){
				char_res++;
				break;
			}
		}	
	}

	let sumbol_res = slovo.length - namber_res - char_res;
		
	document.getElementById("div_sumbol").innerHTML = `других символов: ${sumbol_res}`;
	document.getElementById("div_namber").innerHTML = `цифр: ${namber_res}`;
	document.getElementById("div_char").innerHTML = `букв: ${char_res}`;
}