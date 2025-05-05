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
    ('Pommes Frites', 'Potatis, icke-hydrogenerade vegetabiliska oljor (raps), dextros (främst tillsatt i början av potatissäsongen). Tillagad på restauranger med icke-hydrogenerad vegetabilisk olja. Salt tillsätts efter tillagning.', 50.00, 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-fries-medium-april-promo:nutrition-calculator-tile?wid=822&hei=822&dpr=off');
    ('Cheeseburgare', 'Vår populära Cheeseburgare med 100 % rent nötkött, lök, inlagd gurka, senap, ketchup och en skiva ost – serveras med ett varmt nyrostat bröd.', 20.00, '');
    ('Happy Meal Hamburgare', 'Crispy golden fries', 50.00, '');
    ('Coca-Cola', 'Kolsyrat vatten, socker, färgämne: syrafast sockerkulör, surhetsreglerande medel: fosforsyra, aromämnen (inkl. koffein).', 25.00, '');
    ('McWrap® Classic Chicken', 'Vår efterlängtade McWrap® är äntligen tillbaka på menyn! Den innehåller delad Chicken Premiere, sallad, tomat och McFeast-sås.', 45.00, '');
    ('Tasty Chicken Burger', 'Vår populära Chicken Tasty finns nu i en mindre version med den oemotståndligt goda Tasty-såsen, sallad och cheddar. Allt samlat i ett varmt och luftigt bröd.', 20.00, '');
    ('Vegetable Deluxe', 'Röda pesto-vegetariska goujons med smörgåssås och strimlad sallad i ett sesambröd.', 45.00, '');
    ('McPlant®', 'A vegan burger made with a juicy plant-based patty co-developed with Beyond Meat® featuring vegan sandwich sauce, ketchup, mustard, onion, pickles, lettuce, tomato, and a vegan alternative to cheese in a sesame seed bun. Vegan certified.', 70.00, '');
    ('Side Salad', 'Nylagad sallad med sallad, gurka, skivad tomat och rödlök. Närings- och allergeninformationen inkluderar inte dressing.', 50.00, '');





CREATE TABLE balances (
    balance_id INT PRIMARY KEY,
    user_id INT,
    balance DECIMAL(10, 2),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);
