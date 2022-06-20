function isPalindrome(string) {
  //   // Write your algorithm here
  //   //program that checks whether word is a palindrome or not, ie the reverse of the string is same as the original
    
        let revString= string.split("").reverse().join("")
         console.log(revString)
  
        if (revString=== string){
         return true
            } else{
         return false
          } 
  }
   isPalindrome("motto")

  if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  
  module.exports = isPalindrome;