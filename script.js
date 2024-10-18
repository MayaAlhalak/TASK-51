const btn = document.querySelectorAll(".btn-1");
const result = document.querySelector(".result");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");


let x = '' ;
let y = '' ;
let results = '0';
let operatorbtn ="";

btn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        if(btn.innerText == 'c') {
            result.innerText = "";
            x = '' ;
            y = '' ;
            operatorbtn = '' ;
        } 
        else {
            if(operatorbtn == '') {
                x= x + btn.innerText;
                result.innerHTML = x;
            }
            else{
                y= y + btn.innerText;
                result.innerHTML = x + operatorbtn + y ; 
            }
        }
    });
});
operator.forEach(function(btn) {
    btn.addEventListener('click', function() {
        operatorbtn = btn.innerText;  
        result.innerHTML =result.innerHTML + operatorbtn ; 
    });
});
equals.addEventListener('click', function() {
    if (operatorbtn == '+') {
        results = (Number(x) + Number(y)) ;
    }
    if (operatorbtn == '-') {
        results = (Number(x) - Number(y));
    }
    if (operatorbtn == '*') {
        results = (Number(x) * Number(y));
    }
    if (operatorbtn == '/') {
        results =( Number(x) / Number(y));
    }
    x = '' ;
    y = '' ;
    operatorbtn = '' ;
    result.innerHTML =results;
})

 