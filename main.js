function onClickInit () {
    var multiplo = document.getElementById('multiplo').value;
    var visor = document.getElementById('visor')
    
    if(multiplo <= 100){
        if(multiplo % 3 === 0 && multiplo % 5 === 0 && multiplo != "") {
            visor.innerText='Bora Dale Javascript!'
        }else if(multiplo % 3 === 0 && multiplo != "") {
            visor.innerText='Bora! '
        }else if (multiplo % 5 === 0 && multiplo != "" ) { 
            visor.innerText='Dale! '
        }else if(multiplo === "") {
            visor.innerText = 'Digite um Número!'
        }else {
            //visor.innerText='Dale Dele Dele Dole'
            visor.innerText='Não é múltipo de 3 ou 5'
        }

    }else {
        alert('Operação inválida! Por Favor Digite um número menor ou igual a 100.')
    }
}