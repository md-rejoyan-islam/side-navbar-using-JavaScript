const btn=document.querySelector('.btn')
const sideNav=document.getElementById('sideNav')

// menu toggle by click
let result=false
btn.onclick=()=>{
if(sideNav.style.width='0px' && result==false){
sideNav.style.width = "200px";
sideNav.style.display = "flex";
result=true
}else if(result){
    sideNav.style.width = "220px";
    sideNav.style.display = "none";
    result=false
}
}


sideNav.onclick=(e)=>{
if(e.target.classList.contains('link')){
    const li=document.querySelectorAll('li')
    // remove style from inactive link
    li.forEach(item=>{
        item.classList.remove(
          "before:h-[42px]",
          "before:left-0",
          "before:content-['']",
          "before:top-[1px]",
          "relative",
          "before:absolute",
          "before:w-1",
          "before:inline-block",
          "before:bg-[#ac4743]",
          "text-[#ac4743]"
        );
    })
    // style active link
    e.target.parentElement.classList.add(
      "before:h-[42px]",
      "before:left-0",
      "before:content-['']",
      "before:top-[-.5px]",
      "relative",
      "before:absolute",
      "before:w-1",
      "before:inline-block",
      "before:bg-[#ac4743]",
      "before:h-11",
      "text-[#ac4743]"
    );
}
}