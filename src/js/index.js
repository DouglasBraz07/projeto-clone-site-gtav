const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener('click', () => {
/* toggle vai ficar alternando a classe ativo ex: caso nao tenha a classe ativo ele ira 
adicionar a classe no codigo se tiver a classe ele ira remover */
    elementoPlataformas.classList.toggle('ativo');
// Isso é refatorar o codigo deixar ele com menas linhas

});

/* Poderia deixar o codigo desse jeito mais eu decidir refatorar

const botaoEstaAberto = elementoPlataformas.classList.contains('ativo');
     if(botaoEstaAberto) {
         elementoPlataformas.classList.remove('ativo');
     }else {
         elementoPlataformas.classList.add('ativo');
     }  
*/