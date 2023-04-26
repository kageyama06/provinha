let valor_compra = document.getElementById('valor_compra')
let parcial = document.getElementById('parcial')
let total = document.getElementById('total')
let vetor = document.getElementById('vetor')


let tipo_produto = []
let quantidade = []



parcial.addEventListener('click', ()=>{
    let produto = document.getElementById('produto')
    let qtd_produtos = document.getElementById('qtd_produtos').value

    tipo_produto.push(produto)
    quantidade.push(quantidade)
    preco_produtos.push(preco)

    console.log(produto)
    console.log(quantidade)
    console.log(preco_produtos)

    let soma = 0.0
    for(i=0;i<preco_produtos.length;i++){
        soma = soma + (quantidade[i]*preco_produtos[i])
    }
    for(i=0;i<preco_produtos.length;i++){
        vetor.innerHTML += 'Produto = ' + tipo_produto[i] + '&emsp;'
        vetor.innerHTML += 'Quantidade = ' + quantidade[i] + '&emsp;'
        vetor.innerHTML += 'Preço = ' + preco_produtos[i] + '&emsp;'
    }
    // let soma = 0.0
    // for(i=0;i<preco_produtos.length;i++){
    //     soma = soma + preco_produtos[i]
    // }

    // vetor.innerHTML = 'total R$ = ' + soma
})

// parcial.addEventListener('click', ()=>{
//     let camiseta = Number(document.getElementById('camiseta').value)
//     console.log(camiseta)
//     let bermuda = Number(document.getElementById('bermuda').value)
//     console.log(bermuda)
//     let tenis = Number(document.getElementById('tenis').value)
//     console.log(tenis)
//     let qtd_camiseta = Number(document.getElementById('qtd_camiseta').value)
//     console.log(qtd_camiseta)
//     let qtd_bermuda = Number(document.getElementById('qtd_bermuda').value)
//     console.log(qtd_bermuda)
//     let qtd_tenis = Number(document.getElementById('qtd_tenis').value)
//     console.log(qtd_tenis)

//     let parcial_camiseta = camiseta*qtd_camiseta
//     let parcial_bermuda = bermuda*qtd_bermuda
//     let parcial_tenis = tenis*qtd_tenis
//     let valor_total = parcial_camiseta + parcial_bermuda + parcial_tenis 
//     valor_compra.innerHTML = 'O valor da compra é R$ ' + valor_total.toFixed(2)
// })