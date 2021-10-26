let txtInput = document.getElementById("txtInput");
let numInput = document.getElementById("numInput");
let dvOutput = document.getElementById("dvOutput");



function double(){
    let word = txtInput.value;
    let wordAmt = numInput.value;

    let words = word.repeat(wordAmt);

    dvOutput.innerHTML = words ;
    
}