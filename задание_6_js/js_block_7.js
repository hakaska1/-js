let uravnenie = '';				// для сохранения результата от кнопки калькулятора

// функция для обавления '1' в uravnenie
input_button_7_1.onclick = function(){
	uravnenie += '1';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '2' в uravnenie
input_button_7_2.onclick = function(){
	uravnenie += '2';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '3' в uravnenie
input_button_7_3.onclick = function(){
	uravnenie += '3';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '+' в uravnenie
input_button_7_plus.onclick = function(){
	uravnenie += '+';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '4' в uravnenie
input_button_7_4.onclick = function(){
	uravnenie += '4';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '5' в uravnenie
input_button_7_5.onclick = function(){
	uravnenie += '5';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '6' в uravnenie
input_button_7_6.onclick = function(){
	uravnenie += '6';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '-' в uravnenie
input_button_7_minus.onclick = function(){
	uravnenie += '-';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '7' в uravnenie
input_button_7_7.onclick = function(){
	uravnenie += '7';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '8' в uravnenie
input_button_7_8.onclick = function(){
	uravnenie += '8';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '9' в uravnenie
input_button_7_9.onclick = function(){
	uravnenie += '9';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '*' в uravnenie
input_button_7_umnojenie.onclick = function(){
	uravnenie += '*';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '0' в uravnenie
input_button_7_0.onclick = function(){
	uravnenie += '0';
	document.getElementById('input_text_7').value = uravnenie;
}

// функция для обавления '/' в uravnenie
input_button_7_delenie.onclick = function(){
	uravnenie += '/';
	document.getElementById('input_text_7').value = uravnenie;
}

input_button_7_ravno.onclick = function(){
	let otvet =document.getElementById(`input_text_7`).value + ' ';		//получет знавчения с поля ввода input_text_7
	let namber_cal = [];	// массив для разделения цифр и знаков препинания (тут цифры)
	let viragenia_cal = [];	// массив для разделения цифр и знаков препинания (тут знаки препинания)
	let save_1_namber = '';	// переменная помогает разделять цифры и знаки препинания
	let res = 0;			// записывается результат всех вычесления
	let cal_umn = 0;		// переменная нужня для правильного выполнения вычесления('*','/') и удаления ненужных индексов в массиве namber_cal
	let cal_pus = 0;		// переменная нужня для правильного выполнения вычесления('+','-') и удаления ненужных индексов в массиве namber_cal
	//cal_umn,cal_pus эти переменные я создал для того чтобы сначало выполнялось умножение и деление а потом сложения и вычитание

	//цикл для разделения цифр и знаков препинания
	for(let i = 0;i<otvet.length;i++){
		if((otvet[i] == '+')||(otvet[i] == '-')||(otvet[i] == '*')||(otvet[i] == '/')||(otvet[i] == ' ')){
			namber_cal.push(save_1_namber);
			save_1_namber = '';
			// небольшая проверка чтобы последняя цифра коректно сохранялась
			if(otvet[i] !=' '){
				viragenia_cal.push(otvet[i]);
			}
		}else{
			save_1_namber +=otvet[i];
		}
	}

	//цикл для всех умножений в примере
	for(let i = 0; i<viragenia_cal.length;i++){
		if((viragenia_cal[i] == '*')||(viragenia_cal[i] == '/')){
			if(viragenia_cal[i] == '*'){
				res = namber_cal[i-cal_umn] * namber_cal[i+1-cal_umn];
				namber_cal.splice(i-cal_umn,2,res);
				cal_umn++;

			}
			if(viragenia_cal[i] == '/'){
				res = namber_cal[i-cal_umn] / namber_cal[i+1-cal_umn];
				namber_cal.splice(i-cal_umn,2,res);
				cal_umn++;
			}
		}
	}

	//цикл удаляет из массива viragenia_cal умножение и деления
	for(let i = viragenia_cal.length-1;i>=0;i--){
		if((viragenia_cal[i] == '*')||(viragenia_cal[i] == '/')){
			viragenia_cal.splice(i,1);
		}
	}

	//цикл для выполнения сложения и вычитания
	for(let i = 0; i<viragenia_cal.length;i++){
		if(viragenia_cal[i] == '+'){
			res = +namber_cal[i-cal_pus] + +namber_cal[i+1-cal_pus];
			namber_cal.splice(i-cal_pus,2,res);
			cal_pus++;		
		}
		if(viragenia_cal[i] == '-'){
			res = +namber_cal[i-cal_pus] - +namber_cal[i+1-cal_pus];
			namber_cal.splice(i-cal_pus,2,res);
			cal_pus++;
		}
	}
	document.getElementById('input_text_7').value = res;	//вывод в поле ввода input_text_7 результата сложения
}

// функция для чистки поля ввода
input_button_7_clir.onclick = function(){
	document.getElementById('input_text_7').value = '';
	uravnenie = '';
}