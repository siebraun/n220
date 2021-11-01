//submit english phrase on click
function submitPhrase() {

    //define variables for input
    var input = document.getElementById('pigInput').value;
    //translation output
    var translation = document.getElementById('translation');
  
    var text = document.createElement('p');
  

  
    //append translated phrase to the DOM
    text.innerHTML = pigPhrase(input);
    translation.appendChild(text);
  }
  
 //convert phrase to pig latin 
  function pigPhrase (phrase) {
    var sentence = phrase.split(' ');
    var piggedPhrase = [];
  
    for (var i = 0; i <= sentence.length - 1; i++) {
      piggedPhrase.push(pigWord(sentence[i]));
    };
    return piggedPhrase.join(' ');
  }
  

 //convert word to pig latin
  function pigWord (word) {
      //replace first vowel with vowel + ay and move rest of word to back
    return word.slice(findFirstVowel(word), word.length) + '-' + word.slice( -word.length, findFirstVowel(word)) + 'ay';
  }
  

  
 //find first vowel in word  
  function findFirstVowel (word) {
      //define vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i <= word.length - 1; i++) {
  
      if (vowels.indexOf(word[i]) !== -1 ) {
        return i;
      }
    }
    return word.length;
  }
  