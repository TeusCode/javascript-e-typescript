/*
O Desafio
Em vez de focar apenas no visual, o foco aqui é a gestão dos dados. Você vai criar uma interface onde o usuário pode adicionar produtos a um "carrinho" e o sistema deve calcular tudo em tempo real.

O que o projeto deve ter:
Cadastro de Itens: Uma lista (array de objetos) pré-definida no seu código com pelo menos 5 produtos (ex: id, nome, preco, categoria).

Interface de Seleção: O usuário escolhe o produto e a quantidade.

O Carrinho (A parte lógica):

Ao clicar em "Adicionar", o item deve ir para uma lista na tela.

Se o usuário adicionar o mesmo item duas vezes, o sistema não deve repetir a linha, mas sim somar a quantidade no item que já está lá (isso vai testar bem sua lógica de find ou findIndex).

Cálculos Automáticos:

Mostrar o valor total do carrinho.

Aplicar um "Cupom de Desconto": Se o usuário digitar "ESTUDANTE10", ele ganha 10% de desconto no valor total.

Botão de Finalizar: Ao clicar, limpa o carrinho e mostra um alert ou uma mensagem na tela: "Compra de R$ XX,XX realizada com sucesso!".
*/
const listaDisplay = document.querySelector('.listaProdutos')
const inputBuscar = document.querySelector('#buscarProdutos');

inputBuscar.addEventListener('input', (e) => {
    buscarItens(e.target.value)
})

let imagemPadrao = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Item_sem_imagem.svg/1280px-Item_sem_imagem.svg.png";

