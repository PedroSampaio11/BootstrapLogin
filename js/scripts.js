document.addEventListener("DOMContentLoaded", ()=>{
    const selectorTheme = document.querySelector("#theme-selector")

    selectorTheme.addEventListener("change", (e)=>{
        const theme = e.target.value
        if(theme === "dark"){
            document.documentElement.setAttribute("data-bs-theme", "dark")
        }else if(theme === "light"){
            document.documentElement.setAttribute("data-bs-theme", "light")
        }else{
            document.documentElement.removeAttribute("data-bs-theme")
        }
    })
})
