//1

function getMaxDigit(a){
 	const splitNumber = a.split('');
 	let maxNumber = 0;
 	for (i = 0; i < splitNumber.length; i++){
 		 if (maxNumber < splitNumber[i]) {
      		maxNumber = splitNumber[i];
    	}
 	}
 	return maxNumber;
 }
//3

function getNameFirstLetterBig (a){
	a = a.toLowerCase().split('');
  const bigLetter = (a[0].toUpperCase());
	let eachLetter = '';
	for (i = 0; i < (a.length) - 1; i++){
		eachLetter += (a[i + 1] + ''); 
		
    }
  const result = (bigLetter + eachLetter);
  return result;
		
}
//4
function getSaleryNetto (a) {
	const firstTax = 18;
	const secondTax = 1.5;
	const taxes = (firstTax + secondTax);
	const sumOfTaxes = (a * taxes / 100);
	const saleryNetto = (a - sumOfTaxes);
	return saleryNetto;
}
//5
function getRandomInt (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//6

function getCountLetter (a, b){
	const count = (a.split(b).length - 1);
	return count;
}
//7
function convertCurency (a){
	const dollarsBe = 26.60;
	const uahBe = 0.036; 
	let result = 0;
	if (a.includes('$')){
		result = (parseInt(a) * dollarsBe + 'UAH');
	} else if (a.includes('UAH')) {
		result = (parseInt(a) * uahBe + '$');
	} else{
		return ('Error');
	}
	return result;
	}
//8
function getRandomPassword (a) {
	if (a){
		let result = '';
	for (i = 0; i <= a - 1; i++){
		const randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		result += String(randomNumber); 
	}
	return result;

}else {
	let result = '';
	for (i = 0; i <= 7; i++){
		const randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		result += String(randomNumber); 
	}
	return result;
}
}

const container=document.querySelector("#container");
container.innerHTML=`
<p>Max number: ${getMaxDigit(prompt('Write numbers'))};</p>
<p>Name: ${getNameFirstLetterBig(prompt('Write your name'))};</p>
<p>Salery Netto: ${getSaleryNetto(prompt('Write your salery Brutto'))};</p>
<p>Random number: ${getRandomInt(20, 30)};</p>
<p>Count of latters: ${getCountLetter(prompt('Write a word'), prompt('Write a letter'))};</p>
<p>Converted curency: ${convertCurency(prompt('Write a sum'))};</p>
<p>Generated password: ${getRandomPassword(prompt('How lond the password should be. Write a number'))};</p>
`;



