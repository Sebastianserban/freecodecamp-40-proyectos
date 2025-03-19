let numero = document.getElementById("nr");

let btnIncrease = document.getElementById("inc").addEventListener("click",function(){

   sumar()
})

let btnReset = document.getElementById("res"); // Ahora btnReset almacena el botón
btnReset.addEventListener("click", resetear);

function resetear() {
    numero.textContent = 0;

    if (parseInt(numero.textContent) === 0) {
        numero.style.color = "#000000"; // Negro si es 0
    }
}

let btnDecrease = document.getElementById("dec").addEventListener("click",function(){

    restar()

})

function sumar(){

    let i = 0

    while(i < 1){
        i++
        numero.textContent = parseInt(numero.textContent) + 1;

        if(parseInt(numero.textContent) >= 0){
            numero.style.color = "#008f39"
        }

    }
    
    

}

function restar(){

    if(parseInt(numero.textContent) <= 0){
        numero.style.color = "#ff0000"
    }

    numero.textContent = parseInt(numero.textContent) - 1;
    

}
