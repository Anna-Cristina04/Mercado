function enviar() {
    const nomeMercado = document.getElementById('nomeMercado');
    window.localStorage.setItem('nomeMercado', nomeMercado.value)
    window.open("./cadastro.html", "_self")

    const imagem = document.getElementById('imagem')
    window.localStorage.setItem('imagem', imagem.value)
    window.open("./cadastro.html", "_self")

}
const mercado = document.getElementById('nomeMercado')
const paragrafo = document.createElement('h1')
paragrafo.innerText = window.localStorage.getItem('nomeMercado')

const div1 = document.getElementById('imagem')
div1.src = window.localStorage.getItem('imagem')

mercado.append(paragrafo)

if (window.localStorage.getItem("salvar") == null) {
    window.localStorage.setItem("salvar","[]");
}


// *************** CADASTRAR PRODUTO *****************

function cadastrar() {
    const nome= document.getElementById('nome').value
    // window.localStorage.setItem('nome', nome.value)
    const foto = document.getElementById('foto').value
    // window.localStorage.setItem('foto', foto.value)
    const setor = document.getElementById('setor').value
    // window.localStorage.setItem('setor', setor.value)
    const categoria = document.getElementById('categoria').value
    // window.localStorage.setItem('categoria', categoria.value)
    const preco = document.getElementById('preco').value
    // window.localStorage.setItem('preco', preco.value)
    const estoque = document.getElementById('estoque').value
    // window.localStorage.setItem('estoque', estoque.value)
    const unidade = document.getElementById('unidade').value
    // window.localStorage.setItem('unidade', unidade.value)
    const precoMed = document.getElementById('precoMed').value
    // window.localStorage.setItem('precoMed', precoMed.value)
    const codigo = document.getElementById('codigo').value
    // window.localStorage.setItem('codigo', codigo.value)

    let itemObj = {
        categoria,
        nome,
        foto,
        preco,
        estoque,
        unidade,
        precoMed,
        setor,
        codigo,
    }

    let lista = JSON.parse(window.localStorage.getItem("salvar"))
    console.log(lista)
    lista.push(itemObj)
    console.log(lista)
    console.log(itemObj)
    window.localStorage.setItem("salvar", JSON.stringify(lista))

    window.open("./listar.html", "_self")
}

function listar() {

    let lista = JSON.parse(window.localStorage.getItem("salvar"))
    let html = "";

    for (let i = 0; i < lista.length; i++) {
        let itemHtml = `
        <div class="item" onclick="remover(${i})">
            <div class="nome">${lista[i].categoria} + " | " + ${lista[i].nome}</div>
            <picture>
                <img src="${lista[i].foto}" id="foto">
            </picture>
            <div id="texto2">${"R$ " + lista[i].preco + " \nEstoque: " + lista[i].estoque + 
            "\nR$: " + lista[i].precoMed + " por " + lista[i].unidade + " \nLocal: " + lista[i].setor + "\nCódigo: " +lista[i].codigo+
            "\nValor total em estoque: R$" + (lista[i].estoque*lista[i].preco)}</div>

        </div>
        `;
        html += itemHtml;
    }
    console.log(html)
    document.getElementById("itens").innerHTML = html;
}

function remover(id) {
    let lista = JSON.parse(window.localStorage.getItem("salvar"))
    lista.splice(id, 1)
    window.localStorage.setItem("salvar", JSON.stringify(lista))
}

function cadastrar2() {
    window.open('file:///C:/Users/Aluno/Desktop/Mercado%20da%20Anna/listar.html')
    window.close;
}

function listar2() {
    window.open('file:///C:/Users/Aluno/Desktop/Mercado%20da%20Anna/cadastro.html')
    window.close;
}
function editar(){
    window.open('file:///C:/Users/Cris/Downloads/Mercado%20da%20Anna/editar.html')
    window.close;
}