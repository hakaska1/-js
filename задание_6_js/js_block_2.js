const namber_prov = ['0','1','2','3','4','5','6','7','8','9'];	//массив для проверки на цифры
const namber_0_9 = ['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять'];	//масив для вывода чисел от 0 до 9
const namber_10_19 = ['десять','одинадцать','двенадцать','тринадцать','четырнадцать',
	'пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];		//масив для вывода чисел от 10 до 19
const namber_20_90 =['двадцать','тридцать','сорок','пятдесят','шесдесят','семьдесят','восемьдесят','девяносто']; //масив для вывода чисел от 20 до 99
const namber_100_900 = ['сто','двести','триста','четыриста','пятсот','шесот','семьсот','восемьсот','девятьсот']; //масив для вывода чисел от 100 до 999
const namber_text_1000_9000 =['одна','две'];
// функция для вывода чисел от 0 до 9
function namber_0_9_input(namber){
	for(let i=0;i<namber_0_9.length;i++){
		if(namber == i){
			return namber_0_9[i];
			break;
		}
	}	
}

// функция для вывода чисел от 10 до 19
function namber_10_19_input(namber){
	for(let i=0;i<namber_10_19.length;i++){
		if(namber == (i+10)){
			return namber_10_19[i];
			break;
		}
	}		
}

// функция для вывода чисел от 20 до 99
function namber_20_99_input(namber){
	console.log(`NAM:${namber}`)
	let nam_1 = String(namber)[0];	//сохраняю первую цифру в числе
	let nam_2 = String(namber)[1];	// сохраняю вторую цифру в числе 
	if(nam_1==0){
		return namber_0_9_input(nam_2);
	}else if(namber>=10 && namber<=19){
		return namber_10_19_input(namber);
	}else{
		for(let i = 0;i<namber_20_90.length+2;i++){			
			if(nam_1 == i){
				nam_1 = namber_20_90[i-2];
				break;
			}
		}
		if(nam_2 == 0){
			return nam_1;
		}else{
			return `${nam_1} ${namber_0_9_input(nam_2)}`;
		}
	}
}

// функция для вывода чисел от 100 до 999
function namber_100_999_input(namber){
	let nam_1 = String(namber)[0];	//сохраняю первую цифру в числе
	let nam_2 = String(namber)[1];	// сохраняю вторую цифру в числе 
	nam_2 += String(namber)[2];		// сохраняю третью цифру в числе 

		if(nam_1 == 0){
			return namber_20_99_input(nam_2);
		}else{
		for(let i = 0;i<namber_100_900.length+1;i++){
			if(nam_1 == i){
				nam_1 = namber_100_900[i-1];
				break;
			}
		}

		if(nam_2>=10 && nam_2<=19){
			return `${nam_1} ${namber_10_19_input(nam_2)}`;
		}else if(nam_2[0]==0 && nam_2[1]==0){
			return nam_1;
		} else if(nam_2[0]==0){
			return `${nam_1} ${namber_0_9_input(nam_2[1])}`;
		}else{
			return `${nam_1} ${namber_20_99_input(nam_2)}`;
		}
	}
}

function namber_1000_9999_input(namber){
	let nam_1 = String(namber)[0];
	let nam_2 = String(namber).slice(1);

	if(nam_1==0){
		return namber_100_999_input(nam_2);
	}else{
		if(nam_1 == 1){
			nam_1 = `${namber_text_1000_9000[0]} тысяча`;
		}else if(nam_1 == 2){
			nam_1 = `${namber_text_1000_9000[1]} тысчи`;
		}

		if(nam_1>2 && nam_1<=4){
			nam_1 = `${namber_0_9_input(nam_1)} тысчи`;
		} else if(nam_1>4 && nam_1<=9){
			nam_1 = `${namber_0_9_input(nam_1)} тычяч`;
		}

		if(nam_2==0){
			return `${nam_1}`;
		}else{
		return `${nam_1} ${namber_100_999_input(nam_2)}`;
		}
	}
}
//функция для проверки введено только число или еще и символы
function prov(namber) {
  if (isNaN(namber)) {
    return false;
  } else {
    return true;
  }
}

//функция обработки кнопки input_button_2
input_button_2.onclick = function(){
	let namber_input = +document.getElementById('input_text_2').value;	//получаю слово введенное пользователем
	let res_namber = '';
	if(prov(namber_input)){
		if(namber_input>=0 && namber_input<=9){
			res_namber = namber_0_9_input(namber_input);
		}else if(namber_input>=10 && namber_input<=19){
			res_namber = namber_10_19_input(namber_input);
		}else if(namber_input>=20 && namber_input<=99){
			res_namber = namber_20_99_input(namber_input);
		}else if(namber_input>=100 && namber_input<=999){
			res_namber = namber_100_999_input(namber_input);
		}else if(namber_input>=1000 && namber_input<=9999){
			res_namber = namber_1000_9999_input(namber_input);
		}else if(namber_input>9999 || namber_input<0){
			res_namber = `не больше так нельзя`;
		}
	}else{
		res_namber =`нужно ввести только цифры`;
	}
	document.getElementById('div_namber_char').innerHTML = `ответ: ${res_namber}`;
}