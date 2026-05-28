function ContaBancaria (saldoInicial) {
  this.saldo = saldoInicial;
}

ContaBancaria.prototype.depositar = function(valor){
  this.saldo += valor;//Desposita no saldo
  logTransacao.registrar.call(this);
};

const logTransacao = {
  registrar(){
    console.log(`Log: Ação realizada no saldo de [${this.saldo}]`);
  }
};

const conta = new ContaBancaria(1000);
conta.depositar(50);