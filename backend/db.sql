CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE meals_McDonalds (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);

INSERT INTO meals_McDonalds (name, description, price, image_path)
VALUES 
    ('9 Chicken Nuggets', 'Våra goda Chicken McNuggets består alltid av kycklingbröstfilé med en krispig gyllenbrun panering.', 140.00, ''),
    ('Big Mac', 'Big Mac™ är världens mest populära hamburgare. Det är inte utan anledning den är svår att motstå.', 45.00, ''),
    ('Pommes Frites', 'Potatis, icke-hydrogenerade vegetabiliska oljor (raps), dextros (främst tillsatt i början av potatissäsongen). Tillagad på restauranger med icke-hydrogenerad vegetabilisk olja. Salt tillsätts efter tillagning.', 50.00, 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-fries-medium-april-promo:nutrition-calculator-tile?wid=822&hei=822&dpr=off'),
    ('Cheeseburgare', 'Vår populära Cheeseburgare med 100 % rent nötkött, lök, inlagd gurka, senap, ketchup och en skiva ost – serveras med ett varmt nyrostat bröd.', 20.00, ''),
    ('Happy Meal Hamburgare', 'Happy Meal Hamburgare, en burgare med 100% nöttkött.', 50.00, ''),
    ('Coca-Cola', 'Kolsyrat vatten, socker, färgämne: syrafast sockerkulör, surhetsreglerande medel: fosforsyra, aromämnen (inkl. koffein).', 25.00, ''),
    ('McWrap® Classic Chicken', 'Vår efterlängtade McWrap® är äntligen tillbaka på menyn! Den innehåller delad Chicken Premiere, sallad, tomat och McFeast-sås.', 45.00, ''),
    ('Tasty Chicken Burger', 'Vår populära Chicken Tasty finns nu i en mindre version med den oemotståndligt goda Tasty-såsen, sallad och cheddar. Allt samlat i ett varmt och luftigt bröd.', 20.00, ''),
    ('Vegetable Deluxe', 'Röda pesto-vegetariska goujons med smörgåssås och strimlad sallad i ett sesambröd.', 45.00, ''),
    ('McPlant®', 'A vegan burger made with a juicy plant-based patty co-developed with Beyond Meat® featuring vegan sandwich sauce, ketchup, mustard, onion, pickles, lettuce, tomato, and a vegan alternative to cheese in a sesame seed bun. Vegan certified.', 70.00, ''),
    ('Side Salad', 'Nylagad sallad med sallad, gurka, skivad tomat och rödlök. Närings- och allergeninformationen inkluderar inte dressing.', 50.00, '');


CREATE TABLE meals_BurgerKing (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);

INSERT INTO meals_BurgerKing (name, description, price, image_path)
VALUES 
    ('Whopper', 'Vad är godare än en Whopper? Nya WHOPPER! För första gången sedan 1957 har receptet förbättrats. Samma fräscha ingredienser, ännu saftigare nötkött och fluffigare bröd', 70, ''),
    ('Bacon King', 'Den ikoniska Bacon King – mer överdådig än någonsin. Vi har gett din favoritburgare en uppgradering värdig en kung.', 65, ''),
    ('Fish King', 'Vår panerade fiskburgare med sallad och majonnäs.', 40, ''),
    ('Caesar Salad', 'Caesarsallad med kyckling, ost, krutonger, bulgur och romansallad', 50, ''),
    ('Halloumi King', 'Äkta Halloumi från Cypern och i ett potatisbröd. Komplett med fräsch sallad, tomat, lök och vegansk majonnäs.', 60, ''),
    ('Gourmet Chicken Chipotle', 'En rökig dröm! Prova Gourmet Chipotle – en krispig, friterat kycklingburgare i fluffigt bröd. Med kryddig Pepper Jack cheese, bacon, fräsch sallad och skivad tomat. ', 90, ''),
    ('Flexi Whopper', 'Precis som en Whopper, men med en bas av växter! Krämig vegansk majonnäs, ketchup, sallad, tomat, saltgurka och lök.', 80, ''),
    ('Halloumi King Jr.', 'Äkta Halloumi från Cypern. Komplett med fräsch sallad, tomat och majonnäs.', 30, ''),
    ('Chicken Royale', 'En extra lång burgare med saftig, panerad kycklingfilé, färsk sallad och majonnäs.', 89, ''),    
    ('Crispy Chicken', 'En friterad kycklingburgare med krispig sallad, tomater och dressing', 25.00, '');


CREATE TABLE balances (
    balance_id INT PRIMARY KEY,
    user_id INT,
    balance DECIMAL(10, 2),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);
