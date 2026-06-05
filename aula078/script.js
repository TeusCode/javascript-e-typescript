//Super Classe ou classe pai:
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return
  }
  this.saldo -= valor;
  this.verSaldo();
};

function ContaC(agencia, conta, saldo, limite) {//Conta Corrente
  this.limite = limite;
  Conta.call(this, agencia, conta, saldo);//Herda essas propriedades da classe Conta
}
ContaC.prototype = Object.create(Conta.prototype);//Herda o prototype;
ContaC.prototype.constructor = ContaC;//Volta o construtor para a ContaC

ContaC.prototype.sacar = function (valor) {//Sobreescrita de método
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return
  }
  this.saldo -= valor;
  this.verSaldo();
};

function ContaP(agencia, conta, saldo,) {//Conta Poupança
  Conta.call(this, agencia, conta, saldo);//Herda essas propriedades da classe Conta
}
ContaP.prototype = Object.create(Conta.prototype);
ContaP.prototype.constructor = ContaP;

const conta1 = new Conta(11, 7782, 100);//Conta normal

const contaCorrente = new ContaC(11, 8723, 0, 100);//Conta corrente
contaCorrente.depositar(10);
contaCorrente.sacar(80);
contaCorrente.sacar(31);

console.log();

const contaPoupanca = new ContaP(12, 7829,0);//Conta poupança
contaPoupanca.depositar(10);
contaPoupanca.sacar(10);
contaPoupanca.sacar(1);

