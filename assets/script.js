let botaoCriptografar = document.querySelector("#btn-criptografar");
let botaoDesriptografar = document.querySelector("#btn-descriptografar");
let botaoCopiar = document.querySelector("#btn-copiar");
let input = document.querySelector(".texto-input");
let mostraMsg = document.querySelector(".mostraMsg");


//BOTÃO CRIPTOGRAFAR
botaoCriptografar.addEventListener("click", function(e){
	e.preventDefault();
	mostraMensagemCriptografada();
	input.value = "";
})

//BOTÃO DESCRIPTOGRAFAR
botaoDesriptografar.addEventListener("click", function(e){
	e.preventDefault();
	mostraMensagemDescriptografada();
	input.value = "";
})

//BOTÃO COPIAR
botaoCopiar.addEventListener("click", function(e){
	e.preventDefault();
	copiarTexto();
})

//OPIAR TEXTO
function copiarTexto() {
    var copiaTexto = mostraMsg;
    var textArea = document.createElement("textarea");
    textArea.value = copiaTexto.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

//MOSTRA MENSAGEM CRIPTOGRAFADA
function mostraMensagemCriptografada(){
	let valor = input.value;
	let textoTrocado = valor;
	textoTrocado = textoTrocado.replace(/e/g, "enter");
	textoTrocado = textoTrocado.replace(/i/g, "imes");	
	textoTrocado = textoTrocado.replace(/a/g, "ai");
	textoTrocado = textoTrocado.replace(/o/g, "ober");
	textoTrocado = textoTrocado.replace(/u/g, "ufat");

	mostraMsg.innerText = textoTrocado;	
}

//MOSTRA MENSAGEM DESCRIPTOGRAFADA
function mostraMensagemDescriptografada(){
	let valor = input.value;
	let textoTrocado = valor;
	textoTrocado = textoTrocado.replace(/enter/g, "e");
	textoTrocado = textoTrocado.replace(/imes/g, "i");	
	textoTrocado = textoTrocado.replace(/ai/g, "a");
	textoTrocado = textoTrocado.replace(/ober/g, "o");
	textoTrocado = textoTrocado.replace(/ufat/g, "u");

	mostraMsg.innerText = textoTrocado;
}