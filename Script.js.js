(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
var speakWord = "Hello";
function speak(name) {
  console.log(speakWord + " " + name);
}

   for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i];
    
    if (firstLetter.charAt(0).toLowerCase() === 'j') {
            console.log("Goodbye " + firstLetter);} 
            
    else {  
        console.log("Hello " + firstLetter);
      }
    }
  })();

  