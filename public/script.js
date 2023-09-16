const icon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const listItems = document.querySelectorAll("li");


icon.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
})

listItems.forEach(list => {
    list.addEventListener("click", () => {
        // Remove border from all <li> elements
        listItems.forEach(item => {
            item.style.border = "none";
        });

        // Add a border to the clicked <li> element
        list.style.border = "1px solid black";
        list.style.borderRadius = "10px"
    });
});
