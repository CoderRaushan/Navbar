const navItems = document.getElementById("nav_items_container");
const bars = document.getElementById("three_bars");
bars.addEventListener("click", () => {
    navItems.classList.toggle("active");
});

document.addEventListener("click", (event) => 
{
    const isClickInsideNav = navItems.contains(event.target) || bars.contains(event.target); //return true if click occured in between navItems of bars
    if (!isClickInsideNav && navItems.classList.contains("active")) {
        navItems.classList.remove("active");
    }
});