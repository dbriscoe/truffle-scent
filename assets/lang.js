// Truffle & Scent language switcher
// Edit Tagalog wording here. English remains in the HTML as the default source.
(function(){
  const STORAGE_KEY = 'truffleScentLanguage';
  const translations = { tl: {
    "Welcome to Truffle&Scent": "Maligayang pagdating sa Truffle&Scent",
    "European gourmet warmth and elegant scent, curated by LEE in the Philippines.": "European gourmet warmth at eleganteng pabango, pinili ni LEE sa Pilipinas.",
    "Enter the boutique": "Pumasok sa boutique",
    "Skip to content": "Lumaktaw sa nilalaman",
    "Menu": "Menu",
    "Home": "Home",
    "Gourmet Pantry": "Gourmet Pantry",
    "Perfumes": "Mga Pabango",
    "Location": "Lokasyon",
    "Play me": "Patugtugin",
    "Pause": "I-pause",
    "Tap again": "Pindutin muli",
    "Contact": "Makipag-ugnayan",
    "European gourmet food · elegant perfume · Philippines": "European gourmet food · eleganteng pabango · Pilipinas",
    "Curated for": "Pinili para sa",
    "beautiful": "magagandang",
    "tables and elegant everyday moments.": "hapag at eleganteng sandali sa araw-araw.",
    "Welcome to Truffle & Scent by LEE — a warm boutique collection of European pantry favourites and graceful fragrance pieces, chosen for memorable dinners, thoughtful gifting and a little everyday indulgence.": "Maligayang pagdating sa Truffle & Scent by LEE — isang mainit at piling koleksiyon ng mga paboritong European pantry at magagandang pabango, pinili para sa di-malilimutang hapunan, maalagang regalo at kaunting luho sa araw-araw.",
    "Shop Gourmet Pantry": "Mamili sa Gourmet Pantry",
    "Explore Perfumes": "Tuklasin ang Mga Pabango",
    "The truffle-shaped glow moves gently with you as you explore.": "Ang munting kislap na hugis truffle ay banayad na gumagalaw habang naglalakbay ka.",
    "Premium European pantry finds": "Premium na European pantry finds",
    "Gift-worthy perfume moments": "Mga pabangong bagay sa regalo",
    "Personal ordering with LEE": "Personal na pag-order kay LEE",
    "Authentic · Curated · Giftable": "Tunay · Pinili · Pang-regalo",
    "For your table": "Para sa iyong hapag",
    "Truffle sauces, oils, pasta, pesto and gourmet pantry favourites": "Truffle sauces, oils, pasta, pesto at mga paboritong gourmet pantry",
    "For gifting": "Para sa regalo",
    "Food and fragrance pieces chosen with warmth and style": "Pagkain at pabangong pinili nang may init at estilo",
    "Direct ordering": "Direktang pag-order",
    "WhatsApp / Viber: +63 956 533 1521": "WhatsApp / Viber: +63 956 533 1521",
    "Choose your experience": "Piliin ang iyong karanasan",
    "From the pantry to the": "Mula pantry hanggang",
    "perfume": "pabango",
    "tray.": "tray.",
    "Whether you are planning dinner, choosing a gift, or looking for a finishing touch before you step out, each side of the collection has its own distinct mood.": "Kung naghahanda ka ng hapunan, pumipili ng regalo, o naghahanap ng huling dampi bago lumabas, bawat bahagi ng koleksiyon ay may sariling pakiramdam.",
    "Cook with warmth, flavour and a little ceremony": "Magluto nang may init, lasa at kaunting seremonya",
    "Bring home truffle sauces, olive oils, pasta, pesto and gourmet pantry favourites that help simple cooking feel generous and memorable.": "Iuwi ang truffle sauces, olive oils, pasta, pesto at mga paboritong gourmet pantry na nagpaparamdam sa simpleng luto na mas sagana at mas di-malilimutan.",
    "Shop gourmet pantry": "Mamili sa gourmet pantry",
    "Discover a softer, more personal luxury": "Tuklasin ang mas banayad at personal na luho",
    "Explore graceful perfume styling for dressing tables, gifts and the private rituals that make getting ready feel special.": "Tuklasin ang eleganteng istilo ng pabango para sa dressing table, regalo at tahimik na ritwal ng paghahanda.",
    "Explore perfumes": "Tuklasin ang mga pabango",
    "Signature moments": "Mga signature moment",
    "Thoughtful,": "Maalaga,",
    "giftable": "pang-regalo",
    "and full of atmosphere.": "at puno ng dating.",
    "Choose a truffle-led dinner, a beautifully prepared table, or a softly elegant perfume moment.": "Pumili ng hapunang may truffle, maayos na hinandang mesa, o banayad at eleganteng sandali ng pabango.",
    "For intimate dinners": "Para sa malalapit na hapunan",
    "Rich pantry ingredients for evenings that deserve a little more than ordinary.": "Masaganang pantry ingredients para sa gabing dapat maging higit pa sa karaniwan.",
    "For elegant gifting": "Para sa eleganteng regalo",
    "Beautiful finds for hosts, birthdays, thank-yous and thoughtful gestures.": "Magagandang pagpipilian para sa host, kaarawan, pasasalamat at maalagang pagbati.",
    "For gatherings at home": "Para sa pagtitipon sa bahay",
    "Create a polished spread with ready-to-pair pantry pieces and flavourful accents.": "Gumawa ng maayos at masarap na spread gamit ang madaling i-pair na pantry pieces at malalasang accent.",
    "Curated by LEE": "Pinili ni LEE",
    "Ask for what you are": "Magtanong para sa iyong",
    "cooking": "lulutuin",
    ", gifting or celebrating.": ", ireregalo o ipagdiriwang.",
    "Every order begins with a simple message. LEE can help you choose what is available, what pairs beautifully together and what will feel right for your dinner, gift or personal treat.": "Bawat order ay nagsisimula sa isang simpleng mensahe. Matutulungan ka ni LEE pumili ng available, bagay pagsamahin at akma sa hapunan, regalo o personal na treat.",
    "Whether it is truffle pasta for two, a hostess gift, a pantry bundle or a perfume enquiry, the service is warm, direct and easy.": "Truffle pasta man para sa dalawa, regalo sa host, pantry bundle o tanong tungkol sa pabango, ang serbisyo ay mainit, direkta at madali.",
    "Based in the Philippines": "Nasa Pilipinas",
    "Metro Manila delivery focus.": "Pokus sa delivery sa Metro Manila.",
    "Truffle & Scent by LEE is based in the Philippines, with regular delivery focus around BGC, Makati and Mandaluyong.": "Ang Truffle & Scent by LEE ay nasa Pilipinas, na may regular na delivery focus sa BGC, Makati at Mandaluyong.",
    "Open larger map": "Buksan ang mas malaking mapa",
    "Regular delivery areas": "Mga regular na delivery area",
    "Metro Manila": "Metro Manila",
    "Message LEE to arrange delivery and confirm current stock. Regular focus areas include BGC, Makati and Mandaluyong.": "Mag-message kay LEE para ayusin ang delivery at kumpirmahin ang kasalukuyang stock. Kabilang sa regular na focus areas ang BGC, Makati at Mandaluyong.",
    "Contact LEE": "Makipag-ugnayan kay LEE",
    "Order directly": "Direktang mag-order",
    "Ready to choose something": "Handa ka na bang pumili ng",
    "Message LEE for current stock, gourmet pairings, perfume availability, gifts and delivery timing.": "Mag-message kay LEE para sa kasalukuyang stock, gourmet pairings, availability ng pabango, regalo at oras ng delivery.",
    "WhatsApp / Viber": "WhatsApp / Viber",
    "Call or text": "Tumawag o mag-text",
    "Email": "Email",
    "Facebook": "Facebook",
    "Truffle&Scent by LEE": "Truffle&Scent by LEE",
    "Truffle & Scent by LEE · Gourmet food and elegant scent in the Philippines.": "Truffle & Scent by LEE · Gourmet food at eleganteng pabango sa Pilipinas.",
    "The gourmet pantry edit": "Ang gourmet pantry edit",
    "Ingredients with a little": "Mga sangkap na may kaunting",
    "ceremony": "seremonya",
    "Truffle sauces, Italian pantry staples, finishing oils and rich little jars for cooking that feels intimate, generous and restaurant-adjacent — without leaving home.": "Truffle sauces, Italian pantry staples, finishing oils at maliliit na garapon para sa lutong parang restaurant — nang hindi umaalis ng bahay.",
    "Start with recipe ideas": "Magsimula sa recipe ideas",
    "Shop the selection": "Mamili sa koleksiyon",
    "Professional serving inspiration": "Inspirasyon sa maayos na paghahain",
    "Begin with the": "Magsimula sa",
    "meal": "pagkain",
    ", then choose the pantry pieces.": ", saka piliin ang pantry pieces.",
    "These customer-friendly ideas show how the products work together. Use the links inside each recipe to jump straight to the matching items.": "Ipinapakita ng mga customer-friendly na ideyang ito kung paano bagay ang mga produkto. Gamitin ang mga link sa bawat recipe para tumalon agad sa kaukulang item.",
    "Dinner idea": "Ideya para sa hapunan",
    "Truffle Fettuccine for Two": "Truffle Fettuccine para sa Dalawa",
    "A polished pasta plate built around glossy ribbons, truffle salsa and a restrained finishing drizzle.": "Isang eleganteng pasta plate na may makintab na ribbons, truffle salsa at mahinahong finishing drizzle.",
    "Cook fettuccine until just tender and reserve a cup of pasta water.": "Lutuin ang fettuccine hanggang lumambot at magtabi ng isang tasa ng pasta water.",
    "Warm Salsa al Tartufo gently with butter or olive oil; loosen with pasta water.": "Painitin nang banayad ang Salsa al Tartufo na may butter o olive oil; paluwagin gamit ang pasta water.",
    "Finish with Parmesan and a few drops of white truffle oil at the table.": "Tapusin sa Parmesan at ilang patak ng white truffle oil sa mesa.",
    "Slow evening plate": "Pang-gabing dahan-dahang putahe",
    "Black Truffle Risotto": "Black Truffle Risotto",
    "Creamy, savoury and comforting; ideal for dinner guests or a quiet meal that still feels special.": "Creamy, savoury at nakaaaliw; bagay sa bisita sa hapunan o tahimik na pagkain na espesyal pa rin ang dating.",
    "Use warm stock and stir patiently until the rice releases its creaminess.": "Gumamit ng mainit na stock at haluin nang may tiyaga hanggang maging creamy ang kanin.",
    "Fold in Salsa al Tartufo near the end rather than at the beginning.": "Ihalo ang Salsa al Tartufo malapit sa dulo, hindi sa simula.",
    "Serve with black truffle oil as a final aromatic accent.": "Ihain na may black truffle oil bilang huling mabangong accent.",
    "Starter or appetiser": "Panimula o appetiser",
    "Truffle Toast & Chilli": "Truffle Toast at Chilli",
    "A crisp, warm and aromatic starter that makes a simple board feel curated.": "Malutong, mainit at mabangong starter na nagpapaganda sa simpleng board.",
    "Toast good bread until crisp at the edges but still tender inside.": "I-toast ang magandang tinapay hanggang malutong ang gilid ngunit malambot pa rin ang loob.",
    "Spread lightly with truffle salsa and add a few truffle slices.": "Pahiran nang manipis ng truffle salsa at lagyan ng ilang truffle slices.",
    "Finish with a tiny pinch of peperoncino for warmth.": "Tapusin sa kaunting kurot ng peperoncino para sa init.",
    "Gift-ready grazing": "Grazing na handang iregalo",
    "Cheese & Truffle Board": "Cheese at Truffle Board",
    "A beautiful low-cook option for hosting, gifting or relaxed weekend entertaining.": "Magandang low-cook option para sa pagho-host, pagreregalo o relaxed weekend entertaining.",
    "Choose two cheeses, warm bread, olives and one sweet or savoury accent.": "Pumili ng dalawang cheese, mainit na tinapay, olives at isang sweet o savoury accent.",
    "Place truffle condiment and truffle slices where guests can see them.": "Ilagay ang truffle condiment at truffle slices sa bahaging madaling makita ng bisita.",
    "Add a small dish of olive oil for dipping and shine.": "Magdagdag ng maliit na lalagyan ng olive oil para sa dipping at kinang.",
    "Detailed kitchen recipes": "Detalyadong kitchen recipes",
    "Cook with confidence, then finish with": "Magluto nang may kumpiyansa, saka tapusin sa",
    "style": "estilo",
    "These fuller recipes are written for customers who want more than a quick idea: ingredient guidance, method, timing and small professional touches that make the finished plate feel considered.": "Ang mas buong recipes na ito ay para sa mga customer na gusto ng higit pa sa mabilis na ideya: gabay sa ingredients, method, timing at maliliit na professional touches para mas pinag-isipan ang dating ng plato.",
    "Serves 2 · 20 minutes": "Para sa 2 · 20 minuto",
    "Silky Truffle Fettuccine": "Silky Truffle Fettuccine",
    "A glossy, restaurant-style pasta using fettuccine, truffle salsa and a restrained final drizzle of white truffle oil.": "Makintab at restaurant-style na pasta gamit ang fettuccine, truffle salsa at mahinahong huling drizzle ng white truffle oil.",
    "Ingredients": "Mga sangkap",
    "180–220g fettuccine": "180–220g fettuccine",
    "2 generous teaspoons Salsa al Tartufo": "2 masaganang kutsarita ng Salsa al Tartufo",
    "1 tablespoon butter or mild olive oil": "1 kutsara ng butter o mild olive oil",
    "2–3 tablespoons reserved pasta water": "2–3 kutsara ng itinabing pasta water",
    "Parmesan, black pepper and a few drops of white truffle oil": "Parmesan, black pepper at ilang patak ng white truffle oil",
    "Method": "Paraan",
    "Cook the fettuccine in well-salted water until just tender. Reserve a mug of pasta water before draining.": "Lutuin ang fettuccine sa maalat na tubig hanggang sakto ang lambot. Magtabi ng isang mug ng pasta water bago salain.",
    "Warm butter or olive oil gently in a pan. Add the truffle salsa and loosen with a spoonful of pasta water.": "Painitin nang banayad ang butter o olive oil sa kawali. Idagdag ang truffle salsa at paluwagin gamit ang isang kutsara ng pasta water.",
    "Toss the pasta through the sauce until glossy, adding a little more pasta water as needed.": "Ihalo ang pasta sa sauce hanggang kumintab, dagdagan ng pasta water kung kailangan.",
    "Plate immediately. Finish with Parmesan, black pepper and only a few drops of white truffle oil at the table.": "I-plato agad. Tapusin sa Parmesan, black pepper at ilang patak lamang ng white truffle oil sa mesa.",
    "LEE’s tip:": "Tip ni LEE:",
    "Keep the heat gentle once the truffle salsa is added. The aroma should rise softly, not cook away.": "Panatilihing banayad ang init kapag nailagay na ang truffle salsa. Dapat dahan-dahang umangat ang aroma, hindi mawala sa luto.",
    "Fettuccine": "Fettuccine",
    "Truffle Salsa": "Truffle Salsa",
    "White Truffle Oil": "White Truffle Oil",
    "Serves 2–3 · 35 minutes": "Para sa 2–3 · 35 minuto",
    "A creamy, slow-stirred dish with deep truffle character and a polished finishing oil aroma.": "Creamy at dahan-dahang hinalong putahe na may malalim na truffle character at eleganteng finishing oil aroma.",
    "180g risotto rice": "180g risotto rice",
    "750ml warm stock, adjusted to taste": "750ml mainit na stock, ayusin ayon sa lasa",
    "1 small onion or shallot, finely chopped": "1 maliit na sibuyas o shallot, pinong tinadtad",
    "2 teaspoons Salsa al Tartufo 5%": "2 kutsarita ng Salsa al Tartufo 5%",
    "Butter, Parmesan and black truffle oil to finish": "Butter, Parmesan at black truffle oil para tapusin",
    "Soften onion gently in butter or olive oil until translucent.": "Palambutin nang banayad ang sibuyas sa butter o olive oil hanggang maging translucent.",
    "Add rice and stir for one minute until the grains look glossy.": "Idagdag ang rice at haluin ng isang minuto hanggang kumintab ang grains.",
    "Add warm stock a ladle at a time, stirring until each ladle is mostly absorbed.": "Magdagdag ng mainit na stock pa-sandok, hinahalo hanggang halos masipsip ang bawat sandok.",
    "When the rice is creamy and just tender, fold in the truffle salsa and Parmesan.": "Kapag creamy at sakto ang lambot ng rice, ihalo ang truffle salsa at Parmesan.",
    "Rest for two minutes, then serve with a few drops of black truffle oil.": "Ipahinga ng dalawang minuto, saka ihain na may ilang patak ng black truffle oil.",
    "Taste the stock before seasoning. A good stock base can already carry salt and savoury depth.": "Tikman muna ang stock bago timplahan. Ang magandang stock base ay maaaring may alat at savoury depth na.",
    "Salsa 5%": "Salsa 5%",
    "Stock Base": "Stock Base",
    "Serves 2–4 · 15 minutes": "Para sa 2–4 · 15 minuto",
    "Truffle Toast with Chilli": "Truffle Toast na may Chilli",
    "A warm starter for guests: crisp bread, truffle depth, visible slices and a tiny lift of chilli.": "Mainit na starter para sa bisita: malutong na tinapay, lalim ng truffle, nakikitang slices at kaunting angat ng chilli.",
    "4 slices good bread or baguette": "4 hiwa ng magandang tinapay o baguette",
    "Salsa al Tartufo 90g": "Salsa al Tartufo 90g",
    "Carpaccio al Tartufo": "Carpaccio al Tartufo",
    "A pinch of peperoncino": "Isang kurot ng peperoncino",
    "Olive oil and a little grated cheese, optional": "Olive oil at kaunting grated cheese, optional",
    "Toast the bread until the edges are crisp but the centre is still pleasant to bite.": "I-toast ang tinapay hanggang malutong ang gilid ngunit kaaya-aya pa ring kagatin ang gitna.",
    "Brush lightly with olive oil, then spread a thin layer of truffle salsa.": "Pahiran nang manipis ng olive oil, saka lagyan ng manipis na layer ng truffle salsa.",
    "Add truffle slices where they can be seen, then finish with a tiny pinch of peperoncino.": "Ilagay ang truffle slices sa bahaging makikita, saka tapusin sa munting kurot ng peperoncino.",
    "Serve while warm, ideally with a small cheese board or drinks.": "Ihain habang mainit, pinakamainam kasama ang maliit na cheese board o inumin.",
    "Treat the chilli as perfume, not fire. A tiny amount makes the truffle feel brighter.": "Ituring ang chilli na parang pabango, hindi apoy. Kaunting dami lang ang nagpapatingkad sa truffle.",
    "Salsa 90g": "Salsa 90g",
    "Truffle Slices": "Truffle Slices",
    "Peperoncino": "Peperoncino",
    "Serves 4 · 15 minutes": "Para sa 4 · 15 minuto",
    "A low-cook, high-impact board for hosting, gifting or a relaxed weekend table.": "Low-cook pero malakas ang dating na board para sa hosting, regalo o relaxed weekend table.",
    "Two cheeses: one soft and one aged": "Dalawang cheese: isang soft at isang aged",
    "White truffle condiment": "White truffle condiment",
    "Warm bread, crackers or crostini": "Mainit na tinapay, crackers o crostini",
    "Olive oil, olives, nuts or honey as accents": "Olive oil, olives, nuts o honey bilang accents",
    "Place cheeses first, leaving space for small jars or ramekins.": "Unahin ang cheeses, mag-iwan ng espasyo para sa maliliit na jars o ramekins.",
    "Spoon the white truffle condiment into a small dish and add truffle slices as a visible garnish.": "Ilagay ang white truffle condiment sa maliit na dish at magdagdag ng truffle slices bilang nakikitang garnish.",
    "Add warm bread and a small bowl of olive oil for dipping.": "Magdagdag ng mainit na tinapay at maliit na bowl ng olive oil para sa dipping.",
    "Finish with olives, nuts or a small sweet accent to balance the savoury truffle notes.": "Tapusin sa olives, nuts o maliit na sweet accent para balansehin ang savoury truffle notes.",
    "Keep the truffle elements visible. They are part of the flavour and the theatre of the board.": "Panatilihing nakikita ang truffle elements. Bahagi sila ng lasa at presentasyon ng board.",
    "White Truffle": "White Truffle",
    "Carpaccio": "Carpaccio",
    "Olive Oil": "Olive Oil",
    "LEE’s pantry notes": "Pantry notes ni LEE",
    "Small habits that make the food taste more": "Maliliit na gawi para mas maging",
    "elegant": "elegante",
    "Finish, don’t fry": "Tapusin, huwag iprito",
    "Truffle oils are best added after cooking. Heat can flatten the aroma, so drizzle at the table or just before serving.": "Pinakamainam idagdag ang truffle oils pagkatapos magluto. Maaaring pahinain ng init ang aroma, kaya i-drizzle sa mesa o bago ihain.",
    "Reserve pasta water": "Magtabi ng pasta water",
    "A spoonful of starchy pasta water helps truffle salsa, pesto and olive oil become glossy rather than heavy.": "Ang isang kutsara ng starchy pasta water ay tumutulong sa truffle salsa, pesto at olive oil na maging makintab, hindi mabigat.",
    "Build gift bundles": "Gumawa ng gift bundles",
    "For an easy gift, pair pasta with truffle salsa and a finishing oil. Add a serving suggestion so the recipient knows exactly how to use it.": "Para sa madaling regalo, pagsamahin ang pasta, truffle salsa at finishing oil. Magdagdag ng serving suggestion para alam ng tatanggap kung paano gamitin.",
    "Keep jars clean": "Panatilihing malinis ang jars",
    "Use a clean spoon, refrigerate opened jars where needed, and wipe lids before returning them to the fridge.": "Gumamit ng malinis na kutsara, i-refrigerate ang bukas na jars kung kailangan, at punasan ang takip bago ibalik sa ref.",
    "Individual selections": "Mga indibidwal na pagpipilian",
    "Every jar, bottle and packet earns its": "Bawat garapon, bote at pakete ay may sariling",
    "place": "puwesto",
    "Tap “View details & tips” for pairings, storage guidance and a practical serving note. Availability may vary, so message LEE for current stock.": "Pindutin ang “Tingnan ang detalye at tips” para sa pairings, storage guidance at praktikal na serving note. Maaaring magbago ang availability, kaya mag-message kay LEE para sa kasalukuyang stock.",
    "Truffle Speciality": "Truffle Speciality",
    "Salsa al Tartufo 180g": "Salsa al Tartufo 180g",
    "A generous jar for pasta nights, steak suppers and truffle-led entertaining. Earthy, savoury and ready to make a simple dish feel special.": "Masaganang garapon para sa pasta nights, steak suppers at truffle-led entertaining. Earthy, savoury at handang gawing espesyal ang simpleng putahe.",
    "View details & tips": "Tingnan ang detalye at tips",
    "A smaller truffle salsa jar for first tastes, thoughtful gifts and date-night cooking.": "Mas maliit na garapon ng truffle salsa para sa unang tikim, maalagang regalo at date-night cooking.",
    "Salsa al Tartufo 5% 180g": "Salsa al Tartufo 5% 180g",
    "A deeper, more aromatic truffle salsa for customers who want the truffle note to lead.": "Mas malalim at mas mabangong truffle salsa para sa mga customer na gustong manguna ang truffle note.",
    "Finishing Oil": "Finishing Oil",
    "Black Truffle Extra Virgin Olive Oil": "Black Truffle Extra Virgin Olive Oil",
    "A fragrant finishing oil for the last golden touch over pasta, eggs, potatoes and warm appetisers.": "Mabangong finishing oil para sa huling gintong dampi sa pasta, itlog, patatas at mainit na appetisers.",
    "White Truffle Extra Virgin Olive Oil": "White Truffle Extra Virgin Olive Oil",
    "Bright, graceful and aromatic; a refined drizzle for creamy dishes, potatoes and warm bread.": "Maliwanag, graceful at aromatic; pinong drizzle para sa creamy dishes, patatas at mainit na tinapay.",
    "Pasta": "Pasta",
    "Fettuccine 500g": "Fettuccine 500g",
    "Silky ribbons that hold truffle salsa, pesto and olive-oil sauces beautifully.": "Silky ribbons na mahusay kumapit sa truffle salsa, pesto at olive-oil sauces.",
    "Squid Ink Spaghetti 500g": "Squid Ink Spaghetti 500g",
    "Dramatic black pasta for seafood plates and restaurant-style presentation at home.": "Dramatic black pasta para sa seafood plates at restaurant-style presentation sa bahay.",
    "Ink": "Ink",
    "Cuttlefish Ink 180g": "Cuttlefish Ink 180g",
    "A sea-dark ingredient for risotto, pasta sauce and dramatic seafood rice.": "Sea-dark ingredient para sa risotto, pasta sauce at dramatic seafood rice.",
    "Pesto": "Pesto",
    "Pesto alla Genovese 180g": "Pesto alla Genovese 180g",
    "Basil-rich comfort for pasta, sandwiches, potatoes, chicken and quick boards.": "Basil-rich comfort para sa pasta, sandwiches, potatoes, chicken at mabilisang boards.",
    "Stock": "Stock",
    "Paella Stock 180g": "Paella Stock 180g",
    "A golden shortcut for rice, seafood dishes, pasta bakes and generous one-pan cooking.": "Gintong shortcut para sa rice, seafood dishes, pasta bakes at masaganang one-pan cooking.",
    "Condiment": "Condiment",
    "Peperoncino Crushed Chilli": "Peperoncino Crushed Chilli",
    "A lively pinch of heat for pasta, toast, eggs, seafood and oil-based sauces.": "Masiglang kurot ng anghang para sa pasta, toast, itlog, seafood at oil-based sauces.",
    "Truffle": "Truffle",
    "Visible truffle slices for finishing cheese, eggs, pasta, steak and elegant appetisers.": "Nakikitang truffle slices para tapusin ang cheese, itlog, pasta, steak at eleganteng appetisers.",
    "White Truffle Condiment": "White Truffle Condiment",
    "A soft truffle accent for warm bread, potatoes, cheese and simple pasta.": "Banayad na truffle accent para sa mainit na tinapay, patatas, cheese at simpleng pasta.",
    "Mediterranean Olive Oil Blend 5L": "Mediterranean Olive Oil Blend 5L",
    "A generous kitchen staple for sautéing, dressing, roasting and everyday cooking.": "Masaganang kitchen staple para sa sautéing, dressing, roasting at araw-araw na pagluluto.",
    "Pomace Olive Oil 5L": "Pomace Olive Oil 5L",
    "A practical cooking oil for busy kitchens, family meals and everyday recipes.": "Praktikal na cooking oil para sa busy kitchens, family meals at araw-araw na recipes.",
    "Olive Oil Blend 5L": "Olive Oil Blend 5L",
    "A large-format pantry companion for dressing, marinating and everyday meals.": "Malaking pantry companion para sa dressing, marinating at araw-araw na pagkain.",
    "From pantry to plate": "Mula pantry hanggang plato",
    "Beautiful serving ideas using the ingredients": "Magagandang serving ideas gamit ang mga sangkap",
    "Use these as inspiration when ordering. LEE can suggest a pairing based on the meal you want to create.": "Gamitin itong inspirasyon sa pag-order. Maaaring magmungkahi si LEE ng pairing batay sa pagkaing gusto mong gawin.",
    "Truffle Fettuccine": "Truffle Fettuccine",
    "Fettuccine, Salsa al Tartufo, white truffle oil, Parmesan and a little pasta water for gloss.": "Fettuccine, Salsa al Tartufo, white truffle oil, Parmesan at kaunting pasta water para sa kinang.",
    "Salsa al Tartufo, black truffle oil, warm stock, butter and a slow final stir.": "Salsa al Tartufo, black truffle oil, mainit na stock, butter at dahan-dahang huling halo.",
    "Warm bread, truffle salsa, carpaccio al tartufo and a tiny touch of peperoncino.": "Mainit na tinapay, truffle salsa, carpaccio al tartufo at munting dampi ng peperoncino.",
    "White truffle condiment, carpaccio slices, aged cheese, olives and good bread.": "White truffle condiment, carpaccio slices, aged cheese, olives at magandang tinapay.",
    "Paella-Inspired Supper": "Paella-Inspired Supper",
    "Paella stock, olive oil blend, seafood or chicken, and rice or pasta.": "Paella stock, olive oil blend, seafood o chicken, at rice o pasta.",
    "Ready to cook beautifully?": "Handa ka na bang magluto nang maganda?",
    "Ask LEE for": "Magtanong kay LEE tungkol sa",
    "availability": "availability",
    "and pairing ideas": "at pairing ideas",
    "Message for current stock, delivery timing, bundles and gift suggestions.": "Mag-message para sa kasalukuyang stock, oras ng delivery, bundles at gift suggestions.",
    "Delivery focus": "Delivery focus",
    "BGC · Makati · Mandaluyong": "BGC · Makati · Mandaluyong",
    "Product details & serving tips": "Detalye ng produkto at serving tips",
    "Best with": "Pinakabagay sa",
    "LEE’s tip": "Tip ni LEE",
    "Storage note": "Storage note",
    "Ask LEE about this item": "Magtanong kay LEE tungkol sa item na ito",
    "Truffle & Scent by LEE · European gourmet warmth in the Philippines.": "Truffle & Scent by LEE · European gourmet warmth sa Pilipinas.",
    "Luxury fragrance": "Luxury fragrance",
    "Unveil your hidden": "Ilantad ang iyong nakatagong",
    "elegance": "elegance",
    "A soft, feminine scent story wrapped in silk, rose-gold light and quiet confidence. Designed for the private moment before the evening begins.": "Isang banayad at feminine scent story na binalot sa silk, rose-gold light at tahimik na confidence. Para sa pribadong sandali bago magsimula ang gabi.",
    "View the collection": "Tingnan ang koleksiyon",
    "Ask availability": "Magtanong ng availability",
    "Scent edit": "Scent edit",
    "A soft, elegant perfume moment": "Isang banayad at eleganteng perfume moment",
    "A graceful perfume presentation for dressing tables, gifts and the final touch before you step out.": "Graceful na perfume presentation para sa dressing tables, gifts at huling dampi bago lumabas.",
    "Signature scent": "Signature scent",
    "Hidden Elegance": "Hidden Elegance",
    "A graceful rose-gold presentation for evenings, gifting and soft daily ritual. Think polished skin, warm silk and a trace that lingers close.": "Graceful na rose-gold presentation para sa gabi, regalo at banayad na daily ritual. Isipin ang polished skin, warm silk at halimuyak na nananatiling malapit.",
    "Gift presentation": "Gift presentation",
    "LEE’s Fragrance Moment": "Fragrance Moment ni LEE",
    "Elegant enough for a vanity, thoughtful enough for a gift. A scent-led keepsake for birthdays, thank-you gestures and personal indulgence.": "Sapat ang elegance para sa vanity, sapat ang pag-aalaga para sa regalo. Scent-led keepsake para sa kaarawan, pasasalamat at personal na indulgence.",
    "Message LEE": "Mag-message kay LEE",
    "The ritual": "Ang ritwal",
    "Wear it like the last": "Isuot ito na parang huling",
    "detail": "detalye",
    "Perfume is not only an accessory. It is the soft punctuation at the end of dressing: a private signature, noticed only when someone comes close.": "Ang pabango ay hindi lang accessory. Ito ang banayad na tuldok sa dulo ng paghahanda: isang pribadong signature na napapansin lamang kapag may lumapit.",
    "After the shower": "Pagkatapos maligo",
    "Apply to warm skin so the scent settles softly rather than arriving too sharply.": "Ilapat sa mainit-init na balat para banayad na lumapat ang amoy, hindi biglang matalim.",
    "Pulse points": "Pulse points",
    "Wrists, neck and behind the ears create a gentle trail without overwhelming the room.": "Ang pulso, leeg at likod ng tainga ay lumilikha ng banayad na trail nang hindi napupuno ang silid.",
    "Silk & evening light": "Silk at evening light",
    "Let the bottle live somewhere beautiful: a vanity tray, a dressing table, a small ritual corner.": "Ilagay ang bote sa magandang lugar: vanity tray, dressing table o maliit na ritual corner.",
    "Soft movement": "Banayad na galaw",
    "Soft movement, graceful mood": "Banayad na galaw, graceful na mood",
    "Silk waves, soft glints and gentle floating light create a calm, feminine atmosphere around the perfume.": "Silk waves, soft glints at banayad na lumulutang na ilaw ang lumilikha ng payapa at feminine atmosphere sa paligid ng pabango.",
    "Silk drift": "Silk drift",
    "A soft cloth-like loop that feels feminine, warm and tactile.": "Banayad na cloth-like loop na feminine, mainit at tactile ang pakiramdam.",
    "Crystal glint": "Crystal glint",
    "A restrained gleam that suggests glass, cap and vanity light.": "Pinigilang kislap na nagpapahiwatig ng glass, cap at vanity light.",
    "Rose aura": "Rose aura",
    "Delicate light blooms that move like fragrance in still air.": "Pinong light blooms na gumagalaw na parang halimuyak sa tahimik na hangin.",
    "Availability by message": "Availability sa message",
    "Ask LEE about today’s perfume availability": "Magtanong kay LEE tungkol sa perfume availability ngayon",
    "Message LEE for perfume availability, gift ideas and local delivery guidance.": "Mag-message kay LEE para sa perfume availability, gift ideas at local delivery guidance.",
    "Philippines · Manila area": "Pilipinas · Manila area",
    "Truffle & Scent by LEE · Elegant scent and European gourmet warmth.": "Truffle & Scent by LEE · Eleganteng pabango at European gourmet warmth.",
    "Order": "Order",
    "Contact Truffle & Scent by LEE": "Makipag-ugnayan sa Truffle & Scent by LEE",
    "Let’s choose something": "Pumili tayo ng isang bagay na",
    "Message LEE for current stock, gourmet pairing ideas, perfume availability, gift suggestions and delivery guidance around Metro Manila.": "Mag-message kay LEE para sa kasalukuyang stock, gourmet pairing ideas, perfume availability, gift suggestions at delivery guidance sa Metro Manila.",
    "Email LEE": "Email kay LEE",
    "Curated in the Philippines": "Pinili sa Pilipinas",
    "Order and enquiry details": "Detalye ng order at enquiry",
    "Warm": "Mainit",
    ", direct service by message.": ", direktang serbisyo sa message.",
    "Because availability can change, the best way to order is to message LEE directly before confirming delivery.": "Dahil maaaring magbago ang availability, pinakamainam na mag-message muna kay LEE bago kumpirmahin ang delivery.",
    "Start a message": "Magsimula ng message",
    "Call now": "Tumawag ngayon",
    "Send an email": "Magpadala ng email",
    "Visit Facebook": "Bisitahin ang Facebook",
    "Opening times": "Oras ng pagtanggap",
    "Orders by": "Orders sa",
    "message": "message",
    "Send enquiries anytime. LEE will reply as soon as possible with current availability, pricing, bundles and delivery guidance.": "Magpadala ng enquiry anumang oras. Sasagot si LEE sa lalong madaling panahon tungkol sa current availability, pricing, bundles at delivery guidance.",
    "BGC ·": "BGC ·",
    "Makati": "Makati",
    "· Mandaluyong": "· Mandaluyong",
    "Metro Manila delivery is arranged by message. Please confirm timing before placing your order.": "Inaayos ang Metro Manila delivery sa message. Pakikumpirma ang timing bago mag-order.",
    "Best for": "Pinakabagay para sa",
    "Dinners ·": "Hapunan ·",
    "Gifts": "Regalo",
    "· Personal treats": "· Personal treats",
    "Ask for pantry pairings, perfume availability, gift-ready choices and prepared-meal inspiration.": "Magtanong tungkol sa pantry pairings, perfume availability, gift-ready choices at prepared-meal inspiration.",
    "Truffle & Scent by LEE · Contact, orders and delivery guidance.": "Truffle & Scent by LEE · Contact, orders at delivery guidance.",
    "Message for current price": "Mag-message para sa kasalukuyang presyo",
    "Check availability": "Kumpirmahin ang availability",
    "Gift options available": "May available na gift options",
    "Available now": "Available ngayon",
    "Limited stock": "Limitadong stock",
    "Pre-order only": "Pre-order lamang",
    "Product details": "Detalye ng produkto",
    "Message LEE for pairing guidance.": "Mag-message kay LEE para sa pairing guidance.",
    "Use thoughtfully and taste as you go.": "Gamitin nang maingat at tikman habang dinadagdagan.",
    "Check pack guidance and store carefully.": "Tingnan ang pack guidance at itago nang maayos.",
    "A regular delivery focus for gourmet pantry orders, gifts and dinner-ready selections.": "Regular na delivery focus para sa gourmet pantry orders, gifts at dinner-ready selections.",
    "Ideal for office gifts, dinner ingredients and personal gourmet orders.": "Bagay para sa office gifts, dinner ingredients at personal gourmet orders.",
    "A regular delivery focus area. Message LEE for timing, availability and order guidance.": "Regular na delivery focus area. Mag-message kay LEE para sa timing, availability at order guidance.",
    "A rich truffle salsa designed for creamy pasta, risotto, crostini, steak, eggs and warm mushroom dishes. It gives depth quickly, so it is ideal when you want a polished result without building a sauce from scratch.": "Masaganang truffle salsa para sa creamy pasta, risotto, crostini, steak, itlog at mainit na mushroom dishes. Mabilis itong magbigay ng lalim, kaya bagay kapag gusto mo ng polished result nang hindi gumagawa ng sauce mula simula.",
    "Fettuccine, risotto, toast, steak, scrambled eggs, mushrooms, Parmesan and soft cheeses.": "Fettuccine, risotto, toast, steak, scrambled eggs, mushrooms, Parmesan at soft cheeses.",
    "Warm it gently with butter, olive oil or cream; avoid boiling hard, as truffle aromatics are best treated softly. Add a spoon of pasta water to create a glossy sauce.": "Painitin nang banayad kasama ang butter, olive oil o cream; iwasang pakuluin nang malakas dahil mas bagay sa truffle aromatics ang mahinahong init. Magdagdag ng isang kutsara ng pasta water para sa makintab na sauce.",
    "Store sealed in a cool, dry cupboard. Once opened, refrigerate, use a clean spoon and keep the rim of the jar tidy.": "Itago nang sarado sa malamig at tuyong aparador. Kapag nabuksan, ilagay sa ref, gumamit ng malinis na kutsara at panatilihing malinis ang rim ng garapon.",
    "A compact jar of truffle salsa for customers who want to try the flavour, create a small gift bundle or prepare one elegant dinner for two.": "Compact na garapon ng truffle salsa para sa gustong tumikim, gumawa ng maliit na gift bundle o maghanda ng eleganteng hapunan para sa dalawa.",
    "Crostini, fettuccine, omelette, mushrooms, roast potatoes, warm bread and cheese boards.": "Crostini, fettuccine, omelette, mushrooms, roast potatoes, mainit na tinapay at cheese boards.",
    "For a quick starter, spread lightly over toasted bread and finish with shaved cheese or truffle slices.": "Para sa mabilis na starter, pahiran nang manipis sa toasted bread at tapusin sa shaved cheese o truffle slices.",
    "Keep sealed before opening; refrigerate after opening and use a clean spoon each time.": "Panatilihing sarado bago buksan; i-refrigerate pagkatapos buksan at gumamit ng malinis na kutsara bawat gamit.",
    "A bolder truffle salsa with a more pronounced character, suited to dishes where truffle should be the centre of the plate.": "Mas matapang na truffle salsa na may mas malinaw na karakter, bagay sa mga putaheng dapat nasa sentro ang truffle.",
    "Risotto, mushroom cream sauces, truffle butter, grilled steak, baked potatoes and rich pasta.": "Risotto, mushroom cream sauces, truffle butter, grilled steak, baked potatoes at rich pasta.",
    "Start with less than you think; you can always add more after tasting. Fold it in at the end so the aroma stays lifted.": "Magsimula sa mas kaunti kaysa sa iniisip mo; puwede pang dagdagan pagkatapos tikman. Ihalo sa dulo para manatiling angat ang aroma.",
    "Store unopened in a cool, dry place. Refrigerate after opening and finish within the recommended period on the label.": "Itago nang hindi pa bukas sa malamig at tuyong lugar. I-refrigerate pagkatapos buksan at ubusin sa recommended period sa label.",
    "An aromatic oil for finishing rather than frying. It gives immediate truffle character to simple dishes with only a few drops.": "Aromatic oil para sa finishing, hindi frying. Kaunting patak lang ay nagbibigay agad ng truffle character sa simpleng dishes.",
    "Fries, eggs, mashed potatoes, creamy pasta, risotto, pizza, mushrooms and soups.": "Fries, itlog, mashed potatoes, creamy pasta, risotto, pizza, mushrooms at soups.",
    "Use at the table or right before serving. Heat can flatten the aroma, so drizzle after cooking rather than cooking with it.": "Gamitin sa mesa o bago ihain. Maaaring pahinain ng init ang aroma, kaya i-drizzle pagkatapos magluto kaysa ipangluto.",
    "Keep tightly closed away from direct sunlight and heat. Use sparingly and taste as you go.": "Panatilihing mahigpit ang takip, malayo sa araw at init. Gamitin nang kaunti at tikman habang dinadagdagan.",
    "A lighter, elegant truffle oil that works beautifully when the dish needs polish without heaviness.": "Mas magaan at eleganteng truffle oil na bagay kapag kailangan ng putahe ng polish nang hindi bumibigat.",
    "Creamy pasta, mashed potatoes, mushroom soup, burrata, eggs, risotto and warm focaccia.": "Creamy pasta, mashed potatoes, mushroom soup, burrata, itlog, risotto at mainit na focaccia.",
    "A very light drizzle is enough. Pair with mild dishes so the fragrance stays clean and noticeable.": "Napakagaan na drizzle ay sapat na. Ipares sa mild dishes para manatiling malinis at kapansin-pansin ang fragrance.",
    "Keep sealed, cool and away from sunlight. Wipe the bottle after use to keep gifting presentation neat.": "Panatilihing sarado, malamig at malayo sa araw. Punasan ang bote pagkatapos gamitin para malinis tingnan kung pang-regalo.",
    "A classic ribbon pasta with enough surface area to carry creamy sauces, truffle salsa and glossy olive-oil finishes.": "Classic ribbon pasta na may sapat na surface area para kumapit ang creamy sauces, truffle salsa at makintab na olive-oil finishes.",
    "Salsa al Tartufo, pesto, white truffle oil, Parmesan, cream sauces, mushrooms and seafood.": "Salsa al Tartufo, pesto, white truffle oil, Parmesan, cream sauces, mushrooms at seafood.",
    "Salt the water well and reserve a cup of pasta water. That starchy water helps sauces cling without becoming heavy.": "Asinan nang mabuti ang tubig at magtabi ng isang tasa ng pasta water. Ang starchy water na iyon ay tumutulong kumapit ang sauces nang hindi bumibigat.",
    "Keep dry pasta sealed in a cool cupboard away from moisture.": "Panatilihing sarado ang dry pasta sa malamig na aparador, malayo sa moisture.",
    "A visually striking pasta that adds immediate theatre to seafood and Mediterranean-inspired dishes.": "Pasta na kapansin-pansin sa itsura at agad nagbibigay ng drama sa seafood at Mediterranean-inspired dishes.",
    "Seafood, garlic, olive oil, chilli, lemon zest, parsley, cuttlefish ink sauce and white wine-style flavours.": "Seafood, bawang, olive oil, chilli, lemon zest, parsley, cuttlefish ink sauce at white wine-style flavours.",
    "Keep the sauce simple so the colour remains dramatic. A gloss of olive oil and seafood is often enough.": "Panatilihing simple ang sauce para manatiling dramatic ang kulay. Kadalasan sapat na ang kinang ng olive oil at seafood.",
    "Store sealed and dry. Once cooked, serve promptly for best texture and appearance.": "Itago nang sarado at tuyo. Kapag naluto na, ihain agad para sa pinakamahusay na texture at itsura.",
    "A concentrated ink for adding savoury marine depth and striking colour to rice, pasta and seafood sauces.": "Concentrated ink para magdagdag ng savoury marine depth at matinding kulay sa rice, pasta at seafood sauces.",
    "Seafood risotto, squid ink pasta, paella-style rice, garlic, olive oil, prawns and calamari.": "Seafood risotto, squid ink pasta, paella-style rice, bawang, olive oil, prawns at calamari.",
    "Use a small amount first; colour and flavour are concentrated. Balance with olive oil, garlic and a little acidity.": "Gumamit muna ng kaunti; concentrated ang kulay at lasa. Balansehin sa olive oil, bawang at kaunting acidity.",
    "Refrigerate after opening and use a clean spoon. Follow the jar label for best-before guidance.": "I-refrigerate pagkatapos buksan at gumamit ng malinis na kutsara. Sundin ang jar label para sa best-before guidance.",
    "A classic green pesto that brings freshness and savoury depth to fast meals and grazing plates.": "Classic green pesto na nagdadala ng freshness at savoury depth sa mabilisang meals at grazing plates.",
    "Pasta, roast chicken, potatoes, sandwiches, bruschetta, eggs, salads and grilled vegetables.": "Pasta, roast chicken, potatoes, sandwiches, bruschetta, itlog, salads at grilled vegetables.",
    "Fold pesto through warm pasta off the heat. Too much direct heat can dull the basil character.": "Ihalo ang pesto sa warm pasta nang wala na sa apoy. Sobrang direct heat ay maaaring magpahina sa basil character.",
    "Refrigerate after opening. Smooth the surface and add a thin film of olive oil to help keep it fresh.": "I-refrigerate pagkatapos buksan. Pantayin ang surface at lagyan ng manipis na layer ng olive oil para makatulong manatiling fresh.",
    "A flavourful stock base for customers who want depth in rice dishes, seafood pans and hearty pasta suppers.": "Malasang stock base para sa mga customer na gusto ng lalim sa rice dishes, seafood pans at hearty pasta suppers.",
    "Rice, seafood, chicken, olive oil blend, peppers, garlic, pasta bakes and one-pan meals.": "Rice, seafood, chicken, olive oil blend, peppers, bawang, pasta bakes at one-pan meals.",
    "Taste before adding extra salt. Stocks can already carry seasoning, so build flavour gradually.": "Tikman bago magdagdag ng asin. May seasoning na ang stocks minsan, kaya unti-unting buuin ang lasa.",
    "Store unopened in a cool cupboard. Refrigerate after opening and close tightly.": "Itago nang hindi pa bukas sa malamig na aparador. I-refrigerate pagkatapos buksan at isara nang mahigpit.",
    "A compact chilli condiment that adds warmth, lift and sparkle without needing a complicated sauce.": "Compact chilli condiment na nagdaragdag ng init, lift at sigla nang hindi kailangan ng komplikadong sauce.",
    "Tomato sauces, garlic pasta, bruschetta, eggs, seafood, pizza, olive oil and truffle toast.": "Tomato sauces, garlic pasta, bruschetta, itlog, seafood, pizza, olive oil at truffle toast.",
    "Add in tiny amounts and taste. It is easier to build heat than to soften it afterwards.": "Magdagdag nang paunti-unti at tikman. Mas madaling dagdagan ang anghang kaysa bawasan pagkatapos.",
    "Keep dry and tightly closed. Avoid using a damp spoon.": "Panatilihing tuyo at mahigpit ang takip. Iwasang gumamit ng basang kutsara.",
    "Thin truffle slices that bring visual appeal as well as flavour. Best used as a final garnish where they can be seen.": "Maninipis na truffle slices na nagbibigay ng visual appeal at lasa. Pinakamainam bilang final garnish sa bahaging makikita.",
    "Cheese boards, crostini, warm pasta, eggs, risotto, steak and soft cheeses.": "Cheese boards, crostini, warm pasta, itlog, risotto, steak at soft cheeses.",
    "Place slices at the end rather than hiding them in a sauce. They are part of the presentation.": "Ilagay ang slices sa dulo sa halip na itago sa sauce. Bahagi sila ng presentasyon.",
    "Refrigerate after opening and handle gently with a clean spoon or small fork.": "I-refrigerate pagkatapos buksan at hawakan nang maingat gamit ang malinis na kutsara o maliit na tinidor.",
    "A delicate condiment for customers who want truffle fragrance in a gentle, versatile form.": "Pinong condiment para sa mga customer na gusto ng truffle fragrance sa banayad at versatile na anyo.",
    "Warm bread, cheese, potatoes, simple pasta, eggs, crostini and grazing boards.": "Mainit na tinapay, cheese, patatas, simpleng pasta, itlog, crostini at grazing boards.",
    "Use restraint. This style works best as a soft accent rather than a heavy spread.": "Gamitin nang may pagpigil. Pinakamaganda ito bilang soft accent kaysa mabigat na spread.",
    "Keep sealed and cool before opening. Refrigerate after opening and use a clean utensil.": "Panatilihing sarado at malamig bago buksan. I-refrigerate pagkatapos buksan at gumamit ng malinis na utensil.",
    "A large-format olive oil blend for homes that cook often and want a practical Mediterranean pantry base.": "Large-format olive oil blend para sa mga bahay na madalas magluto at gusto ng praktikal na Mediterranean pantry base.",
    "Roasted vegetables, dressings, marinades, pasta, bread, chicken, fish and everyday sautéing.": "Roasted vegetables, dressings, marinades, pasta, tinapay, chicken, fish at araw-araw na sautéing.",
    "Use this for cooking and save truffle oils for finishing. That gives both practicality and luxury in the same pantry.": "Gamitin ito sa pagluluto at itabi ang truffle oils para sa finishing. Nagbibigay ito ng practicality at luxury sa parehong pantry.",
    "Store away from heat and sunlight. Close the cap well after each use.": "Itago malayo sa init at araw. Isara nang mabuti ang takip pagkatapos gamitin.",
    "A large-format option for cooking days when you need a stable, practical oil in the kitchen.": "Large-format option para sa mga araw na kailangan mo ng stable at praktikal na oil sa kusina.",
    "Frying, sautéing, roasting, marinades, family meals and batch cooking.": "Frying, sautéing, roasting, marinades, family meals at batch cooking.",
    "Use for everyday heat-based cooking, then finish special dishes with a little extra virgin or truffle oil.": "Gamitin para sa araw-araw na heat-based cooking, saka tapusin ang special dishes sa kaunting extra virgin o truffle oil.",
    "Keep in a cool, dry place away from direct light. Wipe the container after pouring.": "Itago sa malamig at tuyong lugar, malayo sa direktang ilaw. Punasan ang container pagkatapos magbuhos.",
    "A generous olive oil blend for customers who cook frequently and want a dependable kitchen pour.": "Masaganang olive oil blend para sa mga customer na madalas magluto at gusto ng dependable kitchen pour.",
    "Dressings, marinades, pasta, roasted vegetables, bread dips, grilled chicken and seafood.": "Dressings, marinades, pasta, roasted vegetables, bread dips, grilled chicken at seafood.",
    "Create a quick house dressing with olive oil, a little acidity, salt, pepper and a spoon of pesto.": "Gumawa ng mabilis na house dressing gamit ang olive oil, kaunting acidity, asin, paminta at isang kutsara ng pesto.",
    "Keep sealed, cool and away from sunlight to preserve quality.": "Panatilihing sarado, malamig at malayo sa araw para mapanatili ang kalidad."
} };
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const translatableAttrs = ['alt','title','aria-label','data-title','data-copy','data-kicker','data-detail','data-description','data-note','data-best','data-pair','data-pairings','data-tip','data-storage'];

  function getStoredLanguage(){
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch(e) { return 'en'; }
  }

  function setStoredLanguage(lang){
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) { }
  }

  function normalise(value){
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function translateText(value, lang){
    const current = lang || getStoredLanguage();
    if(current === 'en') return value;
    const key = normalise(value);
    return translations[current]?.[key] || value;
  }

  function preserveWhitespace(original, translated){
    const start = String(original).match(/^\s*/)[0];
    const end = String(original).match(/\s*$/)[0];
    return start + translated + end;
  }

  function shouldSkipNode(node){
    const parent = node.parentElement;
    return !parent || parent.closest('script, style, noscript, svg, canvas, audio, iframe');
  }

  function applyLanguage(lang){
    const current = lang || getStoredLanguage();
    document.documentElement.lang = current === 'tl' ? 'tl' : 'en';
    document.body?.classList.toggle('is-tagalog', current === 'tl');

    const walker = document.createTreeWalker(document.body || document.documentElement, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        if(shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
        return normalise(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if(!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      node.nodeValue = current === 'en' ? source : preserveWhitespace(source, translateText(source, current));
    });

    document.querySelectorAll('*').forEach(el => {
      let store = originalAttrs.get(el);
      if(!store) { store = {}; originalAttrs.set(el, store); }
      translatableAttrs.forEach(attr => {
        if(!el.hasAttribute(attr)) return;
        if(!(attr in store)) store[attr] = el.getAttribute(attr);
        const source = store[attr];
        el.setAttribute(attr, current === 'en' ? source : translateText(source, current));
      });
    });

    document.querySelectorAll('[data-lang-toggle]').forEach(button => {
      const isTl = current === 'tl';
      button.setAttribute('aria-pressed', String(isTl));
      button.setAttribute('aria-label', isTl ? 'Lumipat sa English' : 'Switch to Tagalog');
      const code = button.querySelector('[data-lang-code]');
      const name = button.querySelector('[data-lang-name]');
      if(code) code.textContent = isTl ? 'TL' : 'EN';
      if(name) name.textContent = isTl ? 'English' : 'Tagalog';
    });
  }

  function toggleLanguage(){
    const next = getStoredLanguage() === 'tl' ? 'en' : 'tl';
    setStoredLanguage(next);
    applyLanguage(next);
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-lang-toggle]');
    if(!button) return;
    toggleLanguage();
  });

  window.TRUFFLE_SCENT_I18N = { applyLanguage, translateText, getLanguage: getStoredLanguage };
  window.TS_TRANSLATE = translateText;

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyLanguage(getStoredLanguage()));
  } else {
    applyLanguage(getStoredLanguage());
  }
})();
