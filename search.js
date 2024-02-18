const searchInput = document.getElementById("search-input");
const list = document.getElementById("list");
const listItems = list.getElementsByTagName("li");

searchInput.addEventListener("keyup", function (e) {
    const listTerm = e.target.value.toLowerCase();
    for (let i = 0; i < listItems.length; i++) {
        const text = listItems[i].textContent.toLowerCase();
        if (text.includes(listTerm)) {
            listItems[i].style.display = "block";
        } else {
            listItems[i].style.display = "none";
        }
    }
});
