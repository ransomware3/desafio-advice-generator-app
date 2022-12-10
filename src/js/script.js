const btnAdvice = document.querySelector('.btn-advice')
const campoDoConselho = document.querySelector('.advice')
const numeroDoConselho = document.querySelector('.advice-number')

console.log(numeroDoConselho)

async function criarConselhoAleatorio(){
    const resposta = await fetch('https://api.adviceslip.com/advice')
    const json = await resposta.json()
    let conselhoTexto = `"` + json.slip.advice + `"`
    let conselhoId = `#${json.slip.id}`

    campoDoConselho.innerHTML = conselhoTexto
    numeroDoConselho.innerHTML = conselhoId
}

btnAdvice.addEventListener("click", () => {
    window.location.reload(true)
})

criarConselhoAleatorio()