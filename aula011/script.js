const data = new Date();//Recebe Data como argumento

const diaSemana = data.getDay();//Pega o dia da semana. 0 a 6;
const dia = data.getDate();//Pega o dia do mês;
const mes = data.getMonth();//Pega o mes, 0 a 11;
const ano = data.getFullYear();//Pega o ano;
const horas = data.getHours();//Pega a hora;
const minutos = data.getMinutes();//Pega os minutos;
const segundos = data.getSeconds();//Pega os segundos;
const miliSegundos = data.getMilliseconds();//Pega os milisegundos;


function cvDiaSemana() {
    let diaSemanaTexto;

    switch (diaSemana) { //Usado por ser uma forma mais compacta do que o if... else if. 
        case 0: diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1: diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2: diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3: diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4: diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5: diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6: diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'ERRO!'
            return diaSemanaTexto;
    };
};

console.log(diaSemana, cvDiaSemana(diaSemana), data.getHours());
console.log(`Hoje é dia ${dia}/${mes}/${ano}, ${cvDiaSemana()} e são exatamente, ${horas}:${minutos}:${segundos}:${miliSegundos}`)