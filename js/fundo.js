
function ajustarAlturaBanner() {
    const banner = document.getElementById('bannerPizza');

    if (banner) {
        const alturaJanela = window.innerHeight;
        const alturaDesejada = alturaJanela * 0.6;

        banner.style.height = `${alturaDesejada}px`;
    }
}

window.addEventListener('load', ajustarAlturaBanner);
window.addEventListener('resize', ajustarAlturaBanner);