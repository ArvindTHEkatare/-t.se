const foodToPage = {
    "Pizza": "/pizzahutMeny.html",
    "Kebabpizza": "/pizzahutMeny.html",
    "Taco Pizza": "/pizzahutMeny.html",
    "Vegetariana": "/pizzahutMeny.html",
    "Köttälskaren": "/pizzahutMeny.html",
    "BBQ Chicken Pizza": "/pizzahutMeny.html",
    "Pepperoni Lovers": "/pizzahutMeny.html",
    "Pulled Beef BBQ": "/pizzahutMeny.html",
    "Margherita": "/pizzahutMeny.html",
    "Caesar Salad": "/pizzahutMeny.html",
    "Halloumi King": "/pizzahutMeny.html",
    "Gourmet Chicken Chips": "/pizzahutMeny.html",
    "Flexi Whopper": "/pizzahutMeny.html",
    "Halloumi King Jr.": "/pizzahutMeny.html",
    "Chicken Royale": "/pizzahutMeny.html",
    "Crispy Chicken": "/pizzahutMeny.html",
  
    "Hamburgare": "/mcdonaldsMeny.html",
    "Friscoburgare": "/mcdonaldsMeny.html",
    "Chili n Cheese": "/mcdonaldsMeny.html",
    "Green Burger": "/mcdonaldsMeny.html",
    "Spicy Kyckling": "/mcdonaldsMeny.html",
    "Kyckling & Bacon": "/mcdonaldsMeny.html",
    "Mozzarellasticks": "/mcdonaldsMeny.html",
    "Onion Rings": "/mcdonaldsMeny.html",
    "Big Mac": "/mcdonaldsMeny.html",
    "Pommes Frites": "/mcdonaldsMeny.html",
    "Cheeseburgare": "/mcdonaldsMeny.html",
    "Happy Meal Hamburgare": "/mcdonaldsMeny.html",
    "Coca-Cola": "/mcdonaldsMeny.html",
    "McWrap® Classic Chicken": "/mcdonaldsMeny.html",
    "Tasty Chicken Burger": "/mcdonaldsMeny.html",
    "Vegetable Deluxe": "/mcdonaldsMeny.html",
    "McPlant®": "/mcdonaldsMeny.html",
    "Side Salad": "/mcdonaldsMeny.html",
    "9 Chicken Nuggets": "/mcdonaldsMeny.html",
  
    "Originalmål": "/maxMeny.html",
    "Delifresh Kycklingmål": "/maxMeny.html",
    "Crispy Kyckling": "/maxMeny.html",
    "Lyxshake Choklad": "/maxMeny.html",
    "Liten pommes": "/maxMeny.html",
    "Stor Läsk 50cl": "/maxMeny.html",
    "Dipp BBQ": "/maxMeny.html",
    "Halloumiburgare": "/maxMeny.html",
    "Vegansk Nuggets Meal": "/maxMeny.html",
  
    "Kebab": "/sånnegardensMeny.html",
    "Falafel": "/sånnegardensMeny.html",
    "Kycklingwrap": "/sånnegardensMeny.html",
    "Nachotallrik": "/sånnegardensMeny.html",
    "Kyckling Deluxe": "/sånnegardensMeny.html",
    "Biff & Bearnaise": "/sånnegardensMeny.html",
    "Grönkål & Feta": "/sånnegardensMeny.html",
    "Vegan Feast": "/sånnegardensMeny.html",
    "Husets Sallad": "/sånnegardensMeny.html",
    "Chokladmousse": "/sånnegardensMeny.html",
    "Läsk 33cl": "/sånnegardensMeny.html",
  
    "Pad Thai": "/thaimatMeny.html",
    "Vegetarisk Pad Thai": "/thaimatMeny.html",
    "Pad Namman Hoi Nöt": "/thaimatMeny.html",
    "Kyckling Panang Curry": "/thaimatMeny.html",
    "Gai Pad Med Mamuang": "/thaimatMeny.html",
    "Röd Curry Vegan": "/thaimatMeny.html",
    "Nöt Massaman Curry": "/thaimatMeny.html",
    "Nötgryta med Basilika": "/thaimatMeny.html",
    "Grönsakswok med Cashewnötter": "/thaimatMeny.html",
    "Kyckling Satay": "/thaimatMeny.html",
  
    "Burger King": "/burgerKingMeny.html",
    "Whopper": "/burgerKingMeny.html",
    "Bacon King": "/burgerKingMeny.html",
    "Fish King": "/burgerKingMeny.html",
  
    "Pho": "/thaimatMeny.html",
    "Ramen": "/thaimatMeny.html",
    "Bibimbap": "/thaimatMeny.html",
    "Dim Sum": "/thaimatMeny.html",
    "Tempura": "/thaimatMeny.html"
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
    