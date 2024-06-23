function ToFahrenheit( x) {
    return x * 9 / 5 + 32 ;
}

function ToCelsius(x){
    return (x - 32) * 5 / 9 ;
}

const submitbtn = document.getElementById("submit") ; 
const first = document.getElementById("first");
const secend = document.getElementById("secend") ; 
const result = document.getElementById("result") ; 
const val = document.getElementById("temp") ;
submitbtn.onclick = calcule ;

function calcule (){
    if (first.checked) {
        result.textContent = `${ToFahrenheit(val.value)}`;
    }
    else if (secend.checked) {
        result.textContent = `${ToCelsius(val.value)}`;
    }
    else {
        result.textContent = "val.value";

    }
}

