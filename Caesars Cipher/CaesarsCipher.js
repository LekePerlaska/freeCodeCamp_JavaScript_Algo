function rot13(str) {
    const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    const abc13 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    let newStr = [];
    for(let i = 0; i < str.length; i++) {
      for(let j = 0; j < abc.length; j++) {
          if(str[i] === abc[j]){
            newStr.push(abc13[j]);
         }
       }
    }
    return newStr.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"));