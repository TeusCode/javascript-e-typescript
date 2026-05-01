//Editor de galeria de fotos:
//1. String em array
const arquivos = "foto1.jpg,foto2.png,foto3.webp,foto4.jpg";
const galeria = arquivos.split(",");

//2. foto2.png está corrompida, substitua por uma nova
galeria[1] = "foto_nova.jpg";

//3. Remova a foto 3
delete galeria[2];

//4. adicione a foto corrigida no lugar da foto3
galeria[2] = "foto_corrigida.jpg";

//5. Cópia da galeria
const galeriaFiltro = [...galeria];

//6. Filtro visual, remova as fotos da 
galeriaFiltro.shift();
galeriaFiltro.pop();

//7. Converta a galeriaFiltro em uma string
const urlFinal = galeriaFiltro.join(" / ");

// --- TESTES ---
console.log("Galeria Original Corrigida:", galeria);
console.log("Galeria Filtro (sem pontas):", galeriaFiltro);
console.log("URL Final:", urlFinal);