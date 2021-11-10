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
 
    console.log(foundBadWords)
    
    //if input includes bad words,
 
          if(arr.includes("clear", "water", "tires")){
             wordsFound.innerHTML = ("found words: ")+ foundBadWords.join(", ")
          } else {        //else output no bad words found
             wordsFound.innerHTML = ("no bad words found")
          }
        

 
 
    //output amount
    wordAmt.innerHTML = foundBadWords.length;
 
    //clear input
    document.getElementById('wordInput').value='';
    
    
  }