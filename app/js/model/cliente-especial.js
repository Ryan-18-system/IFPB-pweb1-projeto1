class ClienteEspecial extends Cliente {
  constructor(nome, cpf, conta) {
    super(nome, cpf, conta)
    this._contaEspecial = new Conta()
  }
  get contaEspecial() {
    return this._contaEspecial
  }
  set contaEspecial(numero) {
    this._contaEspecial.numero = numero
  }
  get contaEspecialSaldo() {
    return this._contaEspecial.saldo
  }
  creditarContaEspecial(newSaldo){
    this._contaEspecial.creditar(newSaldo)
  }
  debitarContaEspecial(valor){
    this._contaEspecial.debitar(valor)
  }

  saldoTotal() {
    return this.conta.saldo + this.contaEspecialSaldo
  }

}
