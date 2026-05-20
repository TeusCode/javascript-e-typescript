const sistema = {
  versao: "1.0.0",
  ambiente: "producao"
};

//Utilize o método correto para impedir que qualquer propriedade deste objeto seja alterada, adicionada ou removida. Tente alterar a versao para "2.0.0" logo a seguir e verifique o que acontece.

Object.freeze(sistema);
sistema.versao = "2.0.0";

console.log(sistema);