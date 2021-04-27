let botonlateral=document.getElementById("menu-toggle");
botonlateral.addEventListener("click",desplegarMenu);
function desplegarMenu(){
    
    let contenidoMenu=document.getElementById("wrapper");
    contenidoMenu.classList.toggle("toggled");
}