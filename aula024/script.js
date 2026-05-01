//Sistema Fila de hospital

// 1. Criar a fila
let fila = ["Ana", "Beto", "Carlos"];

// 2. Adicionar paciente Davi ao final da fila
fila.push("Davi");

// 3. Adicionar paciente (EMERGENCIA) Zilda ao início da fila
fila.unshift("Zilda");

// 4. Atender o primeiro paciente
const atendido = fila.shift();

// 5. Criar backup independente (Spread)
const backupFila = [...fila];

// 6. Fila reduzida (os 2 primeiros)
const filaReduzida = fila.slice(0,2);

// 7. Relatório (Join)
const relatorio = fila.join("-> ");

// --- TESTES (Não altere) ---
console.log("Paciente Atendido:", atendido);
console.log("Fila Atual:", fila);
console.log("Backup:", backupFila);
console.log("Fila Reduzida:", filaReduzida);
console.log("Relatório:", relatorio);