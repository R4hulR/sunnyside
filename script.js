var hamburger_menu=document.getElementById('btn');
var sidebar=document.getElementById('sidebar');
var clicked=true;
hamburger_menu.addEventListener('click',()=>{
    if(clicked){
    sidebar.style.right='2rem';
    clicked=false;
    }
    else{
        sidebar.style.right='-300px';
        clicked=true;
    }
})