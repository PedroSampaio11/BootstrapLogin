document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.querySelector("#theme-selector");

    themeSelector.addEventListener("change", (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "dark") {
            document.documentElement.setAttribute("data-bs-theme", "dark");
        } else if (selectedValue === "light") {
            document.documentElement.setAttribute("data-bs-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-bs-theme");
        }
    });
});

