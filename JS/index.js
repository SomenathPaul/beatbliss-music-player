const dark = document.getElementById("dark-mode")


dark.addEventListener('click',()=>{
    let element = document.querySelector("link");
    if(element.getAttribute("href") === "../CSS/home_dark.css"){
        element.setAttribute("href", "../CSS/home_light.css")
        // light.classList.replace('fa-moon','fa-sun')
    }else{
        element.setAttribute("href", "../CSS/home_dark.css")
        // light.classList.replace('fa-sun','fa-moon')
    }
})