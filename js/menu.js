const menu = document.querySelector('.menu')
const menuNavegacion = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(menuNavegacion)

menu.addEventListener('click', ()=>
{
    menuNavegacion.classList.toggle("spread")
})

window.addEventListener('click', e=>
{
    if(menuNavegacion.classList.contains('spread') && e.target != menu && e.target != menuNavegacion)
    {
        menuNavegacion.classList.toggle("spread") 
    }
})
