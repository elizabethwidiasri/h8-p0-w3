function palindrome(kata) {

    
    var tulisan= '';

    for (var i=kata.length-1; i>=0; i--){

        tulisan = tulisan + kata[i];
    }

    if (kata === tulisan) {
        console.log('true');
    } else {
        console.log('false');
    }
    return ''
  }
  


  console.log(palindrome('katak')); 
  console.log(palindrome('blanket')); 
  console.log(palindrome('civic')); 
  console.log(palindrome('kasur rusak')); 
  console.log(palindrome('mister')); 