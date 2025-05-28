CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
    is_admin boolean DEFAULT false
);

CREATE TABLE meals_mcdonalds (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);

CREATE TABLE meals_burgerking (
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

CREATE TABLE meals_pizzahut (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500)
);


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


INSERT INTO meals_mcdonalds VALUES (3, 'Pommes Frites', 'Potatis, icke-hydrogenerade vegetabiliska oljor (raps), dextros (främst tillsatt i början av potatissäsongen). Tillagad på restauranger med icke-hydrogenerad vegetabilisk olja. Salt tillsätts efter tillagning.', 50.00, './images/pommes-frites.jpg');
INSERT INTO meals_mcdonalds VALUES (4, 'Cheeseburgare', 'Vår populära Cheeseburgare med 100 % rent nötkött, lök, inlagd gurka, senap, ketchup och en skiva ost – serveras med ett varmt nyrostat bröd.', 20.00, './images/cheese-burger.png
');
INSERT INTO meals_mcdonalds VALUES (1, '9 Chicken Nuggets', 'Våra goda Chicken McNuggets består alltid av kycklingbröstfilé med en krispig gyllenbrun panering.', 140.00, './images/9-piece-nuggets.jpg
');
INSERT INTO meals_mcdonalds VALUES (2, 'Big Mac', 'Big Mac™ är världens mest populära hamburgare. Det är inte utan anledning den är svår att motstå.', 45.00, './images/big-mac.jpg');
INSERT INTO meals_mcdonalds VALUES (6, 'Coca-Cola', 'Kolsyrat vatten, socker, färgämne: syrafast sockerkulör, surhetsreglerande medel: fosforsyra, aromämnen (inkl. koffein).', 25.00, './images/coca-cola.png');
INSERT INTO meals_mcdonalds VALUES (7, 'McWrap® Classic Chicken', 'Vår efterlängtade McWrap® är äntligen tillbaka på menyn! Den innehåller delad Chicken Premiere, sallad, tomat och McFeast-sås.', 45.00, './images/McWrap.png');
INSERT INTO meals_mcdonalds VALUES (8, 'Tasty Chicken Burger', 'Vår populära Chicken Tasty finns nu i en mindre version med den oemotståndligt goda Tasty-såsen, sallad och cheddar. Allt samlat i ett varmt och luftigt bröd.', 20.00, './images/');
INSERT INTO meals_mcdonalds VALUES (9, 'Vegetable Deluxe', 'Röda pesto-vegetariska goujons med smörgåssås och strimlad sallad i ett sesambröd.', 45.00, './images/vegetable-deluxe.png');
INSERT INTO meals_mcdonalds VALUES (11, 'Side Salad', 'Nylagad sallad med sallad, gurka, skivad tomat och rödlök. Närings- och allergeninformationen inkluderar inte dressing.', 50.00, './images/side-salad.jpg');
INSERT INTO meals_mcdonalds VALUES (10, 'McPlant®', 'A vegan burger made with a juicy plant-based patty co-developed with Beyond Meat® featuring vegan sandwich sauce, ketchup, mustard, onion, pickles, lettuce, tomato, and a vegan alternative to cheese in a sesame seed bun. Vegan certified.', 70.00, './images/mc-plant.jpg
');
INSERT INTO meals_mcdonalds VALUES (5, 'Happy Meal Hamburgare', 'Happy Meal Hamburgare, en burgare med 100% nöttkött.', 50.00, './images/happy-meal.jpg');
INSERT INTO meals_mcdonalds VALUES (14, 'a', 'a', 12.00, '');


INSERT INTO meals_burgerking VALUES (1, 'Whopper', 'Vad är godare än en Whopper? Nya WHOPPER! För första gången sedan 1957 har receptet förbättrats. Samma fräscha ingredienser, ännu saftigare nötkött och fluffigare bröd', 70.00, 'images/whopper.png
');
INSERT INTO meals_burgerking VALUES (2, 'Bacon King', 'Den ikoniska Bacon King – mer överdådig än någonsin. Vi har gett din favoritburgare en uppgradering värdig en kung.', 65.00, 'images/bacon-king.jpg
');
INSERT INTO meals_burgerking VALUES (3, 'Fish King', 'Vår panerade fiskburgare med sallad och majonnäs.', 40.00, 'images/fish-king.png');
INSERT INTO meals_burgerking VALUES (4, 'Caesar Salad', 'Caesarsallad med kyckling, ost, krutonger, bulgur och romansallad', 50.00, 'images/caesar-salad.webp');
INSERT INTO meals_burgerking VALUES (5, 'Halloumi King', 'Äkta Halloumi från Cypern och i ett potatisbröd. Komplett med fräsch sallad, tomat, lök och vegansk majonnäs.', 60.00, 'images/halloumi-king.webp');
INSERT INTO meals_burgerking VALUES (6, 'Gourmet Chicken Chipotle', 'En rökig dröm! Prova Gourmet Chipotle – en krispig, friterat kycklingburgare i fluffigt bröd. Med kryddig Pepper Jack cheese, bacon, fräsch sallad och skivad tomat. ', 90.00, 'images/gourmet-chicken.png');
INSERT INTO meals_burgerking VALUES (7, 'Flexi Whopper', 'Precis som en Whopper, men med en bas av växter! Krämig vegansk majonnäs, ketchup, sallad, tomat, saltgurka och lök.', 80.00, 'images/flexi-whopper.webp');
INSERT INTO meals_burgerking VALUES (8, 'Halloumi King Jr.', 'Äkta Halloumi från Cypern. Komplett med fräsch sallad, tomat och majonnäs.', 30.00, 'images/halloumi-king-jr.png');
INSERT INTO meals_burgerking VALUES (9, 'Chicken Royale', 'En extra lång burgare med saftig, panerad kycklingfilé, färsk sallad och majonnäs.', 89.00, 'images/chicken-royale.jpg');
INSERT INTO meals_burgerking VALUES (10, 'Crispy Chicken', 'En friterad kycklingburgare med krispig sallad, tomater och dressing', 25.00, 'images/crispy-chicken.webp');
INSERT INTO meals_burgerking VALUES (11, 'a', 'a', 12.00, 'a');

INSERT INTO meals_pizzahut VALUES (1, 'Beef Supreme Pizza', 'En klassisk panpizza toppad med kryddig nötköttfärs, paprika, rödlök och mozzarellaost.', 95.00, '/images/beef-supreme.png');
INSERT INTO meals_pizzahut VALUES (2, 'BBQ Beef Melt', 'Smält ost och BBQ-marinerat nötkött i ett krispigt, grillat tunnbröd – en smakrik favorit.', 85.00, '/images/bbq-beef-melt.webp');
INSERT INTO meals_pizzahut VALUES (3, 'Beef Lovers Pan Pizza', 'Panpizza fylld med extra mycket nötkött, cheddarost, jalapeños och BBQ-sås.', 105.00, '/images/beef-lovers-pizza.jpg');
INSERT INTO meals_pizzahut VALUES (4, 'Chicken Italiano Pizza', 'Kycklingbitar, soltorkade tomater, vitlökssås och mozzarella på en tunn pizzabotten.', 90.00, '/images/chicken-italiano-pizza.jpg');
INSERT INTO meals_pizzahut VALUES (5, 'Crispy Chicken Tenders', 'Krispiga kycklingstrimlor serveras med valfri dippsås.', 70.00, '/images/crispy-chicken-tenders.jpg');
INSERT INTO meals_pizzahut VALUES (6, 'Spicy Chicken Wings (6 pcs)', 'Marinerade kycklingvingar med het kryddning, serveras rykande varma.', 65.00, '/images/6-chicken-cripsy-wings.jpg');
INSERT INTO meals_pizzahut VALUES (7, 'Veggie Lover’s Pizza', 'Panpizza med paprika, rödlök, svamp, tomat och oliver – helt utan kött.', 90.00, '/images/veggie-lovers-pizza.webp');
INSERT INTO meals_pizzahut VALUES (8, 'Cheesy Garlic Breadsticks', 'Färska brödpinnar toppade med vitlökssmör och smält ost – ett vegetariskt tillbehör.', 50.00, '/images/cheesy-garlic-breadsticks.jpg');
INSERT INTO meals_pizzahut VALUES (9, 'Plant-Based Supreme', 'Vegetarisk panpizza med växtbaserat protein, paprika, lök, svamp och vegansk ost.', 100.00, '/images/plant-based-supreme.png');


INSERT INTO meals_sannegardens VALUES (12, 'Läsk 33cl', 'Välj mellan Coca-Cola, Fanta eller Sprite. Serveras kall.', 25.00, '/images/läsk.webp');
INSERT INTO meals_sannegardens VALUES (2, 'BBQ Chicken Pizza', 'BBQ-sås, kycklingbröst, rödlök, mozzarella och färsk koriander.', 115.00, '/images/BBQ-Chicken-Pizza.jpg');
INSERT INTO meals_sannegardens VALUES (3, 'Kyckling & Bacon', 'Tomatsås, ost, grillad kyckling, knaperstekt bacon och champinjoner.', 110.00, '/images/kyckling-och-bacon.jpg');
INSERT INTO meals_sannegardens VALUES (4, 'Köttälskaren', 'Tomatsås, ost, köttfärs, pepperoni, bacon och jalapeños.', 120.00, '/images/meatlover.jpg');
INSERT INTO meals_sannegardens VALUES (5, 'Taco Pizza', 'Tacokryddad köttfärs, ost, tomat, majs, nachos och vitlökssås.', 115.00, '/images/taco-pizza.jpg');
INSERT INTO meals_sannegardens VALUES (6, 'Biff & Bearnaise', 'Tomatsås, mozzarella, oxfilébitar, paprika och bearnaisesås efter gräddning.', 125.00, '/images/beef-bernaise.png');
INSERT INTO meals_sannegardens VALUES (7, 'Vegetariana', 'Tomatsås, mozzarella, champinjoner, paprika, rödlök och oliver.', 95.00, '/images/vegeterian.jpg');
INSERT INTO meals_sannegardens VALUES (8, 'Grönkål & Feta', 'Tomatsås, grönkål, fetaost, rödlök, valnötter och honung.', 100.00, '/images/kale-pizza.jpg');
INSERT INTO meals_sannegardens VALUES (9, 'Vegan Feast', 'Vegansk ost, tomatsås, zucchini, aubergine, paprika och ruccola.', 105.00, '/images/vegan-feast.jpg');
INSERT INTO meals_sannegardens VALUES (10, 'Husets Sallad', 'Blandsallad med gurka, tomat, rödlök och husets dressing.', 40.00, '/images/husets-salad.jpg');
INSERT INTO meals_sannegardens VALUES (11, 'Chokladmousse', 'Luftig chokladmousse toppad med vispgrädde och riven choklad.', 35.00, '/images/chokladmousse.jpg');
INSERT INTO meals_sannegardens VALUES (1, 'Kyckling Deluxe', 'Tomatsås, ost, grillad kyckling, rödlök, färsk paprika och vitlökssås.', 105.00, '/images/kyckling-deluxe.jpg');
INSERT INTO meals_sannegardens VALUES (13, 'a', 'a', 12.00, 'a');

INSERT INTO meals_max VALUES (1, 'Originalmål', 'Originalburgare med nötkött, sallad, tomat, ost, dressing. Serveras med pommes och dryck.', 89.00, '/images/orginalmål.jpg');
INSERT INTO meals_max VALUES (2, 'Chili ’n’ Cheese', 'Nötköttsburgare med jalapeños, ost och het dressing.', 99.00, '/images/chili-n-cheese.png');
INSERT INTO meals_max VALUES (3, 'Friscoburgare', 'Nötkött i friscobröd med ost, tomat, sallad och majonnäs.', 95.00, '/images/friscoburgare.png');
INSERT INTO meals_max VALUES (4, 'Delifresh Kyckling', 'Grillad kycklingburgare med sallad, tomat och lätt dressing. ', 92.00, '/images/delifresh-kycklingburgare.jpg');
INSERT INTO meals_max VALUES (5, 'Crispy Kyckling', 'Friterad kycklingfilé med majonnäs, isbergssallad och pickles.', 95.00, '/images/crispy-kyckling.jpg');
INSERT INTO meals_max VALUES (6, 'Spicy Kyckling', 'Kryddstark kycklingburgare med jalapeños och het sås.', 98.00, '/images/spicy-kyckling.png');
INSERT INTO meals_max VALUES (7, 'Green Burger', 'Vegetarisk bönburgare med sallad, rödlök, picklad gurka och veganmajonnäs.', 89.00, '/images/green-burger.png');
INSERT INTO meals_max VALUES (8, 'Halloumiburgare', 'Friterad halloumi med sallad, tomat och mild dressing.', 89.00, '/images/halloumi-burger.png');
INSERT INTO meals_max VALUES (9, 'Vegansk Nuggets Meal', 'Sojabaserade nuggets med pommes och dryck.', 85.00, '/images/vegansk-nuggetsmål.png');
INSERT INTO meals_max VALUES (10, 'Lyxshake Choklad', 'Krämig chokladmilkshake gjord på svensk mjölk och glass.', 39.00, '/images/lyxchokladshake.png');
INSERT INTO meals_max VALUES (11, 'Liten pommes', 'Krispig friterad potatis med MAX originalkrydda.', 25.00, '/images/liten-pommes.png');
INSERT INTO meals_max VALUES (12, 'Dipp BBQ', 'Rökig barbecuesås, perfekt till pommes eller nuggets.', 10.00, '/images/bbq-dip.png');
INSERT INTO meals_max VALUES (13, 'Coca cola 50cl', 'Coca-Cola. Serveras kall.', 29.00, '/images/coca-cola.webp');
INSERT INTO meals_max VALUES (14, 'a', 'a', 12.00, 'a');


INSERT INTO meals_thaimat VALUES (1, 'Pad Namman Hoi Nöt', 'Wokad biff med ostronsås, broccoli, morötter och paprika.', 119.00, '/images/pad-namaan.jpg');
INSERT INTO meals_thaimat VALUES (2, 'Nöt Massaman Curry', 'Thailändsk massaman curry med biff, kokosmjölk, potatis och jordnötter.', 125.00, '/images/massaman.jpg');
INSERT INTO meals_thaimat VALUES (3, 'Nötgryta med Basilika', 'Strimlad biff med thaibasilika, chili och vitlök.', 120.00, '/images/biff-stew.PNG');
INSERT INTO meals_thaimat VALUES (5, 'Grönsakswok med Cashewnötter', 'Blandade grönsaker wokade med cashewnötter i mild soja- och chilissås.', 110.00, '/images/vegwok_cashewnotter.jpg');
INSERT INTO meals_thaimat VALUES (6, 'Röd Curry Vegan', 'Vegansk curry med kokosmjölk, tofu, bambuskott, paprika och zucchini.', 115.00, '/images/röd-curry.jpg');
INSERT INTO meals_thaimat VALUES (7, 'Kyckling Panang Curry', 'Krämig panangcurry med kyckling, kokosmjölk och limeblad.', 119.00, '/images/panang-curry.png
');
INSERT INTO meals_thaimat VALUES (8, 'Gai Pad Med Mamuang', 'Wokad kyckling med cashewnötter, lök, paprika och torkad chili.', 120.00, '/images/GaiPadMedMamuang.webp');
INSERT INTO meals_thaimat VALUES (9, 'Kyckling Satay', 'Grillade kycklingspett med jordnötssås och jasminris.', 125.00, '/images/kyckling_satay.jpg');
INSERT INTO meals_thaimat VALUES (4, 'Vegetarisk Pad Thai', 'Stekta risnudlar med tofu, ägg, grönsaker och jordnötter.', 109.00, '/images/pad-thai.jpg');
INSERT INTO meals_thaimat VALUES (10, 'a', 'a', 12.00, 'a');


INSERT INTO orders VALUES (1, 1, NULL, 1, '2025-05-11 16:20:16.57187', 'arvind', 'katare', '76123132', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (2, 1, NULL, 2, '2025-05-11 16:41:13.56303', 'arvind', 'katare', '762166759', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (3, 1, NULL, 1, '2025-05-11 17:00:07.279353', 'testtest', 'testest', 'testtest', 'its_me_arvind@gmail.com');
INSERT INTO orders VALUES (4, 1, NULL, 1, '2025-05-11 17:00:31.410253', 'arvind', 'katare', '2312312093', 'trustme@gmail.com');
INSERT INTO orders VALUES (5, 1, NULL, 2, '2025-05-11 17:02:53.644568', 'arvind', 'katare', '2312312093', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (6, 1, NULL, 2, '2025-05-11 17:02:54.99386', '', '', '', '');
INSERT INTO orders VALUES (7, 1, NULL, 4, '2025-05-11 17:15:53.300162', 'jaya', 'katare', '123123123123', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (8, 1, NULL, 4, '2025-05-11 17:15:56.692925', '', '', '', '');
INSERT INTO orders VALUES (9, 1, NULL, 3, '2025-05-11 17:18:33.881556', 'arvind', 'katare', '123123123123', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (10, 1, NULL, 1, '2025-05-11 17:22:50.995547', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (11, 1, NULL, 1, '2025-05-11 17:22:52.056052', '', '', '', '');
INSERT INTO orders VALUES (12, 1, NULL, 3, '2025-05-11 17:24:35.256265', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (13, 1, NULL, 2, '2025-05-11 17:26:01.962778', 'arvind', 'katare', '2312312093', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (14, 1, NULL, 2, '2025-05-11 17:29:28.496275', 'arvind', 'katare', '123123123123', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (15, 1, NULL, 1, '2025-05-11 17:29:28.499975', 'arvind', 'katare', '123123123123', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (16, 1, NULL, 2, '2025-05-11 17:29:30.27413', '', '', '', '');
INSERT INTO orders VALUES (17, 1, NULL, 1, '2025-05-11 17:29:30.27575', '', '', '', '');
INSERT INTO orders VALUES (18, 1, NULL, 2, '2025-05-11 17:30:17.782954', '', '', '', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (19, 1, NULL, 1, '2025-05-11 17:30:17.789989', '', '', '', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (20, 1, NULL, 4, '2025-05-11 17:43:17.327964', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (21, 1, NULL, 4, '2025-05-11 17:43:18.957883', '', '', '', '');
INSERT INTO orders VALUES (22, 1, NULL, 5, '2025-05-11 17:47:19.263796', 'arvind', 'katare', '123123123123', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (23, 1, NULL, 6, '2025-05-11 17:52:35.866571', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (24, 1, NULL, 1, '2025-05-11 17:53:07.741539', 'arvind', '', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (25, 1, NULL, 1, '2025-05-11 18:03:54.216357', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (26, 1, NULL, 1, '2025-05-11 18:04:10.266256', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (27, 1, NULL, 4, '2025-05-11 18:05:17.533522', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (28, 1, NULL, 1, '2025-05-11 18:08:56.91941', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (29, 1, NULL, 2, '2025-05-11 18:12:03.061571', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (30, 1, NULL, 3, '2025-05-11 18:18:41.832077', 'arvind', 'katare', '2312312093', 'jaykatare911@gmail.com');
INSERT INTO orders VALUES (31, 1, NULL, 5, '2025-05-11 18:20:31.279581', 'arvind', 'katare', '231323', '213123123');
INSERT INTO orders VALUES (32, 1, NULL, 5, '2025-05-11 18:20:35.962334', 'arvind', 'katare', '231323', '213123123');
INSERT INTO orders VALUES (33, 1, NULL, 5, '2025-05-11 18:20:48.684625', 'arvind', 'katare', '231323', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (34, 1, NULL, 5, '2025-05-11 18:20:54.469638', 'arvind', 'katare', '231323', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (35, 1, NULL, 5, '2025-05-11 18:23:28.289183', 'arvind', 'katare', '231323', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (36, 1, NULL, 7, '2025-05-11 18:28:32.078537', 'arvind', 'katare', '231323', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (37, 1, NULL, 7, '2025-05-11 18:32:48.246923', 'arvind', 'katare', '231323', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (38, 1, NULL, 2, '2025-05-12 08:49:02.611956', 'arvind', 'katare', '123123123123', 'arvind.katare@elev.ga.ntig.se');
INSERT INTO orders VALUES (39, 1, NULL, 2, '2025-05-12 08:49:02.617857', 'arvind', 'katare', '123123123123', 'arvind.katare@elev.ga.ntig.se');
INSERT INTO orders VALUES (40, 1, NULL, 5, '2025-05-12 09:34:49.067558', 'omid', 'amini', '2312312093', 'omidamin727i@gmail.com');
INSERT INTO orders VALUES (41, 1, NULL, 6, '2025-05-12 10:26:34.170739', 'arvin', 'testest', '123123123123', 'emin.kosovac@elev.ga.ntig.se');
INSERT INTO orders VALUES (42, 1, NULL, 8, '2025-05-13 08:37:39.708897', 'arvind', 'katare', '2312312093', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (43, 1, NULL, 4, '2025-05-13 15:44:58.354171', 'arvind', 'katare', '2312312093', 'kamberseci@gmail.com');
INSERT INTO orders VALUES (44, 1, NULL, 5, '2025-05-13 15:44:58.368143', 'arvind', 'katare', '2312312093', 'kamberseci@gmail.com');
INSERT INTO orders VALUES (45, 1, NULL, 1, '2025-05-21 13:35:59.889411', 'arvind', 'katare', '2312312093', 'majdaldin.omran@elev.ga.ntig.se');
INSERT INTO orders VALUES (46, 1, NULL, 1, '2025-05-21 13:35:59.899317', 'arvind', 'katare', '2312312093', 'majdaldin.omran@elev.ga.ntig.se');
INSERT INTO orders VALUES (47, 1, NULL, 3, '2025-05-21 13:35:59.900578', 'arvind', 'katare', '2312312093', 'majdaldin.omran@elev.ga.ntig.se');
INSERT INTO orders VALUES (48, 1, NULL, 2, '2025-05-21 13:35:59.901878', 'arvind', 'katare', '2312312093', 'majdaldin.omran@elev.ga.ntig.se');
INSERT INTO orders VALUES (49, 1, NULL, 1, '2025-05-21 13:35:59.902816', 'arvind', 'katare', '2312312093', 'majdaldin.omran@elev.ga.ntig.se');
INSERT INTO orders VALUES (50, 1, NULL, 4, '2025-05-21 13:35:59.903648', 'arvind', 'katare', '2312312093', 'majdaldin.omran@elev.ga.ntig.se');
INSERT INTO orders VALUES (51, 1, NULL, 5, '2025-05-26 19:35:56.1989', '', '', '', '');
INSERT INTO orders VALUES (52, 1, NULL, 7, '2025-05-26 19:59:34.648464', 'a', 'a', '1123123', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (53, 1, NULL, 7, '2025-05-26 19:59:34.648942', 'a', 'a', '1123123', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (54, 1, NULL, 5, '2025-05-26 20:02:15.797351', 'arvind', 'katare', '762166749', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (55, 1, NULL, 2, '2025-05-26 20:03:03.233417', 'arvind', 'katare', '131231', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (56, 1, NULL, 2, '2025-05-26 20:23:07.963987', '', '', '', 'arvindkatare911@gmail.com');
INSERT INTO orders VALUES (57, 1, NULL, 3, '2025-05-26 20:27:25.997509', 'arvind', 'katare', '2131231', 'arvindkatare911@gmail.com');

INSERT INTO users VALUES (122, 'ts@gmail.com', '$2b$10$ukPdKuBkTPwtUhuJHUQPi.spPWib43s6GPI/f5vFos9Tv1w04iCm2', false);
INSERT INTO users VALUES (123, 't12312s@gmail.com', '$2b$10$rcqbD0gkkwDbVWsLLkpAiOa/NPccwfMzpc8q8IynYHeAxDzU8VVRC', false);
INSERT INTO users VALUES (1, 'trustme@gmail.com', 'hemligt', false);
INSERT INTO users VALUES (3, 'arciasdasjo@gmail.com', '$2b$10$yhei3MQV0fbt51n/ikN1GuMt38NxXRpjR9MgT8Pbb.8ewwAH6AMU2', false);
INSERT INTO users VALUES (125, 't11232312s@gmail.com', '$2b$10$Uw7Lf7Rr3o9.JoN6dUVQH.J9NfzJueE.IuGZuhssUzxYozJQ.Hr2O', false);
INSERT INTO users VALUES (126, 'testte1231231st@gmail.com', '$2b$10$Yj75Wzm0YFggfbK/k3mlcOCFM/pD.8WafmqrzRWzvxaEG2lzVfHLG', false);
INSERT INTO users VALUES (127, 'tes122321321312312tte1st@gmail.com', '$2b$10$kGMc9Ww0Bg3ib8p3uiZpmef99WbLJ2iykIGaUYwfoQBA.JZv0BFbG', false);
INSERT INTO users VALUES (128, 'te11231s123123tte1st@gmail.com', '$2b$10$8lQz8ytx8Pag3xASiv1fQ.3EEwm1F8b/NIqrathhYU7ng2W80A5Oa', false);
INSERT INTO users VALUES (9, 'thisworksornah@gmail.com', '$2b$10$WDpTFFXyBdsjxIKQWOfSEebnqKVFHWFNbCx6C5gWEcRTiL0CBId1.', false);
INSERT INTO users VALUES (129, 'aintnoway@gmail.com', '$2b$10$zUyv/ZFRVgck6hnVUafIsOrMXBEzs9Vry6.TypgZO0jcCMx0qEuVq', false);
INSERT INTO users VALUES (130, 'testts@gmail.com', '$2b$10$9Xpisem5rWhV8kA.weYm3uKqRzBPFDVFjE/FT69U4pwqelEtNuMYm', false);
INSERT INTO users VALUES (12, 'workornah@gmail.com', '$2b$10$VtYSfMYqTMlAC87Jmz0ehuiZKwbu..tCCKcy4EjSl.PpPeD/tM6XS', false);
INSERT INTO users VALUES (13, 'assasdas@gmail.com', '$2b$10$jPqMAjuNTgHPsvWuyAZibuUjhxrkuKCv5T8HCNSh8xvSYTklGC.76', false);
INSERT INTO users VALUES (14, 'arind@gmail.com', '$2b$10$6IVgOcG/dEFT8ZsQ34eiaOB7iSge3.5UDmVMv5GdTA9IkXe8Ot3j2', false);
INSERT INTO users VALUES (15, 'omidamini@gmail.com', '$2b$10$WFJfeP0N5GUmOEU65PTB1.ZhkI/lu9MTgFi6grH4enRkpBbQ.c2tW', false);
INSERT INTO users VALUES (16, 'harissheikh@gmail.com', '$2b$10$hvj1nl33sa7.5m7s0x5H7uKvY/ZNGCl0JexDTj1UM0ByICzxR3z.C', false);
INSERT INTO users VALUES (131, 'testts12@gmail.com', '$2b$10$agp.aKuaC6W8AU44Xj1H3eJi8PwqwCJs40pGkQN4zm7QX.hhGpoF6', false);
INSERT INTO users VALUES (132, 'mediainquiries@whopper.com', '$2b$10$Y404zqcvfal0h0bvMG33q.uLnqBDpaTiODh0WeLHwCCxib3pbRijq', true);
INSERT INTO users VALUES (133, 'real@gmail.com', '$2b$10$dl/YePK39HAGR8yxCNx3weMqDm0UoE2CmSSg43R1EngJyHoeQcfFK', false);
INSERT INTO users VALUES (134, 'press@us.mcd.com', '$2b$10$hUoGEPYZo2EWNgi0pmHXI.LG2nTchot8P.ZW/ecrp3Xbn0SLtrFFu', true);
INSERT INTO users VALUES (135, 'sannegardens@sannegardens.se', '$2b$10$JNwzpCP9mkEEoXw.7tm3be0ZSt.2eFFv3k9lPqsYbyo.8m8hnMfgO', true);
INSERT INTO users VALUES (136, 'HutCares@yum.com', '$2b$10$EGct2jUA0hYHFTVarzCfs.KPAKSspHztc8QDN1r2uusEXo47b0q3.', true);
INSERT INTO users VALUES (137, 'info@max.se', '$2b$10$of/REvaaIIp8SH6qxm7C2O.Lp7Tj8.YK9M4/HyMv4Sr3ibZEBOgQW', true);
INSERT INTO users VALUES (138, 'chabathaifood@thaimat.se', '$2b$10$mKcQbHhJ73EEl4PCA/haa.jmyPS2FFTMZo1Mos6RskSaCBYQQDWEG', true);
INSERT INTO users VALUES (34, '', '$2b$10$AO1KXYIujH5Nn9CvCsrM/OoKaKBCK8gkFmCVvA9yR2WowlWtoVQA.', false);
INSERT INTO users VALUES (142, 'arvindkatare911@gmail.com', '$2b$10$0tlGkQPlzEw8w1WG8YTmNumIVpbSVKSJoHJk.YIxYPMilyshcDJVG', false);
INSERT INTO users VALUES (143, 'omid.amini@elev.ga.ntig.se', '$2b$10$Ajs6vVh/Q6Mqlf02TmDX4evK5VHXGl1glA.an/0QbHU51WuDYqN8a', false);
INSERT INTO users VALUES (42, 'jaykatare911@gmail.com', '$2b$10$ZAXBn9Dizr/TEQYBZ87FZuEki9ImRUCtgD.EFPrK5JWQFuSwQEZn6', false);
INSERT INTO users VALUES (110, 'xdxdxdxd12213@gmail.com', '$2b$10$2tQKzqv/2mDaGdh1EacKEuqXpTTzw64x347UGJBwL0A7RZwYxxugi', false);
INSERT INTO users VALUES (111, 'eat.sekedja@gmail.com', '$2b$10$f9Bz8bvwtONiyPvuvj89ROygUktVGq8JU6SURBNKSsLFwlRI4Zw1m', true);
INSERT INTO users VALUES (115, 'workornawh@gmail.com', '$2b$10$U.ZYR65GQ2btAtCCyoKfNuyIZ79OdZMCabTiLWmZKx.itQMCLgp26', false);
INSERT INTO users VALUES (116, 'testtest@gmail.com', '$2b$10$7UskSMXGUKG0Vzlce1EepepzVxXnC1DqiZWkophpJnR3FE2umm56m', false);
INSERT INTO users VALUES (117, 'testte1st@gmail.com', '$2b$10$b3VLE/G98Hnp149WAM8E8.1GSWf/spFRfeQhacZjEbCnlwptHlPIi', false);
INSERT INTO users VALUES (118, 'tes2123tte1st@gmail.com', '$2b$10$Sj1nA0L3YzGk3aJluPES6eXvwdLYjDEW0394ch6teL8WQ2J6Q43uG', false);
INSERT INTO users VALUES (119, 'test22te1st@gmail.com', '$2b$10$ubFuSGTOfQrz.XF89SfEp.4Wwtx61FncFaqak5v3pf/GrN5g3hCLG', false);
INSERT INTO users VALUES (120, 't2es2t22te1st@gmail.com', '$2b$10$ByMWl.FSvVrfiqUrmOm7Bu.HLvF5Dsk6cwA6lVMdlKHLyFT/kX54S', false);
