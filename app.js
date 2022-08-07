


function reverseStr() {

    const inputData = document.getElementById('letterReverser')

  
    let reversedAll = ' ';
    for(let i = inputData.value.length-1 ;  i>= 0 ; i--){
let element = inputData.value[i];
reversedAll += element


    }
 const output = document.getElementById('output').value = reversedAll
}

