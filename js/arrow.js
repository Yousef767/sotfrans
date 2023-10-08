let arrow = document.querySelector('.ar');

arrow.addEventListener('click',()=>{
  window.scroll(0,0);
});

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 300){
    arrow.style.display='flex';
  }else{
    arrow.style.display='none';
  }
});

