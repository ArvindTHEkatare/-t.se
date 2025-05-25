CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE meals_McDonalds (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);

CREATE TABLE meals_BurgerKing (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);

CREATE TABLE meals_sannegardens (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);

CREATE TABLE meals_max (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);

CREATE TABLE meals_thaimat (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);

CREATE TABLE meals_pizzaHut (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);

CREATE TABLE balances (
    balance_id INT PRIMARY KEY,
    user_id INT,
    balance DECIMAL(10, 2),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
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

INSERT INTO meals_PizzaHut (name, description, price, image_path)
VALUES 
    ('Pepperoni Lovers', 'Tomatsås, Mozzarella, Pepperoni', 109, ''),
    meal_id, 
    ('Pulled Beef BBQ', '', 119, ''),
    ('Margherita', 'Vår panerade fiskburgare med sallad och majonnäs.', 40, ''),
    ('Caesar Salad', 'Caesarsallad med kyckling, ost, krutonger, bulgur och romansallad', 50, ''),
    ('Halloumi King', 'Äkta Halloumi från Cypern och i ett potatisbröd. Komplett med fräsch sallad, tomat, lök och vegansk majonnäs.', 60, ''),
    ('Gourmet Chicken Chipotle', 'En rökig dröm! Prova Gourmet Chipotle – en krispig, friterat kycklingburgare i fluffigt bröd. Med kryddig Pepper Jack cheese, bacon, fräsch sallad och skivad tomat. ', 90, ''),
    ('Flexi Whopper', 'Precis som en Whopper, men med en bas av växter! Krämig vegansk majonnäs, ketchup, sallad, tomat, saltgurka och lök.', 80, ''),
    ('Halloumi King Jr.', 'Äkta Halloumi från Cypern. Komplett med fräsch sallad, tomat och majonnäs.', 30, ''),
    ('Chicken Royale', 'En extra lång burgare med saftig, panerad kycklingfilé, färsk sallad och majonnäs.', 89, ''),    
    ('Crispy Chicken', 'En friterad kycklingburgare med krispig sallad, tomater och dressing', 25.00, '');

INSERT INTO meals_sannegardens (name, description, price, image_path) VALUES

('Kyckling Deluxe', 'Tomatsås, ost, grillad kyckling, rödlök, färsk paprika och vitlökssås.', 105.00, ''),
('BBQ Chicken Pizza', 'BBQ-sås, kycklingbröst, rödlök, mozzarella och färsk koriander.', 115.00, ''),
('Kyckling & Bacon', 'Tomatsås, ost, grillad kyckling, knaperstekt bacon och champinjoner.', 110.00, ''),

('Köttälskaren', 'Tomatsås, ost, köttfärs, pepperoni, bacon och jalapeños.', 120.00, ''),
('Taco Pizza', 'Tacokryddad köttfärs, ost, tomat, majs, nachos och vitlökssås.', 115.00, ''),
('Biff & Bearnaise', 'Tomatsås, mozzarella, oxfilébitar, paprika och bearnaisesås efter gräddning.', 125.00, ''),


('Vegetariana', 'Tomatsås, mozzarella, champinjoner, paprika, rödlök och oliver.', 95.00, ''),
('Grönkål & Feta', 'Tomatsås, grönkål, fetaost, rödlök, valnötter och honung.', 100.00, ''),
('Vegan Feast', 'Vegansk ost, tomatsås, zucchini, aubergine, paprika och ruccola.', 105.00, ''),

('Husets Sallad', 'Blandsallad med gurka, tomat, rödlök och husets dressing.', 40.00, ''),
('Chokladmousse', 'Luftig chokladmousse toppad med vispgrädde och riven choklad.', 35.00, ''),
('Läsk 33cl', 'Välj mellan Coca-Cola, Fanta eller Sprite. Serveras kall.', 25.00, '');

INSERT INTO meals_max (name, description, price, image_path) VALUES
('Originalmål', 'Originalburgare med nötkött, sallad, tomat, ost, dressing. Serveras med pommes och dryck.', 89.00, ''),
('Chili ’n’ Cheese', 'Nötköttsburgare med jalapeños, ost och het dressing.', 99.00, ''),
('Friscoburgare', 'Nötkött i friscobröd med ost, tomat, sallad och majonnäs.', 95.00, ''),

('Delifresh Kycklingmål', 'Grillad kycklingburgare med sallad, tomat och lätt dressing. Inkl. pommes och dryck.', 92.00, ''),
('Crispy Kyckling', 'Friterad kycklingfilé med majonnäs, isbergssallad och pickles.', 95.00, ''),
('Spicy Kyckling', 'Kryddstark kycklingburgare med jalapeños och het sås.', 98.00, ''),

('Green Burger', 'Vegetarisk bönburgare med sallad, rödlök, picklad gurka och veganmajonnäs.', 89.00, ''),
('Halloumiburgare', 'Friterad halloumi med sallad, tomat och mild dressing.', 89.00, ''),
('Vegansk Nuggets Meal', 'Sojabaserade nuggets med pommes och dryck.', 85.00, ''),

('Lyxshake Choklad', 'Krämig chokladmilkshake gjord på svensk mjölk och glass.', 39.00, ''),
('Liten pommes', 'Krispig friterad potatis med MAX originalkrydda.', 25.00, ''),
('Dipp BBQ', 'Rökig barbecuesås, perfekt till pommes eller nuggets.', 10.00, ''),
('Stor Läsk 50cl', 'Välj mellan Coca-Cola, Fanta eller Sprite. Serveras kall.', 29.00, '');


INSERT INTO meals_thaimat (name, description, price, image_path) VALUES

('Pad Namman Hoi Nöt', 'Wokad biff med ostronsås, broccoli, morötter och paprika.', 119.00, ''),
('Nöt Massaman Curry', 'Thailändsk massaman curry med biff, kokosmjölk, potatis och jordnötter.', 125.00, ''),
('Nötgryta med Basilika', 'Strimlad biff med thaibasilika, chili och vitlök.', 120.00, ''),


('Vegetarisk Pad Thai', 'Stekta risnudlar med tofu, ägg, grönsaker och jordnötter.', 109.00, ''),
('Grönsakswok med Cashewnötter', 'Blandade grönsaker wokade med cashewnötter i mild soja- och chilissås.', 110.00, ''),
('Röd Curry Vegan', 'Vegansk curry med kokosmjölk, tofu, bambuskott, paprika och zucchini.', 115.00, ''),


('Kyckling Panang Curry', 'Krämig panangcurry med kyckling, kokosmjölk och limeblad.', 119.00, ''),
('Gai Pad Med Mamuang', 'Wokad kyckling med cashewnötter, lök, paprika och torkad chili.', 120.00, ''),
('Kyckling Satay', 'Grillade kycklingspett med jordnötssås och jasminris.', 125.00, '');

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT,
    meal_id INT,
    quantity INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number VARCHAR(20),
    email VARCHAR(100)
);

