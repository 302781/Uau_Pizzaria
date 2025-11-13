function ajustarAlturaBanner() {
    let e = document.getElementById("bannerPizza");
    if (e) { let t = window.innerHeight; e.style.height = `${.6 * t}px` }
}
window.addEventListener("load", ajustarAlturaBanner),
    window.addEventListener("resize", ajustarAlturaBanner);