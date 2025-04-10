const input = document.getElementById("input");
const addressList = document.getElementById("addresslist");

input.addEventListener("input", () => {
    const filter = input.value.toLowerCase();
    const listItems = addressList.querySelectorAll("li");

    let anyVisible = false;

    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        const match = text.includes(filter);
        item.classList.toggle("hidden", !match);
        if (match) anyVisible = true;
    });
    addressList.style.display = (filter && anyVisible) ? "block" : "none";
});