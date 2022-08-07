
// reversed function

function reverseStr(text) {
  
    let reversedAll = ''
    for(let i = text.length-1;  i>= 0 ; i--){
let element = text[i];
reversedAll += element


    }
    console.log(reversedAll)
}

const speech = 'hello World';
reverseStr(speech)