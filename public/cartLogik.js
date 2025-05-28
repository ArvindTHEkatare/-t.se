        //addera to kundvagn funktion
        function addToCartFromElement(element, event) {
            //hämtar elementet och sparar de som name, price, image osv.
            const name = element.dataset.name;
            const price = element.dataset.price;
            const image = element.dataset.image;
            //anropa addera till kundvagn, och det är namn, pris, bild och event 
            addToCart(name, price, image, event);
          }
          //addera till kundvagn funktionen, har name price, image och event parameter
          function addToCart(name, price, image, event) {
            //sparar varor som redan finns
            let existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            //kollar på index
            const existingItemIndex = existingItems.findIndex(item => item.name === name);
            //om varor som redan finns adderas, kvantitet ökar med 1. (om man trycker på "+" på produkt sidan).
            if (existingItemIndex > -1) {
              existingItems[existingItemIndex].quantity += 1;
            } else { //annars är de inte en gammal vara, så spara item med name price image och default kvantitet är 1
              const item = {
                name: name,
                price: price,
                img: image,
                quantity: 1
              };
              //push items så de finns i existing items nu. 
              existingItems.push(item);
            }
            //använder sig av localstorage.  ochh sparar alla varor som finns där.
            localStorage.setItem("cartItems", JSON.stringify(existingItems));
            //skapar message (msg) och det är adderade till kundvagn. notiferar användaren att varan har lagts till
            const msg = document.createElement("div");
            msg.textContent = "✓ Adderade till kundvagn";
            msg.style.position = "absolute";
            msg.style.background = "#4caf50";
            msg.style.color = "white";
            msg.style.padding = "6px 10px";
            msg.style.borderRadius = "4px";
            msg.style.fontSize = "14px";
            msg.style.zIndex = "1000";
            //skapar en rect som jamför positionen. position av meddelanden är under + iconen så den hamnar där
            const rect = event.target.getBoundingClientRect();
            msg.style.left = `${rect.left + window.scrollX}px`;
            msg.style.top = `${rect.bottom + window.scrollY + 5}px`;
            //visa meddelande med ett timeout på 1 sekund. (append child så den dyker upp på skärmen)
            document.body.appendChild(msg);
            setTimeout(() => msg.remove(), 1000);
          }