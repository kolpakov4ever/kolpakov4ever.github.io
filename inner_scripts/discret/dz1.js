var table = document.dz1table;

function increment(){
	var p = +("0x"+table.pinput.value);
	
	//Поиск подходящих под формат цифр подстрок
	var num_substrs = table.ainput.value.match(/\([a-fA-F0-9]*\)/g); 
	
	var a = [];
	
	//Перевод подстрок в числа, инвертирование порядка
	for(i=0; i<num_substrs.length; i++){
		a[num_substrs.length-1-i] = +("0x"+num_substrs[i].substring(1,num_substrs[i].length-1));
	}
	
	//Проверка на то, что цифры не больше СС
	for(i=0; i<a.length; i++){
		if(a[i]>=p){
			alert('Неправильный ввод -- число не может быть больше системы счисления.');
			return;
		}
	}
	
	//Собственно, увеличение числа
	var i = 0;
	while(gnor0(a, i) == p-1){
		a[i] = 0;
		i++;
	}
	if(a[i] == undefined){
		a[i] = 1;
	} else{
		a[i]++;
	}
	//Запись числа назад в поле ввода
	var str ='';
	for(i=0; i<a.length; i++){
		str+='('+a[a.length-1-i].toString(16).toUpperCase()+')';
	}
	
	table.ainput.value = str;
}

//Get Number Or Zero
function gnor0(arr, index){
	if(arr[index] == undefined){
		return 0;
	}
	
	return arr[index];
}