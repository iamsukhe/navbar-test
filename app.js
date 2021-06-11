const toggleBtn = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".link")

toggleBtn.addEventListener("click" , ()=>{
    navbar.classList.toggle("show-links")
})
