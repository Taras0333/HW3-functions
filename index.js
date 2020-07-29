//1
	function getMaxDigit(a){
		if (isNaN(a)){
			alert('Error, its not a number')
		} else{
			let maxNumber = 0;
    const splitNumber = a.split('');
 		for (i = 0; i < splitNumber.length; i++){
 		 if (maxNumber < splitNumber[i]) {
      		maxNumber = splitNumber[i];
    	}
 	}
return maxNumber;
		}
		
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
function getRandomInt (a, b){
  const max = +a;
  const min = +b;
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
//9
function deleteLetter(a){
  const letters = a.split('');
  let result = '';
  for (i = 0; i < a.length; i++){
    if (a[i] !== 'a'){
      result += a[i];
    }
  }
  return result;
}
//10
function isPalyndrom(a){
  const split = a.split('');
  const length = split.length;

  for (i = 0; i <= split.length / 2; i++){
    if (split[i] === split[length - (i + 1)]){
    return 'true';
  } else {
    return 'false';
  }
  }
  
}


const container=document.querySelector("#container");
container.innerHTML=`
<p>Max number: ${getMaxDigit(prompt('Write numbers'))};</p>
<p>Name: ${getNameFirstLetterBig(prompt('Write your name'))};</p>
<p>Salery Netto: ${getSaleryNetto(prompt('Write your salery Brutto'))};</p>
<p>Random number: ${getRandomInt(prompt('Write max number'), prompt('Write min number'))};</p>
<p>Count of latters: ${getCountLetter(prompt('Write a word'), prompt('Write a letter'))};</p>
<p>Converted curency: ${convertCurency(prompt('Write a sum'))};</p>
<p>Generated password: ${getRandomPassword(prompt('How lond the password should be. Write a number'))};</p>
<p>Word without 'a': ${deleteLetter(prompt('Write a word you want the (a) to be deleted'))};</p>
<p>Is your word palyndrom?: ${isPalyndrom(prompt('Write your word, you want to chack on palyndrom'))};</p>
`;



