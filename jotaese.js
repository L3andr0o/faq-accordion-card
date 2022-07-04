const activep = document.querySelectorAll(".container__FAQ");
const showp = activep.lastElementChild;

activep.forEach((doc)=>{
    const showp = doc.lastElementChild;
    doc.addEventListener("click",(e)=>{
    showp.classList.toggle("p-active")
    doc.firstElementChild.classList.toggle("negrita");
    doc.querySelector(".arrow").classList.toggle("up")
    })
})
