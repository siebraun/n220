function catchWords() {
   var wordInput = document.getElementById("wordInput").value;

   let wordAmt = document.getElementById("wordAmt");
 
   let wordsFound = document.getElementById("wordsFound");

   //define bad words
   let badWords = ["clear", "water", "tires"]

   // split words by spaces (" ")
   var arr = wordInput.split(" ");
   
   // filter bad words out
   var foundBadWords = arr.filter(el => badWords.includes(el));

   //loop through input looking for bad words
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] === "clear" || "water" || "tires")   {
              wordsFound.innerHTML = ("found words:")+ foundBadWords.join(", ");
          }
      }



   //output amount
   wordAmt.innerHTML = foundBadWords.length;

   //clear input
   document.getElementById('wordInput').value='';
   
   
 }