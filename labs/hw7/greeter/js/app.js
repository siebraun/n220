//create function to greet when button is pressed
function greet(){
    //grabs nameInput from html doc and gives it a variable name
    let name = document.getElementById("nameInput").value;

    //inserts greeting into document
    document.body.innerHTML = 
    "<h1>hello " + name + "!</h1>";
}