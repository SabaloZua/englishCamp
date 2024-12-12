const menu=document.getElementById("menuid");
const navMenu=document.getElementById('nav_menuid');



menu.addEventListener('click',()=>{
    menu.classList.toggle('activo');
    navMenu.classList.toggle('activo');
  
})



