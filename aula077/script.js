//Algoritmo CPF: 
// CPF = 070.987.720-03
/*
0   7   0   9   8   7   7   2   0 //Separamos e removemos os dois ultimos digitos
x   x   x   x   x   x   x   x   x 
10  9   8   7   6   5   4   3   2 //Multiplicamos: 10 a 2
0   63  0   63  48  35  28  6   0 //Somamos o resultado: 243

Agora para descobrir o 1° dígito de verificação: 
11 - (243 % 11) = 11 - 1 = 10 //Se o valor for um número acima de 9, consideramos 0

1° dígito = 10 = 0

Agora para descobrir o 2° dígito:
0   7   0   9   8   7   7   2   0 //Separamos e removemos os dois ultimos digitos
x   x   x   x   x   x   x   x   x
11  10  9   8   7   6   5   4   3 //Multiplicamos: 11 a 3
0   70  0   72  56  42  35  8   0 //Somamos o resultado: 283

Agora jogamos na formula:
11 - (283 % 11) = 11 - 8 = 3

2° dígito = 3
*/

function ValidaCpf (cpfEnviado){//Função construtora
  this.cpfEnviado = cpfEnviado;
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable:true,
    get: function(){
      return cpfEnviado.replace(/\D+/g, '');//Remove caracteres especiais
    }
  })
}

ValidaCpf.prototype.valida = function(){
  //Validações:
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.isSequencia(this.cpfLimpo)) return false;
  
  const cpfParcial = this.cpfLimpo.slice(0,-2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  const novoCpf = cpfParcial + digito1 + digito2;

  return this.cpfLimpo === novoCpf;//Compara cpf original com novo cpf criado
};

ValidaCpf.prototype.criaDigito = function(cpfParcial){
  //Cálculo
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((acc, cur)=>{
    acc += (Number(cur) * regressivo--);
    return acc;
  },0);
  const digito  = 11 - (total % 11);
  return digito > 9? '0' :String(digito);
}

ValidaCpf.prototype.isSequencia = function(cpf){
  //Identifica sequência
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);  
  return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCpf("070.987.720-03");

console.log("O CPF:",cpf.cpfEnviado)

if(cpf.valida()) console.log("Cpf válido!");
else console.log("Cpf Inválido!");
