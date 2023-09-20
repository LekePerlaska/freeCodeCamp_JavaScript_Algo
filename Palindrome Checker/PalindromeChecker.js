function palindrome(str) {
    let s = str.match(/[^_\W]/ig).join("").toLowerCase();
    let p = s.split("").reverse().join("");
    if(s === p) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(palindrome("eye"));