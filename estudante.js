import Contas from "./contas.js";

export default class Contaestudante extends Contas {
  constructor(numeroconta, tipoconta, nomeusuario) {
    super(numeroconta, tipoconta, nomeusuario);
    this._transf_disponivel = 0;
    this._extradisponivel = 0;
    this._saque_lmt = 300;
  }
  saque(valor) {
    if (valor > this._saque_lmt) return;
    if (valor > this._saldo) return;
    this._saldo = this._saldo - valor;
    const extrato = {
      saldo: this._saldo,
      valor: valor,
      tipo: "saida",
    };
    this._extrato.push(extrato);
  }

  get extrato() {
    if (this._extradisponivel > 1){
     this._saldo = this._saldo - 0.5;
    }
    this._extradisponivel ++;
    return this._extrato;
  }
  transferencia(valor){
    if (this._transf_disponivel > 1){
      this._saldo = this._saldo - 0.5;  
    }
    this._transf_disponivel ++;
    this.saque(valor)
  }
  
}



