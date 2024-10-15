
function criaCartao(categoria, pergunta, resposta) {
  let container = document.getElementById('container')
  let cartao = document.createElement('article')
cartao.className = 'cartao'
  
cartao.innerHTML = 
            <div class="cartao__conteudo">  
                <h3>p${categoria}</h3>
                <div class="cartao__conteudo__pergunta">
                    o que e JavaScript?
                </div>
                <div class="cartao__conteudo__reposta">
                    <p>${respota}</p>
                </div>
            </div>



container.appendChild(cartao)


}
