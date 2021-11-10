let clickable = document.getElementsByClassName('clickable');

for (i = 0; i < clickable.length; ++i) {
 clickable[i].addEventListener('click', changeColor)  
}

function changeColor() {
    this.style.backgroundColor = this.getAttribute('data-color');
}