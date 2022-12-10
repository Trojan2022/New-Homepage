const menu=document.getElementById('menu');
const mobileContainer=document.querySelector('.mobile-menu');
const mobileMenuIcon=document.querySelector('.mobile-menu-icon');
const closeMenu=document.querySelector('.close-menu');

menu.addEventListener('click',()=>{
mobileContainer.style.right='-10%';
mobileMenuIcon.style.display='none';
})

closeMenu.addEventListener('click',()=>{
    mobileContainer.style.right='-80%';
    mobileMenuIcon.style.display='inline-block';
}
)