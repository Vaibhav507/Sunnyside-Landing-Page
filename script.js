const off_screen = document.querySelector(".off-screen-menu")
const icon = document.querySelector(".ham-icon")

icon.addEventListener("click", () => {
    off_screen.classList.toggle('active');   
})