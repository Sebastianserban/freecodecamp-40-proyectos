const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let button = document.getElementById("btn").addEventListener("click", function(){
    cambiarTexto()

})

function cambiarTexto(){
    let cambTxt = Math.floor(Math.random() * colors.length);

    let color = document.getElementById("span-simple");

    color.textContent = colors[cambTxt];

    document.body.style.backgroundColor = colors[cambTxt];

    }


    






