class ClienteEspecial extends Cliente {
  constructor(nome, cpf, conta, contaEspecial) {
    super(nome, cpf, conta)
    this._contaEspecial = contaEspecial
  }
  get contaEspecial() {
    return this._contaEspecial
  }
  set contaEspecial(numero) {
    this._contaEspecial = numero
  }
  get contaEspecialSaldo() {
    this._contaEspecial.saldo
  }
  set contaEspecialSaldo(newSaldo) {
    this._contaEspecial.saldo = newSaldo
  }
  saldoTotal() {
    return Cliente.saldo + this.contaEspecialSaldo()
  }
}
