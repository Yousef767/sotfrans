let list1 = document.getElementById("list1");
let menu1 = document.getElementById("menu1");
let list2 = document.getElementById("list2");
let menu2 = document.getElementById("menu2");
let list3 = document.getElementById("list3");
let menu3 = document.getElementById("menu3");



list1.onmouseover=()=>{
  menu1.style.display='flex';
  list1.classList.add("show");
}


list1.onmouseleave=()=>{
  menu1.style.display='none';
  list1.classList.remove("show");
}

list2.onmouseover=()=>{
  menu2.style.display='flex';
  list2.classList.add("show");
}

list2.onmouseleave=()=>{
  menu2.style.display='none';
  list2.classList.remove("show");
}


list3.onmouseover=()=>{
  menu3.style.display='flex';
  list3.classList.add("show");
}

list3.onmouseleave=()=>{
  menu3.style.display='none';
  list3.classList.remove("show");
}