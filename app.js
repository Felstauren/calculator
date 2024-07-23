let screen = document.querySelector('#display');
let btn = document.querySelectorAll('button');
let numberOperator = 0


for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", e => {
        if(btn[i].classList.contains('number')){
          addNumber(e)
        } else if(btn[i].classList.contains('operator')){
            addOperator(e)
        } else if(btn[i].classList.contains('result')){
            result()
        } else if(btn[i].classList.contains('clear')){
            clear(e)
        } else if(btn[i].classList.contains('decimal')){
            decimal(e)
        } else if(btn[i].classList.contains('prozent')){
            prozent()
        }
    })
}

function addNumber(e){
    number = e.target.innerText
    updateScreen(number)
}


function addOperator(e) {
    operator = e.target.innerText
    if (numberOperator === 0){
        numberOperator++;
        updateScreen(operator);
    }
}


function result(){
    screen.value = eval(screen.value);
    numberOperator = 0;
}


function updateScreen(number) {
  screen.value += number;
}


function clear(e) {
    clearSymbol = e.target.innerText
    if(clearSymbol === "C" || clearSymbol === "AC"){
        screen.value = "";
        numberOperator = 0;
    } else {
        screen.value = screen.value.slice(0, -1);
        numberOperator = 0;
    }
}


function decimal() {
    if(!screen.value.includes(".")){
        screen.value += "."
    } else if(screen.value.includes("+" || "-" || "*" || "/")){
        if(screen.value.match(/[.]/g).length === 1){
            screen.value += "."
        }
    }
}  



function prozent(){
    screen.value += "/100"
    screen.value = eval(screen.value)
}