const foodToPage = {
  "Pizza": "../backend/public/pizzahutMeny.html",
  "Kebabpizza": "../backend/public/pizzahutMeny.html",
  "Taco Pizza": "../backend/public/pizzahutMeny.html",
  "Vegetariana": "../backend/public/pizzahutMeny.html",
  "Köttälskaren": "../backend/public/pizzahutMeny.html",
  "BBQ Chicken Pizza": "../backend/public/pizzahutMeny.html",
  "Pepperoni Lovers": "../backend/public/pizzahutMeny.html",
  "Pulled Beef BBQ": "../backend/public/pizzahutMeny.html",
  "Margherita": "../backend/public/pizzahutMeny.html",
  "Caesar Salad": "../backend/public/pizzahutMeny.html",
  "Halloumi King": "../backend/public/pizzahutMeny.html",
  "Gourmet Chicken Chips": "../backend/public/pizzahutMeny.html",
  "Flexi Whopper": "../backend/public/pizzahutMeny.html",
  "Halloumi King Jr.": "../backend/public/pizzahutMeny.html",
  "Chicken Royale": "../backend/public/pizzahutMeny.html",
  "Crispy Chicken": "../backend/public/pizzahutMeny.html",

  "Hamburgare": "../backend/public/mcdonaldsMeny.html",
  "Friscoburgare": "../backend/public/mcdonaldsMeny.html",
  "Chili n Cheese": "../backend/public/mcdonaldsMeny.html",
  "Green Burger": "../backend/public/mcdonaldsMeny.html",
  "Spicy Kyckling": "../backend/public/mcdonaldsMeny.html",
  "Kyckling & Bacon": "../backend/public/mcdonaldsMeny.html",
  "Mozzarellasticks": "../backend/public/mcdonaldsMeny.html",
  "Onion Rings": "../backend/public/mcdonaldsMeny.html",
  "Big Mac": "../backend/public/mcdonaldsMeny.html",
  "Pommes Frites": "../backend/public/mcdonaldsMeny.html",
  "Cheeseburgare": "../backend/public/mcdonaldsMeny.html",
  "Happy Meal Hamburgare": "../backend/public/mcdonaldsMeny.html",
  "Coca-Cola": "../backend/public/mcdonaldsMeny.html",
  "McWrap® Classic Chicken": "../backend/public/mcdonaldsMeny.html",
  "Tasty Chicken Burger": "../backend/public/mcdonaldsMeny.html",
  "Vegetable Deluxe": "../backend/public/mcdonaldsMeny.html",
  "McPlant®": "../backend/public/mcdonaldsMeny.html",
  "Side Salad": "../backend/public/mcdonaldsMeny.html",
  "9 Chicken Nuggets": "../backend/public/mcdonaldsMeny.html",

  "Originalmål": "../backend/public/maxMeny.html",
  "Delifresh Kycklingmål": "../backend/public/maxMeny.html",
  "Crispy Kyckling": "../backend/public/maxMeny.html",
  "Lyxshake Choklad": "../backend/public/maxMeny.html",
  "Liten pommes": "../backend/public/maxMeny.html",
  "Stor Läsk 50cl": "../backend/public/maxMeny.html",
  "Dipp BBQ": "../backend/public/maxMeny.html",
  "Halloumiburgare": "../backend/public/maxMeny.html",
  "Vegansk Nuggets Meal": "../backend/public/maxMeny.html",

  "Kebab": "../backend/public/sånnegardensMeny.html",
  "Falafel": "../backend/public/sånnegardensMeny.html",
  "Kycklingwrap": "../backend/public/sånnegardensMeny.html",
  "Nachotallrik": "../backend/public/sånnegardensMeny.html",
  "Kyckling Deluxe": "../backend/public/sånnegardensMeny.html",
  "Biff & Bearnaise": "../backend/public/sånnegardensMeny.html",
  "Grönkål & Feta": "../backend/public/sånnegardensMeny.html",
  "Vegan Feast": "../backend/public/sånnegardensMeny.html",
  "Husets Sallad": "../backend/public/sånnegardensMeny.html",
  "Chokladmousse": "../backend/public/sånnegardensMeny.html",
  "Läsk 33cl": "../backend/public/sånnegardensMeny.html",

  "Pad Thai": "../backend/public/thaimatMeny.html",
  "Vegetarisk Pad Thai": "../backend/public/thaimatMeny.html",
  "Pad Namman Hoi Nöt": "../backend/public/thaimatMeny.html",
  "Kyckling Panang Curry": "../backend/public/thaimatMeny.html",
  "Gai Pad Med Mamuang": "../backend/public/thaimatMeny.html",
  "Röd Curry Vegan": "../backend/public/thaimatMeny.html",
  "Nöt Massaman Curry": "../backend/public/thaimatMeny.html",
  "Nötgryta med Basilika": "../backend/public/thaimatMeny.html",
  "Grönsakswok med Cashewnötter": "../backend/public/thaimatMeny.html",
  "Kyckling Satay": "../backend/public/thaimatMeny.html",

  "Burger King": "../backend/public/burgerKingMeny.html",
  "Whopper": "../backend/public/burgerKingMeny.html",
  "Bacon King": "../backend/public/burgerKingMeny.html",
  "Fish King": "../backend/public/burgerKingMeny.html",

  "Pho": "../backend/public/thaimatMeny.html",
  "Ramen": "../backend/public/thaimatMeny.html",
  "Bibimbap": "../backend/public/thaimatMeny.html",
  "Dim Sum": "../backend/public/thaimatMeny.html",
  "Tempura": "../backend/public/thaimatMeny.html"
};


  const fakeFoods = Object.keys(foodToPage);

  
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
  input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const value = input.value.trim();

    if (foodToPage[value]) {
      window.location.href = foodToPage[value];
    } else {
      alert("Ingen meny hittades för det du skrev.");
    }
  }
});
  
  input.addEventListener("input", filterFoods);
  
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".searchbar")) {
      dropdown.style.display = "none";
    }
  });
  