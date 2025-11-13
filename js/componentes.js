async function carregarComponente(r, e) {
    try {
        let a = await fetch(r), t = await
            a.text(); document.querySelector(e).innerHTML = t
    } catch (o) { console.error("Erro ao carregar o componente:", o) }
}