//1

/*function getMaxDigit(a){
 	let number = a + '';
 	console.log(number);
 	const splitNumber = number.split('');
 	console.log(splitNumber);
 	let maxNumber = 0;
 	for (i = 0; i < splitNumber.length; i++){
 		 if (maxNumber < splitNumber[i]) {
      		maxNumber = splitNumber[i];
    	}
    	console.log(maxNumber);
 	}
 	return maxNumber;
 }
console.log(getMaxDigit(5816));*/

//3

/*function nameFirstLetterBig (a){
	let name = a;
	console.log(name);
	name = name.toLowerCase().split('');
	console.log(name);
  let bigLetter = (name[0].toUpperCase());
  console.log(bigLetter);
	let eachLetter = '';
	for (i = 0; i < (name.length) - 1; i++){
		eachLetter += (name[i + 1] + ''); 
		
    }
  console.log(eachLetter);
  let result = (bigLetter + eachLetter);
  return result;
		
	}
// console.log(nameFirstLetterBig(prompt()));*/

//4
/*function getSaleryNetto (a) {
	const saleryBrutto = a;
	console.log(saleryBrutto);
	const firstTax = 18;
	const secondTax = 1.5;
	const taxes = (firstTax + secondTax);
	console.log(taxes);
	const sumOfTaxes = (a * taxes / 100);
	console.log(sumOfTaxes);
	const saleryNetto = (a - sumOfTaxes);
	return saleryNetto;
	 

}
console.log(getSaleryNetto(75000));*/

//5
/*function getRandomInt (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(10, 25));*/

//6

/*function getCountLetter (a, b){
	let word = a;
	console.log(word);
	let letter = b;
	console.log(b);
	let count = (a.split(b).length - 1);
	return count;
}
console.log(getCountLetter(prompt(), prompt()));*/


//7

/*function convertCurency (a){
	let curency = a;
	console.log(curency);
	let dollarsBe = 26.60;
	let uahBe = 0.036; 
	let result = 0;
	if (curency.includes('$')){
		result = (parseInt(curency) * dollarsBe + 'UAH');
	} else if (curency.includes('UAH')) {
		result = (parseInt(curency) * uahBe + '$');
	} else{
		return ('Error');
	}
	return result;
	}
console.log(convertCurency(prompt()));*/

//8
function getRandomPassword (a) {
	if (a){
		let result = '';
	for (i = 0; i <= a - 1; i++){
		let randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
	console.log(randomNumber);
		result += String(randomNumber); 
	}
	return result;

} else {
	let result = '';
	for (i = 0; i <= 7; i++){
		let randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
	console.log(randomNumber);
		result += String(randomNumber); 
	}
	return result;
}
}
console.log(getRandomPassword(prompt()));