const itens = [
    { id: 1, nome: "Teclado Mecânico RGB", preco: 250, categoria: "informática", imagem: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80" },
    { id: 2, nome: "Mouse Gamer Wireless", preco: 180, categoria: "informática", imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" },
    { id: 3, nome: "Monitor 24' Full HD", preco: 850, categoria: "informática", imagem: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&q=80" },
    { id: 4, nome: "Cadeira Ergonômica", preco: 1200, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80" },
    { id: 5, nome: "Headset Noise Cancelling", preco: 450, categoria: "áudio", imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 6, nome: "Webcam 4K Ultra HD", preco: 320, categoria: "informática", imagem: "https://images.unsplash.com/photo-1583394838336-acd977730f90?w=500&q=80" },
    { id: 7, nome: "Microfone Condensador", preco: 580, categoria: "áudio", imagem: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80" },
    { id: 8, nome: "Mesa de Escritório L", preco: 750, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=80" },
    { id: 9, nome: "SSD 1TB NVMe", preco: 420, categoria: "informática", imagem: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80" },
    { id: 10, nome: "Caixa de Som Bluetooth", preco: 290, categoria: "áudio", imagem: "https://images.unsplash.com/photo-1608333123525-97c030ef562c?w=500&q=80" },
    { id: 11, nome: "Smartwatch Sport", preco: 890, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 12, nome: "Luminária Articulada", preco: 120, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=500&q=80" },
    { id: 13, nome: "Placa de Vídeo RTX", preco: 3500, categoria: "informática", imagem: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&q=80" },
    { id: 14, nome: "Smartphone Pro Max", preco: 5600, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80" },
    { id: 15, nome: "Suporte para Notebook", preco: 85, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1616353075d60-219934c160e2?w=500&q=80" },
    { id: 16, nome: "Hub USB-C 7 em 1", preco: 190, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1544043426-6632a7647223?w=500&q=80" },
    { id: 17, nome: "Roteador Wi-Fi 6", preco: 480, categoria: "informática", imagem: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80" },
    { id: 18, nome: "Gabinete Gamer Glass", preco: 520, categoria: "informática", imagem: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80" },
    { id: 19, nome: "Carregador Portátil", preco: 150, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1609091839311-d536801ff1ad?w=500&q=80" },
    { id: 20, nome: "Tapete Gamer (Mousepad)", preco: 95, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80" },
    { id: 21, nome: "Tablet Pro 11'", preco: 3200, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80" },
    { id: 22, nome: "Kindle Paperwhite", preco: 499, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1594980596247-87c52a3479bb?w=500&q=80" },
    { id: 23, nome: "Câmera DSLR 4K", preco: 4500, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80" },
    { id: 24, nome: "Lente 50mm f/1.8", preco: 900, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&q=80" },
    { id: 25, nome: "Tripé Profissional", preco: 350, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1581591524423-c76891ff11ca?w=500&q=80" },
    { id: 26, nome: "Drone Quadcopter", preco: 2800, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1473966968600-fa804b869a1a?w=500&q=80" },
    { id: 27, nome: "Smart TV 55' 4K", preco: 2600, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1593359674814-6b3b40ca562a?w=500&q=80" },
    { id: 28, nome: "Soundbar Dolby Atmos", preco: 1100, categoria: "áudio", imagem: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80" },
    { id: 29, nome: "Controle PS5 DualSense", preco: 400, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&q=80" },
    { id: 30, nome: "Console Next-Gen", preco: 4500, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80" },
    { id: 31, nome: "Notebook Gamer", preco: 6500, categoria: "informática", imagem: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80" },
    { id: 32, nome: "Memória RAM 16GB", preco: 350, categoria: "informática", imagem: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=80" },
    { id: 33, nome: "Processador i7 Octa-Core", preco: 1800, categoria: "informática", imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=80" },
    { id: 34, nome: "Placa Mãe Wi-Fi", preco: 950, categoria: "informática", imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80" },
    { id: 35, nome: "Fonte 750W 80 Plus", preco: 550, categoria: "informática", imagem: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=80" },
    { id: 36, nome: "Water Cooler RGB", preco: 480, categoria: "informática", imagem: "https://images.unsplash.com/photo-1587202372580-0588825c4013?w=500&q=80" },
    { id: 37, nome: "Impressora Multifuncional", preco: 780, categoria: "informática", imagem: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&q=80" },
    { id: 38, nome: "Scanner Portátil", preco: 320, categoria: "informática", imagem: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&q=80" },
    { id: 39, nome: "Adaptador Bluetooth 5.0", preco: 45, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1558537348-c0f8e0732427?w=500&q=80" },
    { id: 40, nome: "Cabo HDMI 2.1 4K", preco: 65, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=500&q=80" },
    { id: 41, nome: "Sofá 3 Lugares", preco: 1800, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" },
    { id: 42, nome: "Poltrona Veludo", preco: 650, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80" },
    { id: 43, nome: "Estante de Livros", preco: 420, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80" },
    { id: 44, nome: "Mesa de Jantar", preco: 1100, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=500&q=80" },
    { id: 45, nome: "Conjunto 4 Cadeiras", preco: 850, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1592074522330-cfc592ed35b1?w=500&q=80" },
    { id: 46, nome: "Cama Queen Size", preco: 2200, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1505693419163-5f56144b7b21?w=500&q=80" },
    { id: 47, nome: "Guarda-Roupa 3 Portas", preco: 1400, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&q=80" },
    { id: 48, nome: "Criado-Mudo Retro", preco: 210, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=500&q=80" },
    { id: 49, nome: "Painel para TV", preco: 380, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80" },
    { id: 50, nome: "Tapete Geométrico", preco: 450, categoria: "decoração", imagem: "https://images.unsplash.com/photo-1534889156217-d3c8ed48ca44?w=500&q=80" },
    { id: 51, nome: "Quadro Decorativo", preco: 120, categoria: "decoração", imagem: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=500&q=80" },
    { id: 52, nome: "Vaso de Cerâmica", preco: 85, categoria: "decoração", imagem: "https://images.unsplash.com/photo-1578500484721-13857aa523fb?w=500&q=80" },
    { id: 53, nome: "Espelho Adnet", preco: 190, categoria: "decoração", imagem: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80" },
    { id: 54, nome: "Cortina Blackout", preco: 280, categoria: "decoração", imagem: "https://images.unsplash.com/photo-1514894630558-129424a75865?w=500&q=80" },
    { id: 55, nome: "Frigobar Retro", preco: 1300, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80" },
    { id: 56, nome: "Micro-ondas Inox", preco: 650, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&q=80" },
    { id: 57, nome: "Air Fryer Digital", preco: 480, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1585659823160-b21b69207248?w=500&q=80" },
    { id: 58, nome: "Máquina de Café Espresso", preco: 950, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1510525009512-ad7fc13eef9e?w=500&q=80" },
    { id: 59, nome: "Batedeira Planetária", preco: 520, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1594385208974-2e75f9d8ad48?w=500&q=80" },
    { id: 60, nome: "Liquidificador Potente", preco: 220, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&q=80" },
    { id: 61, nome: "Monitor 34' Ultrawide", preco: 2800, categoria: "informática", imagem: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&q=80" },
    { id: 62, nome: "Fone de Ouvido In-Ear", preco: 150, categoria: "áudio", imagem: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80" },
    { id: 63, nome: "Caixa de Som Torre", preco: 1500, categoria: "áudio", imagem: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80" },
    { id: 64, nome: "Mochila para Notebook", preco: 180, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" },
    { id: 65, nome: "Power Bank 20000mAh", preco: 220, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1609091839311-d536801ff1ad?w=500&q=80" },
    { id: 66, nome: "Teclado Bluetooth Mini", preco: 130, categoria: "informática", imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80" },
    { id: 67, nome: "Mouse Vertical Ergonômico", preco: 160, categoria: "informática", imagem: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80" },
    { id: 68, nome: "Projetor Full HD", preco: 1800, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1535016120720-40c646bebbfc?w=500&q=80" },
    { id: 69, nome: "Apple TV 4K", preco: 1400, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1585341232822-68058252273e?w=500&q=80" },
    { id: 70, nome: "Estabilizador de Câmera", preco: 950, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1590044591223-4cd99ff2945d?w=500&q=80" },
    { id: 71, nome: "Relógio de Parede Digital", preco: 120, categoria: "decoração", imagem: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=500&q=80" },
    { id: 72, nome: "Ventilador de Coluna", preco: 250, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1618941725451-86e082875b11?w=500&q=80" },
    { id: 73, nome: "Umidificador de Ar", preco: 180, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=500&q=80" },
    { id: 74, nome: "Aspirador Robô", preco: 1600, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=500&q=80" },
    { id: 75, nome: "Ferro de Passar a Vapor", preco: 140, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1594384310574-d07914f77c38?w=500&q=80" },
    { id: 76, nome: "Lanterna Tática LED", preco: 85, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&q=80" },
    { id: 77, nome: "Caneta Digital Stylus", preco: 290, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=500&q=80" },
    { id: 78, nome: "Leitor de Cartão SD", preco: 60, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=500&q=80" },
    { id: 79, nome: "Webcam Full HD 1080p", preco: 180, categoria: "informática", imagem: "https://images.unsplash.com/photo-1612450796338-7076d29b015d?w=500&q=80" },
    { id: 80, nome: "Headset Gamer com Mic", preco: 320, categoria: "áudio", imagem: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&q=80" },
    { id: 81, nome: "Suporte Articulado Monitor", preco: 250, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&q=80" },
    { id: 82, nome: "HD Externo 2TB", preco: 450, categoria: "informática", imagem: "https://images.unsplash.com/photo-1531492746377-41be9119d74e?w=500&q=80" },
    { id: 83, nome: "Placa de Captura 4K", preco: 780, categoria: "informática", imagem: "https://images.unsplash.com/photo-1587202372193-4a1c1d848df7?w=500&q=80" },
    { id: 84, nome: "Ring Light com Tripé", preco: 150, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1593005517304-1890746453a0?w=500&q=80" },
    { id: 85, nome: "Mesa Digitalizadora", preco: 580, categoria: "informática", imagem: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?w=500&q=80" },
    { id: 86, nome: "Câmera de Segurança Wi-Fi", preco: 220, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1557597774-9d2739f8fa00?w=500&q=80" },
    { id: 87, nome: "Fechadura Digital Biometria", preco: 850, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1558002038-103792e1972a?w=500&q=80" },
    { id: 88, nome: "Lâmpada Inteligente RGB", preco: 75, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1550524514-963653304a0e?w=500&q=80" },
    { id: 89, nome: "Assistente Virtual Echo", preco: 350, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&q=80" },
    { id: 90, nome: "Balança Digital Cozinha", preco: 45, categoria: "eletrodomésticos", imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80" },
    { id: 91, nome: "Adega de Vinhos Climatizada", preco: 2500, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1553177595-462f4a3ef566?w=500&q=80" },
    { id: 92, nome: "Puff de Couro", preco: 320, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80" },
    { id: 93, nome: "Escrivaninha Compacta", preco: 380, categoria: "móveis", imagem: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=80" },
    { id: 94, nome: "Abajur de Mesa", preco: 110, categoria: "decoração", imagem: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80" },
    { id: 95, nome: "Planta Artificial Luxo", preco: 140, categoria: "decoração", imagem: "https://images.unsplash.com/photo-1581414039066-207bb4746453?w=500&q=80" },
    { id: 96, nome: "Relógio de Pulso Luxo", preco: 1200, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80" },
    { id: 97, nome: "Pasta Executiva Couro", preco: 450, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" },
    { id: 98, nome: "Oculos de Sol Polarizado", preco: 320, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1511499767390-91f197030e81?w=500&q=80" },
    { id: 99, nome: "Porta-Retrato Digital", preco: 280, categoria: "eletrônicos", imagem: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?w=500&q=80" },
    { id: 100, nome: "Kit Limpeza Telas", preco: 35, categoria: "acessórios", imagem: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=500&q=80" }
];

function cadastrarItem(nome, preco, categoria, imagem = imagemPadrao) {
    for (let item in itens) {
        if (itens[item].nome === nome) return console.log("ITEM JÁ CADASTRADO!");
    }

    if (isNaN(nome && categoria) && !isNaN(preco)) {
        const quantidadeItens = itens.length;
        itens.push({
            id: quantidadeItens + 1,
            nome,
            preco,
            categoria,
            imagem
        })
        exibirItens();
        console.log(itens);
    } else {
        console.log("ITEM INVÁLIDO!")
    }
}

function exibirItens() {
    listaDisplay.innerHTML = '';
    for (let item in itens) {
        listaDisplay.innerHTML += `<li class="item"> <img style="width:100px" src = "${itens[item].imagem}"><img> 
        ${itens[item].nome}: R$${itens[item].preco} - ${itens[item].categoria} <button onclick="adicionarCarrinho(this)">Adicionar Carrinho </button>  </li>`
    }
}

function buscarItens(item) {
    listaDisplay.innerHTML = ''
    const busca = itens.filter((valor) => {
        const logica = valor.nome.toUpperCase().includes(item.toUpperCase());
        if (logica) {
            listaDisplay.innerHTML += `<li class="item"><img style = "width:100px; height:70px" src="${valor.imagem}"> ${valor.nome}: R$${valor.preco} - ${valor.categoria}  </li>`
        }

        if (item === '') {
            console.log("RODANDO...")
            window.location.reload();
        }

        return logica;
    })


    // for (let i of itens) {
    //     if (i.nome.includes(item)) {
    //         listaDisplay.innerHTML += `<li class="item"><img style = "width:100px; height:70px" src="${i.imagem}"> ${i.nome}: R$${i.preco} - ${i.categoria}  </li>`
    //     }
    //     if (item === '') {
    //         setTimeout(() => {
    //             exibirItens();
    //             console.log("RECARREGOU!")
    //         }, 2000)
    //     }
    // }
}

function adicionarCarrinho(e) {
    e.parentElement.style = "display:none;";
    console.log(e.parentElement.textContent);
}

exibirItens();
