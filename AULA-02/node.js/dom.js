/*var p=window.document.getElementsByTagName('p')[1]
window.document.write(p.innerHTML)*/
/*var p= window.document.getElementById("p1")
window.document.write(p.innerHTML)*/
/*var p= window.document.querySelector("p.p1")
window.document.write(p.innerText)*/

var box = window.document.getElementById("click")

box.addEventListener("mouseenter",entrar)
box.addEventListener("mouseout", sair)
box.addEventListener("click",clicar)
function entrar() {
    box.style.background = "yellow"
}
function sair() {
    box.style.background = "green"
    box.innerText="Clique em mim!"
}
function clicar(){
    box.innerText="Clicou!"
}