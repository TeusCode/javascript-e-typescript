const data = new Date("2021-12-21 15:30:00");//Recebe Data como argumento

const diaSemana = data.getDay();//Pega o dia da semana. 0 a 6;

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
}

console.log(diaSemana, cvDiaSemana(diaSemana),data.getHours());