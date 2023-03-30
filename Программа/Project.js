const input = document.querySelector('.text')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const Enter = document.querySelector('.Enter')
const Txt = document.querySelector('.Text')
const Clear = document.querySelector('.Clear')
one.addEventListener('click', () => ClickOne())
function ClickOne(){
    input.innerHTML += `1`
}
two.addEventListener('click', () => ClickTwo())
function ClickTwo(){
    input.innerHTML += `2`
}
three.addEventListener('click', () => ClickThree())
function ClickThree(){
    input.innerHTML += `3`
}
four.addEventListener('click', () => ClickFour())
function ClickFour(){
    input.innerHTML += `4`
}
five.addEventListener('click', () => ClickFive())
function ClickFive(){
    input.innerHTML += `5`
}
six.addEventListener('click', () => ClickSix())
function ClickSix(){
    input.innerHTML += `6`
}
seven.addEventListener('click', () => ClickSeven())
function ClickSeven(){
    input.innerHTML += `7`
}
eight.addEventListener('click', () => ClickEight())
function ClickEight(){
    input.innerHTML += `8`
}
nine.addEventListener('click', () => ClickNine())
function ClickNine(){
    input.innerHTML += `9`
}
zero.addEventListener('click', () => ClickZero())
function ClickZero(){
    input.innerHTML += `0`
}
Clear.addEventListener('click', () => ClickClear())
function ClickClear(){
    input.innerHTML = ``
}
Enter.addEventListener('click', () => ClickEnter())
function ClickEnter(){
    console.log(input.innerHTML);
    Txt.innerHTML = ``
    Txt.innerHTML += `BIN=${dec2bin(input.innerHTML)} <br>`
    Txt.innerHTML += `OCT=${dec8bin(input.innerHTML)} <br>`
    Txt.innerHTML += `DEC=${dec10bin(input.innerHTML)} <br>`
    Txt.innerHTML += `HEX=${dec16bin(input.innerHTML)} <br>`
}
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}  
function dec8bin(dec) {
    return (dec >>> 0).toString(8);
}  
function dec10bin(dec) {
    return (dec >>> 0).toString(10);
}
function dec16bin(dec) {
    return (dec >>> 0).toString(16);
}  