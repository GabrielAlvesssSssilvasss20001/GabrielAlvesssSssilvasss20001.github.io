function clicado(){
    alert("Você pode perder os dados preenchidos. Quer continuar?");
    document.getElementById("greetings").innerHTML = "<p>Cadastro concluído</p>";
}

function carregada(){
    alert("A página será exibida em segundos: ");
}

function mouseAcima (elemento) {
    elemento.innerHTML = "MENSAGEM SECRETA";
}

function mouseFora (elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}