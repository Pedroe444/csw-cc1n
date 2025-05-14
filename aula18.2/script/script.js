
/*window.alert("hello world!")*/

function exibedados(){

        document.getElementById("resposta").
            innerHTML = "esse é o meu novo segundo código javascript";

            document.getElementById("resposta2").innerHTML = window.confirm("você está gostando do js?")

            /*"o nome digitando foi: " + window.prompt("qual é o seu nome:");*/

            document.getElementById("Pedroca").innerHTML = "o nome digitando foi: " + window.prompt("qual é o seu nome:");
        }
    
            function botao(){
                window.open("./script/botao.html")
            }

function botao2 (){
window.alert("o nome digitado foi:" + document.getElementById("nome").value)
}