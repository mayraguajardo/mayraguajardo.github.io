function revisarQuiz(){
    let count = 0

    var libroElement = document.getElementById("libro")
    var libro = libroElement.options[libroElement.selectedIndex].value
    
    var comidaElement = document.getElementById("comida")
    var comida = comidaElement.options[comidaElement.selectedIndex].value

    var lenguajeElement = document.getElementById("lenguaje")
    var lenguaje = lenguajeElement.options[lenguajeElement.selectedIndex].value

    if(libro === "1"){
        count++
    }

    if(comida === "Pizza"){
        count++
    }

    if(lenguaje === "Python"){
        count++
    }

    alert("Tuviste: " + count + "/3 respuestas correctas.")
}