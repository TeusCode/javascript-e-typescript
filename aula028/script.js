const playlist = [
    { titulo: "Bohemian Rhapsody", artista: "Queen" },
    { titulo: "Stayin' Alive", artista: "Bee Gees" },
    { titulo: "Billie Jean", artista: "Michael Jackson" },
    { titulo: "Hotel California", artista: "Eagles" },
    { titulo: "Wonderwall", artista: "Oasis" }
];

// 1. Mover "Hotel California" para o topo
// Dica: primeiro salve a música em uma variável removendo-a, depois insira.

const musicaFavorita = playlist.splice(3, 1);
playlist.splice(0, 0, musicaFavorita[0]);

// 2. Substituir índices 1 e 2 por "Dancing Queen" - ABBA
playlist.splice(1, 2, { titulo: "Dancing Queen", artista: "ABBA" });

// 3. Achar e remover Michael Jackson
for (let i = playlist.length - 1; i >= 0; i--) {
    if (playlist[i].artista === "Michael Jackson") {
        playlist.splice(i, 1);
        break;
    }
}

// 4. Remover a última e exibir o nome
const ultimo = playlist.splice(-1, 1);
console.log(`Último removido: ${ultimo[0].titulo}`);


console.log(playlist);