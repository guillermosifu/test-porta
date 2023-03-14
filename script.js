const btnMenu= document.querySelector('.btn-menu');
const menuList= document.querySelector('.Menu-list');
btnMenu.addEventListener('click',()=>{
    menuList.classList.toggle('ActiveList');   
})
menuList.addEventListener('click',()=>{
    menuList.classList.remove('ActiveList');   
})