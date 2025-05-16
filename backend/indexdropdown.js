const fakeAddresses = [
    "123 Fake Street",
    "456 Maple Avenue",
    "789 Elm Road",
    "321 Birch Blvd",
    "654 Pine Lane",
    "987 Oak Terrace"
  ];
  
  const dropdown = document.getElementById("dropdownList");
  const input = document.getElementById("searchInput");
  
  function filterAddresses() {
    const searchValue = input.value.toLowerCase();
    dropdown.innerHTML = "";
  
    if (searchValue === "") {
      dropdown.style.display = "none";
      return;
    }
  
    const filtered = fakeAddresses.filter(address =>
      address.toLowerCase().includes(searchValue)
    );
  
    if (filtered.length === 0) {
      dropdown.style.display = "none";
      return;
    }
  
    filtered.forEach(address => {
      const li = document.createElement("li");
      li.textContent = address;
      li.onclick = () => {
        input.value = address;
        dropdown.innerHTML = "";
        dropdown.style.display = "none";
      };
      dropdown.appendChild(li);
    });
  
    dropdown.style.display = "block";
  }
  
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      dropdown.style.display = "none";
    }
  });
  