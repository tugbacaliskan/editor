const buttonLeft = document.querySelector('#btnLft');
const buttonCenter = document.querySelector('#btnCntr');
const buttonRight = document.querySelector('#btnRght');
const buttonJustify = document.getElementById('btnJstfy');
const paragraph = document.querySelector('p');

const selectFontSize = document.querySelector('select');


function alignLeft() {
    paragraph.style.textAlign = 'left';
}

function alignCenter() {
    paragraph.style.textAlign = 'center';
}

function alignRight() {
    paragraph.style.textAlign = 'right';
}

function alignJustify() {
    paragraph.style.textAlign = 'justify';
}


buttonLeft.addEventListener('click', alignLeft);
buttonCenter.addEventListener('click', alignCenter);
buttonRight.addEventListener('click', alignRight);
buttonJustify.addEventListener('click', alignJustify);


function changeFontSize(e) {
    var font = e.target.value;
    paragraph.style.fontSize = `${font}px`;
}

selectFontSize.addEventListener('change', changeFontSize);

// const name = 'Tugba';
// const age = 24;

const name = 'Tugba', age = 24;

// alert('Merhaba ' + name + ' Yaşınız ' + age);
alert(`Merhaba ${name} Yaşınız ${age}`);