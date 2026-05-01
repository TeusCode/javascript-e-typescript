const fila = ["Ana", "Bruno", "Catarina", "Diogo", "Elena"];

//1. Catarina desistiu da fila
//delete fila[2];
fila.splice(2,1);

//2. Paciente Prioritário
//fila.unshift("Sr. Joaquim");
fila.splice(0,0,"Sr. Joaquim");

//3. Substituição de emergência
fila.splice(3,1,"Beatriz");

//4. Clinica vai fechar
const atendimentoAdiado = fila.splice(-2,2);
console.log(fila);

//5. Capturar removidos
console.log(`Tiveram atendimento adiado: ${atendimentoAdiado}`)

