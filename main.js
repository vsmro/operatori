//input from the user
let sirCaractere = document.getElementById("inputSting");
let mesajTrue = "Am inteles"
let mesajFalse = "Operator matematic necunoscut"

let rezultat = ""
//let numar = [2, 1024]
let num1 = 2
let num2 = 1024

let operator = [
    {
        nume: "adunare",
        calcul:function(x,y){
            return x+y
        }
    },
    {
        nume: "scadere",
        calcul:function (x,y){
            return x-y
        }
    },
    {
        nume: "inmultire",
        calcul:function (x,y) {
            return x * y
        }
    },
    {
        nume: "impartire",
        calcul:function (x,y) {
            return x / y
        }
    }
]


//Efctueaza calculul
function Calcul() {
    let x = num1
    let y = num2
    switch (sirCaractere.value.toLowerCase()) {

        case operator[0].nume :
            MesajTrue()
            console.log(operator[0].calcul(x,y))
        break;

        case operator[1].nume :
            MesajTrue()
            console.log(operator[1].calcul(x,y))
             break;

        case operator[2].nume :
            MesajTrue()
            console.log(operator[2].calcul(x,y))
            break;

        case operator[3].nume :
            MesajTrue()
            console.log(operator[3].calcul(x,y))
            break;

        default:
            MesajFalse()
    }
}

function MesajTrue() {
alert(mesajTrue)
}

function MesajFalse() {
alert(mesajFalse)
}




