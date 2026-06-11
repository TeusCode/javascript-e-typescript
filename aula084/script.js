class ValidaCpf {
  constructor(cpfInicial) {
    this.cpfInicial = cpfInicial;
    this.cpfLimpo;
    this.newCpf;
  }
  get cpfLimpo() {
    return this.cpfInicial.replace(/\D+/g, '');//Remove caracteres especiais
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }

  valida() {
    if (typeof this.cpfLimpo === "undefined") return false;
    if (typeof this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia(this.cpfLimpo)) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;

    this.newCpf = novoCpf;

    return this.cpfLimpo === novoCpf;//Compara cpf original com novo cpf criado
  }

  criaDigito(cpfParcial) {
    //Cálculo
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acc, cur) => {
      acc += (Number(cur) * regressivo--);
      return acc;
    }, 0);
    const digito = 11 - (total % 11);

    return digito > 9 ? '0' : String(digito);
  }
}

const cpf = new ValidaCpf("163.966.096-81");

console.log(cpf.cpfLimpo)