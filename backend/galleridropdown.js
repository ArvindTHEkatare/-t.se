const fakeFoods = [
    "Pizza", "Hamburgare", "Sushi", "Kebab", "Falafel", "Pad Thai", "Pho", "Ramen",
    "Tacos", "Burrito", "Gyros", "Pasta", "Lasagne", "Risotto", "Curry", "Biryani",
    "Schnitzel", "Toast Skagen", "Gravad lax", "Köttbullar", "Raggmunk", "Fiskgratäng",
    "Korv med bröd", "Kebabpizza", "Veganburgare", "Caesarsallad", "Nachotallrik",
    "Wok", "Laxpasta", "Torsk med äggsås", "Oxfilé", "Pulled pork", "Kycklingwrap",
    "Halloumiburgare", "Club sandwich", "Baguette", "Fish and Chips", "Quesadilla",
    "Mozzarellasticks", "Onion Rings", "Friterad kyckling", "Bibimbap", "Tempura", "Dim Sum",
    "Kyckling Deluxe", "BBQ Chicken Pizza", "Kyckling & Bacon",
    "Köttälskaren", "Taco Pizza", "Biff & Bearnaise",
    "Vegetariana", "Grönkål & Feta", "Vegan Feast",
    "Husets Sallad", "Chokladmousse", "Läsk 33cl",
    "Originalmål", "Chili n Cheese", "Friscoburgare",
    "Delifresh Kycklingmål", "Crispy Kyckling", "Spicy Kyckling",
    "Green Burger", "Vegansk Nuggets Meal",
    "Lyxshake Choklad", "Liten pommes", "Dipp BBQ", "Stor Läsk 50cl",
    "Pad Namman Hoi Nöt", "Nöt Massaman Curry", "Nötgryta med Basilika",
    "Vegetarisk Pad Thai", "Grönsakswok med Cashewnötter", "Röd Curry Vegan",
    "Kyckling Panang Curry", "Gai Pad Med Mamuang", "Kyckling Satay"
  ];
  
  
  const input = document.getElementById("input");
  
  const dropdown = document.createElement("ul");
  dropdown.id = "dropdownList";
  
  dropdown.style.position = "absolute";
  dropdown.style.zIndex = "1000";
  dropdown.style.background = "#fff";
  dropdown.style.border = "1px solid #ccc";
  dropdown.style.borderRadius = "0.375rem";
  dropdown.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  dropdown.style.listStyle = "none";
  dropdown.style.padding = "0.25rem 0";
  dropdown.style.margin = "0";
  

  const inputStyles = window.getComputedStyle(input);
  dropdown.style.width = input.offsetWidth + "px";
  dropdown.style.fontSize = inputStyles.fontSize;
  dropdown.style.fontFamily = inputStyles.fontFamily;
  dropdown.style.boxSizing = "border-box";
  dropdown.style.maxHeight = "240px";
  dropdown.style.overflowY = "auto";
  
  dropdown.style.display = "none";
  document.querySelector(".searchbar").appendChild(dropdown);
  
  function filterFoods() {
    const searchValue = input.value.toLowerCase();
    dropdown.innerHTML = "";
  
    if (searchValue === "") {
      dropdown.style.display = "none";
      return;
    }
  
    const filtered = fakeFoods.filter(food =>
      food.toLowerCase().includes(searchValue)
    );
  
    if (filtered.length === 0) {
      dropdown.style.display = "none";
      return;
    }
  
    filtered.forEach(food => {
      const li = document.createElement("li");
      li.textContent = food;
      li.style.padding = "8px";
      li.style.cursor = "pointer";
      li.onclick = () => {
        input.value = food;
        dropdown.innerHTML = "";
        dropdown.style.display = "none";
      };
      li.onmouseover = () => li.style.background = "#f0f0f0";
      li.onmouseout = () => li.style.background = "white";
      dropdown.appendChild(li);
    });
  
    dropdown.style.display = "block";
  }
  
  input.addEventListener("input", filterFoods);
  
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".searchbar")) {
      dropdown.style.display = "none";
    }
  });
  