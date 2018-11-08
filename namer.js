const fs = require('fs');

let adjectives = fs.readFileSync('./lib/adjectives.txt').toString().split('\n');
let nouns = fs.readFileSync('./lib/nouns.txt').toString().split('\n');

function nameGenerator(num) {
  let adjPicker = adjectives[randomIndex(adjectives.length)];
  let nounPicker = nouns[randomIndex(nouns.length)];
  let numString = numFunction(num);

  if (numString) {
    return `${adjPicker}-${nounPicker}-${numString}`;
  } else {
    return `${adjPicker}-${nounPicker}`;
  }
}

function randomIndex(max){
  return Math.floor(Math.random() * max);
}

function numFunction(num){
  let numString = '';
  let evilExp = RegExp(/6{3}/);
  for (var i = 0; i < num; i++){
    numString += Math.round(Math.random() * 9);
  }
  if (evilExp.test(numString)) {
    return numFunction(num);
  }
  return numString;
}



module.exports = nameGenerator;
