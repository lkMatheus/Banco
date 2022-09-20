export default class Contas {
  constructor(numeroconta, tipoconta, nomeusuario) {
    this._numeroconta = numeroconta;
    this._tipoconta = tipoconta;
    this._nomeusuario = nomeusuario;
    this._saldo = 0;
    this._extrato = [];
  }
  saque(valor) {
    if (valor > this._saldo) return;
    this._saldo = this._saldo - valor;
    const extrato = {
      saldo: this._saldo,
      valor: valor,
      tipo: "saida",
    };
    this._extrato.push(extrato);
  }
  deposito(valor) {
    this._saldo = this._saldo + valor;
    const extrato = {
      saldo: this._saldo,
      valor: valor,
      tipo: "entrada",
    };
    this._extrato.push(extrato);
  }
 transferencia(valor){
    this.saque(valor)
 }

  get extrato() {
    return this._extrato;
  }
  get numeroconta() {
    return this._numeroconta;
  }
  get tipoconta() {
    return this._numeroconta;
  }
  get nomeusuario() {
    return this._nomeusuario;
  }
  get saldo() {
    return this._saldo;
  }
}
