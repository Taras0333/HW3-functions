//1
	function getMaxDigit(numbers){
		if (isNaN(numbers)){
			alert('Error, its not a number')
		} else{
			let maxNumber = 0;
    const splitNumber = numbers.split('');
 		for (let i = 0; i < splitNumber.length; i++){
 		 if (maxNumber < splitNumber[i]) {
      		maxNumber = splitNumber[i];
    	}
 	}
return maxNumber;
		}
		
 }


//3

function getNameFirstLetterBig (name){
	name = name.toLowerCase().split('');
  const bigLetter = (name[0].toUpperCase());
	let eachLetter = '';
	for (let i = 0; i < (name.length) - 1; i++){
		eachLetter += (name[i + 1] + ''); 
		
    }
  const result = (bigLetter + eachLetter);
  return result;
		
}
//4
function getSaleryNetto (salery) {
	const firstTax = 18;
	const secondTax = 1.5;
	const taxes = (firstTax + secondTax);
	const sumOfTaxes = (salery * taxes / 100);
	const saleryNetto = (salery - sumOfTaxes);
	return saleryNetto;
}
//5
function getRandomInt (max, min){
  return Math.floor(Math.random() * (+max - (+min) + 1)) + (+min);
}
//6

function getCountLetter (word, letter){
	const count = (word.split(letter).length - 1);
	return count;
}
//7
function convertCurency (curency){
	const dollarsBe = 26.60;
	const uahBe = 0.036; 
	let result = 0;
	if (curency.includes('$')){
		result = (parseInt(curency) * dollarsBe + 'UAH');
	} else if (curency.includes('UAH')) {
		result = (parseInt(curency) * uahBe + '$');
	} else{
		throw ('Error');
	}
	return result;
	}
//8
function getRandomPassword (length) {
	if (length){
		let result = '';
	for (let i = 0; i <= length - 1; i++){
		const randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		result += String(randomNumber); 
	}
	return result;

}else {
	let result = '';
	for (let i = 0; i <= 7; i++){
		const randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		result += String(randomNumber); 
	}
	return result;
}
}
//9
function deleteLetter(word, letter){
  const letters = word.split('');
  let result = '';
  for (let i = 0; i < word.length; i++){
    if (word[i] !== letter){
      result += word[i];
    }
  }
  return result;
}
//10
function isPalyndrom(word){
  const split = word.split('');
  const length = split.length;

  for (let i = 0; i <= split.length / 2; i++){
    if (split[i] === split.length - (i + 1)){
    return true;
  } else {
  	return false;
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
<p>Word without chosen letter: ${deleteLetter(prompt('Write a word'), prompt('Write the letter you want be deleted'))};</p>
<p>Is your word palyndrom?: ${isPalyndrom(prompt('Write your word, you want to chack on palyndrom'))};</p>
`;



