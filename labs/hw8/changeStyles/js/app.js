
//change style of clicked (active) square
function changeStyle(){
    var x = document.getElementsByClassName('active');
    for(var i=0; i< x.length;i++){
       x[i].style.width = "80px";
       x[i].style.backgroundColor = "blue";
    }
}


//activate clicked element
function activate(elem) {
    var square = document.getElementById('square')
    for (i = 0; i < square.length; i++) {
        square[i].classList.remove('active')
    }
    //add active class
    elem.classList.add('active');
    //run changeStyle
    changeStyle()
}