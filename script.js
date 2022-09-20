import Contabasica from "./basica.js";
import Contaestudante from "./estudante.js";
import Contaplatinum from "./platinum.js";

let arrayContas = [];

function criarconta() {
  if (
    numconta.value == "" ||
    tipoconta.value == "" ||
    nomeusuario.value == ""
  ) {
    alert("Espaço para dado inválido, favor digitar um dado válido");
  } else {
    let conta;
    switch (tipoconta.value) {
      case "basica":
        conta = new Contabasica(
          numconta.value,
          tipoconta.value,
          nomeusuario.value
        );
        arrayContas.push(conta);
        break;

      case "estudante":
        conta = new Contabasica(
          numconta.value,
          tipoconta.value,
          nomeusuario.value
        );
        arrayContas.push(conta);
        break;
      case "platinum":
        conta = new Contabasica(
          numconta.value,
          tipoconta.value,
          nomeusuario.value
        );
        arrayContas.push(conta);
        break;
    }
  }
}

function saque() {
  if (numerocontasaque.value == "" || (valorsaque.value = "")) {
    alert("Dados inválidos");
  } else {
    let i = arrayContas.findIndex(
      (conta) => conta.numeroconta === numerocontasaque.value
    );
    if (i === -1) {
      alert("conta nao encontrada");
      return;
    }
    arrayContas[i].saque(valorsaque.value);
  }
}
function deposito() {
  if (ncontadeposito.value == "" || (valordeposito.value = "")) {
    alert("Dados inválidos");
  } else {
    let i = arrayContas.findIndex(
      (conta) => conta.numeroconta === ncontadeposito.value
    );
    if (i === -1) {
      alert("conta nao encontrada");
      return;
    }
    arrayContas[i].deposito(valordeposito.value);
  }
}

function transferencia() {
  if (ncontatransf.value == "" || (valortransf.value = "")) {
    alert("Dados inválidos");
  } else {
    let i1 = arrayContas.findIndex(
      (conta) => conta.numeroconta === ncontatransf.value
    );
    let i2 = arrayContas.findIndex(
      (conta) => conta.numeroconta === ncontatransf2.value
    );
    if (i1 === -1 || i2 === -1) {
      alert("conta nao encontrada");
      return;
    }
    arrayContas[i1].transferencia(valortransf.value);
    arrayContas[i2].deposito(valortransf.value);
  }
}
function extrato() {
  if (ncontaextrato.value == "") {
    alert("Dados inválidos");
  } else {
    let i1 = arrayContas.findIndex(
      (conta) => conta.numeroconta === ncontaextrato
    );
    impressao.innerHTML = "";
    arrayContas[i1].extrato.forEach((element) => {
      let linha = impressao.insertRow();
      let saldo = row.insertCell(0);
      saldo.innerHTML = element.saldo;
      let valor = row.insertCell(1);
      valor.innerHTML = element.valor;
      let tipo = row.insertCell(2);
      tipo.innerHTML = element.tipo;
    });
  }
}

const ncontaextrato = document.getElementById("ncontaextrato");
const impressao = document.getElementById("impressao");

const ncontatransf = document.getElementById("ncontatransf");
const ncontatransf2 = document.getElementById("ncontatransf2");
const valortransf = document.getElementById("valortransf");

const ncontadeposito = document.getElementById("ncontadeposito");
const valordeposito = document.getElementById("valordeposito");

const numerocontasaque = document.getElementById("ncontasaque");
const valorsaque = document.getElementById("valorsaque");

const numconta = document.getElementById("numconta");
const tipoconta = document.getElementById("tipoconta");
const nomeusuario = document.getElementById("nomeusuario");



let submit = document.getElementById("cadastrar");
submit.addEventListener("click", () => {
  criarconta();
  console.log(arrayContas)
});


let sacar = document.getElementById("sacar");
sacar.addEventListener("click", () => {
  saque();
});


let depositar = document.getElementById("depositar");
depositar.addEventListener("click", () => {
  deposito();
});


let botaotransf = document.getElementById("transferencia");
botaotransf.addEventListener("click", () => {
  transferencia();
});

let imprimir = document.getElementById("extrato");
imprimir.addEventListener("click", () => {
  extrato();
});