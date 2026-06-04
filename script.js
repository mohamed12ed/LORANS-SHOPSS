(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

  const I18N = {
    ar: {
      "nav.games": "الألعاب",
      "nav.payment": "الدفع",
      "nav.how": "كيف يعمل",
      "nav.contact": "تواصل",
      "header.clientSpace": "مساحة الزبون",
      "hero.pill": "حسابات ألعاب · تسليم فوري",
      "hero.titleA": "اختر",
      "hero.titleB": "عرضك",
      "hero.sub": "أسعار واضحة، ميزات مذكورة لكل لعبة، ودفع يناسبك في الجزائر.",
      "promo.kicker": "عرض",
      "promo.timer": "متاح لمدة 10 أيام",
      "promo.title": "Forza Horizon 6 Premium Edition + وصول مبكر",
      "promo.ctaPrimary": "شوف العرض",
      "promo.ctaSecondary": "اتصل بنا",
      "common.startingFrom": "يبدأ من",
      "common.perAccount": "/ حساب",
      "common.seeMore": "عرض المزيد",
      "common.orderNow": "اطلب الآن",
      "common.inStock": "متوفر",
      "common.outOfStock": "غير متوفر",
      "fc.badge": "الأكثر طلباً",
      "rdr.f1": "تسليم خلال دقائق",
      "rdr.f2": "ضمان استبدال",
      "rdr.f3": "دعم بعد البيع",
      "rdr.title": "Red Dead Redemption 2 - PC",
      "rdr.desc": "حساب كامل مع المحتوى الأساسي، جاهز للعب فور التسليم.",
      "fc.f1": "محتوى Ultimate Team",
      "fc.f2": "تحديثات الموسم",
      "fc.f3": "تسليم فوري",
      "fc.f4": "ضمان استبدال",
      "fc.title": "EA SPORTS FC 26 - PC",
      "fc.desc": "حساب جاهز مع محتوى وبونص — PC (Steam / EA App).",
      "multi.f1": "تسعيرة حسب الطلب",
      "multi.f2": "فاتورة واضحة",
      "multi.f3": "دعم مخصص",
      "multi.title": "حسابات متعددة",
      "multi.desc": "للمجموعات والمحتوى: طلب أكثر من حساب بخصم منطقي.",
      "multi.unit": "عرض",
      "multi.perQty": "/ حسب الكمية",
      "gta.title": "Grand Theft Auto V - PC",
      "gta.desc": "GTA V مع أونلاين ورصيد مرتفع للبداية القوية.",
      "gta.f1": "GTA Online جاهز",
      "gta.f2": "تسليم سريع",
      "gta.f3": "ضمان استبدال",
      "away.title": "A Way Out",
      "away.desc": "تجربة تعاونية لشخصين — مثالية للعب مع صاحبك.",
      "away.f1": "وضع لاعبين",
      "away.f2": "قصة كاملة",
      "away.f3": "تسليم فوري",
      "arc.title": "ARC Raiders",
      "arc.desc": "استخراج جماعي على PC — حساب جاهز للدخول السريع.",
      "arc.f1": "أونلاين جاهز",
      "arc.f2": "تسليم سريع",
      "arc.f3": "ضمان استبدال",
      "requiem.title": "Resident Evil Requiem — Kit Deluxe — PC",
      "requiem.desc": "حساب PC مع حزمة الديلوكس — محتوى إضافي وجاهز للعب.",
      "requiem.f1": "محتوى Kit Deluxe",
      "requiem.f2": "تسليم سريع",
      "requiem.f3": "ضمان استبدال",
      "other.title": "لعبة غير مدرجة؟",
      "other.desc": "راسلنا بلعبة تبحث عنها — نجيبك بتوفر وسعر.",
      "other.perReq": "/ حسب الطلب",
      "other.f1": "استفسار مجاني",
      "other.f2": "واتساب / تيليغرام",
      "other.f3": "رد في أقرب وقت",
      "pay.tag": "طرق الدفع",
      "pay.title": "ادفع بطريقتك",
      "pay.baridi": "دفع مباشر عبر بريدي موب — آمن وسريع",
      "pay.ccp": "تحويل بريدي عبر CCP — متاح لكل الجزائر",
      "pay.paypal": "دفع عالمي آمن عبر PayPal",
      "pay.usdt": "دفع رقمي عبر USDT — مجهول وسريع",
      "how.tag": "العملية",
      "how.title": "كيف تشتري؟",
      "how.s1t": "اختر حسابك",
      "how.s1d": "تصفح الكتالوج واختر اللعبة اللي تبغيها",
      "how.s2t": "تواصل معنا",
      "how.s2d": "راسلنا على واتساب أو تيليغرام للتأكيد",
      "how.s3t": "ادفع بأمان",
      "how.s3d": "اختر طريقة الدفع المناسبة ليك",
      "how.s4t": "استلم فوراً",
      "how.s4d": "نبعثلك بيانات الحساب في دقائق ✅",
      "discord.titleA": "انضم إلى",
      "discord.titleB": "Discord",
      "discord.sub": "تواصل معنا، اطلب بسرعة، وخليك دايمًا على اطلاع بالجديد.",
      "footer.desc": "متجر حسابات ألعاب موثوق في الجزائر. أسعار مزيانة، تسليم فوري، ضمان استبدال.",
      "footer.games": "الألعاب",
      "footer.montageTitle": "معرض الألعاب",
      "footer.store": "المتجر",
      "footer.refund": "سياسة الاسترجاع",
      "footer.warranty": "الضمان",
      "footer.faq": "الأسئلة الشائعة",
      "footer.contact": "تواصل معنا",
      "footer.chat": "واتساب / تيليغرام",
      "footer.country": "الجزائر",
      "modal.store": "المنصة",
      "modal.close": "إغلاق",
      "platform.other": "حسابات أخرى",
      "platform.home": "HOME",
      "home.titleA": "اشتري",
      "home.titleAccent": "حساب ألعابك",
      "home.titleB": "بثقة في الجزائر",
      "home.sub": "أسعار واضحة، ميزات مذكورة لكل لعبة، وطرق دفع تناسبك في الجزائر.",
      "home.cta": "تصفح العروض",
      "home.ddosLink": "طرق الدفع",
      "home.feat1Title": "تسليم فوري",
      "home.feat1Desc": "بيانات الدخول توصلك خلال دقائق بعد الدفع.",
      "home.feat2Title": "ضمان استبدال",
      "home.feat2Desc": "راحة بال إذا صار أي مشكل مع الحساب.",
      "home.feat3Title": "أسعار واضحة",
      "home.feat3Desc": "بالدينار، يورو أو دولار — بدون مفاجآت.",
      "home.feat4Title": "دفع مرن",
      "home.feat4Desc": "بريدي موب، CCP، PayPal، USDT وغيرها.",
      "catalog.searchPlaceholder": "ابحث عن لعبة…",
      "catalog.searchLabel": "بحث في الكتالوج",
      "catalog.searchOpen": "بحث في الكتالوج",
      "catalog.searchBack": "رجوع إلى المنصات",
      "catalog.categoryPc": "PC",
      "catalog.categoryXbox": "Xbox",
      "catalog.categoryExtra": "حسابات وطلبات أخرى",
      "xgpu1.title": "Game Pass Ultimate — شهر واحد — حساب Microsoft رئيسي رسمي",
      "xgpu2.title": "Game Pass Ultimate — 3 أشهر — حساب Microsoft رئيسي رسمي",
      "xgpu3.title": "Game Pass Ultimate — 4 أشهر — حساب Microsoft رئيسي رسمي",
      "xgpu4.title": "Game Pass Ultimate — 6 أشهر — حساب Microsoft رئيسي رسمي",
      "xgpu5.title": "Game Pass Ultimate — 8 أشهر — حساب Microsoft رئيسي رسمي",
      "xgpu.desc": "اشتراك رسمي على الحساب الرئيسي Microsoft — تفعيل سريع وآمن.",
      "xgpu.f1": "حساب Microsoft رئيسي",
      "xgpu.f2": "تسليم سريع",
      "xgpu.f3": "ضمان استبدال",
      "catalog.currencyLabel": "العملة",
      "catalog.currencyAria": "اختر العملة لعرض الأسعار",
      "splash.welcome": "مرحبًا بك في LORANS SHOP",
      "cart.openAria": "فتح سلة التسوق",
      "cart.title": "السلة",
      "cart.empty": "لا توجد منتجات في السلة بعد.",
      "cart.subtotal": "المجموع",
      "cart.checkout": "إتمام الدفع",
      "cart.clear": "إفراغ السلة",
      "cart.backAria": "العودة إلى السلة",
      "checkout.title": "الدفع",
      "checkout.choosePayment": "اختر وسيلة الدفع المناسبة",
      "checkout.noteLabel": "ملاحظة لطلبك (اختياري)",
      "checkout.notePlaceholder": "مثال: اسمك على واتساب أو تيليغرام",
      "checkout.confirm": "تأكيد الطلب",
      "checkout.successTitle": "تم تسجيل الطلب",
      "checkout.orderRef": "مرجع الطلب",
      "checkout.successDesc": "احفظ المرجع وتواصل معنا لإتمام الدفع واستلام الحساب.",
      "checkout.done": "حسناً",
      "checkout.notifyFail": "تعذّر إرسال الإشعار إلى Discord — تأكد أن السيرفر يعمل وأن الرابط صحيح.",
      "common.addedToCart": "تمت الإضافة للسلة",
      "cart.priceOnRequest": "هذا العرض يحتاج تسعيرة — تواصل معنا.",
    },
    fr: {
      "nav.games": "Jeux",
      "nav.payment": "Paiement",
      "nav.how": "Comment ça marche",
      "nav.contact": "Contact",
      "header.clientSpace": "Espace client",
      "hero.pill": "Comptes de jeux · Livraison instantanée",
      "hero.titleA": "Choisissez",
      "hero.titleB": "votre offre",
      "hero.sub": "Prix clairs, fonctionnalités listées pour chaque jeu et paiement adapté en Algérie.",
      "promo.kicker": "Promo",
      "promo.timer": "Disponible pendant 10 jours",
      "promo.title": "Forza Horizon 6 Premium Edition + Accès en avant‑première",
      "promo.ctaPrimary": "Voir l’offre",
      "promo.ctaSecondary": "Nous contacter",
      "common.startingFrom": "À partir de",
      "common.perAccount": "/ compte",
      "common.seeMore": "Voir plus",
      "common.orderNow": "Commander",
      "common.inStock": "En stock",
      "common.outOfStock": "Rupture de stock",
      "fc.badge": "Le plus demandé",
      "rdr.f1": "Livraison en minutes",
      "rdr.f2": "Garantie d’échange",
      "rdr.f3": "Support après-vente",
      "rdr.title": "Red Dead Redemption 2 - PC",
      "rdr.desc": "Compte complet, prêt à jouer dès la livraison.",
      "fc.title": "EA SPORTS FC 26 - PC",
      "fc.desc": "Compte prêt avec contenu et bonus — PC (Steam / EA App).",
      "fc.f1": "Contenu Ultimate Team",
      "fc.f2": "Mises à jour de saison",
      "fc.f3": "Livraison instantanée",
      "fc.f4": "Garantie d’échange",
      "multi.f1": "Tarif sur demande",
      "multi.f2": "Facture claire",
      "multi.f3": "Support dédié",
      "multi.title": "Comptes multiples",
      "multi.desc": "Pour groupes et contenu : plusieurs comptes avec réduction.",
      "multi.unit": "Offre",
      "multi.perQty": "/ selon quantité",
      "gta.title": "Grand Theft Auto V - PC",
      "gta.desc": "GTA V + Online avec solde élevé pour bien démarrer.",
      "gta.f1": "GTA Online prêt",
      "gta.f2": "Livraison rapide",
      "gta.f3": "Garantie d’échange",
      "away.title": "A Way Out",
      "away.desc": "Expérience coop à deux — parfaite pour jouer à deux.",
      "away.f1": "Mode 2 joueurs",
      "away.f2": "Histoire complète",
      "away.f3": "Livraison instantanée",
      "arc.title": "ARC Raiders",
      "arc.desc": "Extraction à équipe sur PC — compte prêt à jouer.",
      "arc.f1": "Online prêt",
      "arc.f2": "Livraison rapide",
      "arc.f3": "Garantie d’échange",
      "requiem.title": "Resident Evil Requiem — Kit Deluxe — PC",
      "requiem.desc": "Compte PC avec Kit Deluxe — bonus inclus, prêt à jouer.",
      "requiem.f1": "Contenu Kit Deluxe",
      "requiem.f2": "Livraison rapide",
      "requiem.f3": "Garantie d’échange",
      "other.title": "Jeu non listé ?",
      "other.desc": "Écrivez-nous le jeu recherché — disponibilité et prix.",
      "other.perReq": "/ sur demande",
      "other.f1": "Demande gratuite",
      "other.f2": "WhatsApp / Telegram",
      "other.f3": "Réponse rapide",
      "pay.tag": "Paiement",
      "pay.title": "Payez à votre façon",
      "pay.baridi": "Paiement Baridimob — rapide et sécurisé",
      "pay.ccp": "Transfert CCP — disponible partout en Algérie",
      "pay.paypal": "Paiement sécurisé via PayPal",
      "pay.usdt": "Paiement USDT — rapide et discret",
      "how.tag": "Processus",
      "how.title": "Comment acheter ?",
      "how.s1t": "Choisissez votre compte",
      "how.s1d": "Parcourez le catalogue et sélectionnez votre jeu",
      "how.s2t": "Contactez-nous",
      "how.s2d": "WhatsApp ou Telegram pour confirmer",
      "how.s3t": "Payez en sécurité",
      "how.s3d": "Choisissez la méthode qui vous convient",
      "how.s4t": "Recevez immédiatement",
      "how.s4d": "Identifiants envoyés en quelques minutes ✅",
      "discord.titleA": "Rejoignez notre",
      "discord.titleB": "Discord",
      "discord.sub": "Support instantané, commandes rapides et nouveautés.",
      "footer.desc": "Boutique de comptes de jeux en Algérie. Prix, livraison instantanée, garantie d’échange.",
      "footer.games": "Jeux",
      "footer.montageTitle": "Aperçu des jeux",
      "footer.store": "Boutique",
      "footer.refund": "Politique de retour",
      "footer.warranty": "Garantie",
      "footer.faq": "FAQ",
      "footer.contact": "Contact",
      "footer.chat": "WhatsApp / Telegram",
      "footer.country": "Algérie",
      "modal.store": "Plateforme",
      "modal.close": "Fermer",
      "platform.other": "Autres comptes",
      "platform.home": "HOME",
      "home.titleA": "Votre",
      "home.titleAccent": "compte jeu",
      "home.titleB": "livré vite en Algérie",
      "home.sub": "Prix clairs, infos détaillées par jeu et paiement adapté en Algérie.",
      "home.cta": "Voir le catalogue",
      "home.ddosLink": "Moyens de paiement",
      "home.feat1Title": "Livraison rapide",
      "home.feat1Desc": "Identifiants envoyés en quelques minutes après paiement.",
      "home.feat2Title": "Garantie d’échange",
      "home.feat2Desc": "Tranquillité si un souci survient avec le compte.",
      "home.feat3Title": "Prix affichés clairement",
      "home.feat3Desc": "DA, EUR ou USD — pas de mauvaise surprise.",
      "home.feat4Title": "Plusieurs moyens de paiement",
      "home.feat4Desc": "Baridimob, CCP, PayPal, USDT et plus.",
      "catalog.searchPlaceholder": "Rechercher un jeu…",
      "catalog.searchLabel": "Recherche dans le catalogue",
      "catalog.searchOpen": "Rechercher dans le catalogue",
      "catalog.searchBack": "Retour aux plateformes",
      "catalog.categoryPc": "PC",
      "catalog.categoryXbox": "Xbox",
      "catalog.categoryExtra": "Autres comptes & demandes",
      "catalog.currencyLabel": "Devise",
      "catalog.currencyAria": "Choisir la devise d’affichage des prix",
      "splash.welcome": "Bienvenue sur LORANS SHOP",
      "cart.openAria": "Ouvrir le panier",
      "cart.title": "Panier",
      "cart.empty": "Votre panier est vide.",
      "cart.subtotal": "Sous-total",
      "cart.checkout": "Paiement",
      "cart.clear": "Vider le panier",
      "cart.backAria": "Retour au panier",
      "checkout.title": "Paiement",
      "checkout.choosePayment": "Choisissez un moyen de paiement",
      "checkout.noteLabel": "Note (optionnel)",
      "checkout.notePlaceholder": "Ex. votre pseudo WhatsApp",
      "checkout.confirm": "Confirmer la commande",
      "checkout.successTitle": "Commande enregistrée",
      "checkout.orderRef": "Référence",
      "checkout.successDesc": "Gardez cette référence et contactez-nous pour payer et recevoir le compte.",
      "checkout.done": "OK",
      "checkout.notifyFail": "Impossible d’envoyer la notification Discord — vérifiez le serveur et l’URL.",
      "common.addedToCart": "Ajouté au panier",
      "cart.priceOnRequest": "Tarif sur devis — contactez-nous.",
      "xgpu1.title": "Game Pass Ultimate 1 Mois Officiel Microsoft Compte Principal",
      "xgpu2.title": "Game Pass Ultimate 3 Mois Officiel Microsoft Compte Principal",
      "xgpu3.title": "Game Pass Ultimate 4 Mois Officiel Microsoft Compte Principal",
      "xgpu4.title": "Game Pass Ultimate 6 Mois Officiel Microsoft Compte Principal",
      "xgpu5.title": "Game Pass Ultimate 8 Mois Officiel Microsoft Compte Principal",
      "xgpu.desc": "Abonnement officiel sur compte Microsoft principal — activation rapide et sécurisée.",
      "xgpu.f1": "Compte Microsoft principal",
      "xgpu.f2": "Livraison rapide",
      "xgpu.f3": "Garantie d’échange",
    },
    en: {
      "nav.games": "Games",
      "nav.payment": "Payment",
      "nav.how": "How it works",
      "nav.contact": "Contact",
      "header.clientSpace": "Client area",
      "hero.pill": "Game accounts · Instant delivery",
      "hero.titleA": "Pick",
      "hero.titleB": "your deal",
      "hero.sub": "Clear pricing, listed features for every game, and payment options for Algeria.",
      "promo.kicker": "Promo",
      "promo.timer": "Available for 10 days",
      "promo.title": "Forza Horizon 6 Premium Edition + Early access",
      "promo.ctaPrimary": "View offer",
      "promo.ctaSecondary": "Contact us",
      "common.startingFrom": "Starting at",
      "common.perAccount": "/ account",
      "common.seeMore": "See more",
      "common.orderNow": "Order now",
      "common.inStock": "In stock",
      "common.outOfStock": "Out of stock",
      "fc.badge": "Most popular",
      "rdr.f1": "Delivery in minutes",
      "rdr.f2": "Replacement guarantee",
      "rdr.f3": "After-sales support",
      "rdr.title": "Red Dead Redemption 2 - PC",
      "rdr.desc": "Full account, ready to play right after delivery.",
      "fc.title": "EA SPORTS FC 26 - PC",
      "fc.desc": "Ready account with content and bonuses — PC (Steam / EA App).",
      "fc.f1": "Ultimate Team content",
      "fc.f2": "Season updates",
      "fc.f3": "Instant delivery",
      "fc.f4": "Replacement guarantee",
      "multi.f1": "Custom pricing",
      "multi.f2": "Clear invoice",
      "multi.f3": "Dedicated support",
      "multi.title": "Multiple accounts",
      "multi.desc": "For groups and content: order more accounts with a discount.",
      "multi.unit": "Offer",
      "multi.perQty": "/ per quantity",
      "gta.title": "Grand Theft Auto V - PC",
      "gta.desc": "GTA V + Online with high balance to start strong.",
      "gta.f1": "GTA Online ready",
      "gta.f2": "Fast delivery",
      "gta.f3": "Replacement guarantee",
      "away.title": "A Way Out",
      "away.desc": "A 2-player co-op experience — perfect with a friend.",
      "away.f1": "2-player mode",
      "away.f2": "Full story",
      "away.f3": "Instant delivery",
      "arc.title": "ARC Raiders",
      "arc.desc": "Squad extraction on PC — account ready to jump in.",
      "arc.f1": "Online ready",
      "arc.f2": "Fast delivery",
      "arc.f3": "Replacement guarantee",
      "requiem.title": "Resident Evil Requiem — Kit Deluxe — PC",
      "requiem.desc": "PC account with Deluxe Kit — bonus content, ready to play.",
      "requiem.f1": "Deluxe Kit content",
      "requiem.f2": "Fast delivery",
      "requiem.f3": "Replacement guarantee",
      "other.title": "Game not listed?",
      "other.desc": "Message us the game you want — we’ll confirm availability and price.",
      "other.perReq": "/ on request",
      "other.f1": "Free inquiry",
      "other.f2": "WhatsApp / Telegram",
      "other.f3": "Quick reply",
      "pay.tag": "Payment",
      "pay.title": "Pay your way",
      "pay.baridi": "Baridimob payment — fast & secure",
      "pay.ccp": "CCP transfer — available across Algeria",
      "pay.paypal": "Secure PayPal payment",
      "pay.usdt": "USDT payment — fast & private",
      "how.tag": "Process",
      "how.title": "How to buy?",
      "how.s1t": "Pick your account",
      "how.s1d": "Browse the catalog and choose your game",
      "how.s2t": "Contact us",
      "how.s2d": "WhatsApp or Telegram to confirm",
      "how.s3t": "Pay securely",
      "how.s3d": "Choose the payment method that fits you",
      "how.s4t": "Receive instantly",
      "how.s4d": "Credentials sent in minutes ✅",
      "discord.titleA": "Join our",
      "discord.titleB": "Discord",
      "discord.sub": "Instant support, fast ordering, and updates.",
      "footer.desc": "Trusted game accounts shop in Algeria. Good prices, instant delivery, replacement guarantee.",
      "footer.games": "Games",
      "footer.montageTitle": "Featured games",
      "footer.store": "Store",
      "footer.refund": "Refund policy",
      "footer.warranty": "Warranty",
      "footer.faq": "FAQ",
      "footer.contact": "Contact",
      "footer.chat": "WhatsApp / Telegram",
      "footer.country": "Algeria",
      "modal.store": "Platform",
      "modal.close": "Close",
      "platform.other": "Other accounts",
      "platform.home": "HOME",
      "home.titleA": "Your",
      "home.titleAccent": "game account",
      "home.titleB": "delivered fast in Algeria",
      "home.sub": "Clear prices, features listed for every game, and payment options that work for you.",
      "home.cta": "Browse deals",
      "home.ddosLink": "Payment methods",
      "home.feat1Title": "Fast delivery",
      "home.feat1Desc": "Login details sent within minutes after payment.",
      "home.feat2Title": "Replacement guarantee",
      "home.feat2Desc": "Peace of mind if something goes wrong with the account.",
      "home.feat3Title": "Transparent pricing",
      "home.feat3Desc": "DA, EUR or USD — no surprises.",
      "home.feat4Title": "Flexible checkout",
      "home.feat4Desc": "Baridimob, CCP, PayPal, USDT and more.",
      "catalog.searchPlaceholder": "Search for a game…",
      "catalog.searchLabel": "Search the catalog",
      "catalog.searchOpen": "Search the catalog",
      "catalog.searchBack": "Back to platforms",
      "catalog.categoryPc": "PC",
      "catalog.categoryXbox": "Xbox",
      "catalog.categoryExtra": "More accounts & requests",
      "catalog.currencyLabel": "Currency",
      "catalog.currencyAria": "Choose currency for displayed prices",
      "splash.welcome": "WELCOME TO LORANS SHOP",
      "cart.openAria": "Open cart",
      "cart.title": "Cart",
      "cart.empty": "Your cart is empty.",
      "cart.subtotal": "Subtotal",
      "cart.checkout": "Checkout",
      "cart.clear": "Clear cart",
      "cart.backAria": "Back to cart",
      "checkout.title": "Checkout",
      "checkout.choosePayment": "Choose a payment method",
      "checkout.noteLabel": "Note (optional)",
      "checkout.notePlaceholder": "e.g. your WhatsApp name",
      "checkout.confirm": "Confirm order",
      "checkout.successTitle": "Order recorded",
      "checkout.orderRef": "Reference",
      "checkout.successDesc": "Keep this reference and contact us to pay and receive your account.",
      "checkout.done": "Done",
      "checkout.notifyFail": "Could not send Discord notification — check server and URL.",
      "common.addedToCart": "Added to cart",
      "cart.priceOnRequest": "Price on request — contact us.",
      "xgpu1.title": "Game Pass Ultimate 1 Month — Official Microsoft Primary Account",
      "xgpu2.title": "Game Pass Ultimate 3 Months — Official Microsoft Primary Account",
      "xgpu3.title": "Game Pass Ultimate 4 Months — Official Microsoft Primary Account",
      "xgpu4.title": "Game Pass Ultimate 6 Months — Official Microsoft Primary Account",
      "xgpu5.title": "Game Pass Ultimate 8 Months — Official Microsoft Primary Account",
      "xgpu.desc": "Official subscription on primary Microsoft account — fast, secure activation.",
      "xgpu.f1": "Primary Microsoft account",
      "xgpu.f2": "Fast delivery",
      "xgpu.f3": "Replacement guarantee",
    },
  };

  /** Bannière promo : FC 26 → Red Dead 2 → GTA V (aligné catalogue + visuels). */
  const PROMO_OFFER_ROTATION = [
    { titleKey: "fc.title", priceDa: "3000" },
    { titleKey: "rdr.title", priceDa: "2700" },
    { titleKey: "gta.title", priceDa: "2300" },
  ];

  let promoOfferIdx = 0;
  let refreshPromoOfferFromLang = null;

  /** DA per 1 EUR / 1 USD (indicative — adjust to your rates). */
  const RATES_DA_PER_UNIT = { eur: 148, usd: 136 };

  function formatForeignAmount(value) {
    if (!Number.isFinite(value)) return "—";
    const abs = Math.abs(value);
    const maxFrac = abs >= 100 ? 1 : 2;
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: maxFrac,
    }).format(value);
  }

  function initCatalogPriceData() {
    document.querySelectorAll("#catalog .price-amt, .promo-hero .price-amt").forEach((el) => {
      if (el.dataset.priceDa != null && el.dataset.priceDa !== "") return;
      const raw = el.textContent.replace(/\s/g, "").trim();
      if (/^\d+$/.test(raw)) el.dataset.priceDa = raw;
    });
  }

  function applyCatalogCurrency(code) {
    const cur = code || "da";
    document.querySelectorAll("#catalog .price-amt, .promo-hero .price-amt").forEach((amtEl) => {
      const daStr = amtEl.dataset.priceDa;
      if (daStr == null || daStr === "") return;
      const n = Number(daStr);
      if (!Number.isFinite(n)) return;
      const line = amtEl.closest(".price-line");
      const unitEl = line ? line.querySelector(".price-unit") : null;
      if (!unitEl) return;

      if (cur === "da") {
        amtEl.textContent = String(Math.round(n));
        unitEl.textContent = "DA";
      } else if (cur === "eur") {
        amtEl.textContent = formatForeignAmount(n / RATES_DA_PER_UNIT.eur);
        unitEl.textContent = "EUR";
      } else if (cur === "usd") {
        amtEl.textContent = formatForeignAmount(n / RATES_DA_PER_UNIT.usd);
        unitEl.textContent = "USD";
      }
    });
  }

  const CART_KEY = "lorans-cart";

  function formatCartPrice(daTotal) {
    if (!Number.isFinite(daTotal)) return "—";
    const cur = document.getElementById("catalogCurrency")?.value || "da";
    if (cur === "da") return `${Math.round(daTotal)} DA`;
    if (cur === "eur") return `${formatForeignAmount(daTotal / RATES_DA_PER_UNIT.eur)} EUR`;
    if (cur === "usd") return `${formatForeignAmount(daTotal / RATES_DA_PER_UNIT.usd)} USD`;
    return String(daTotal);
  }

  function parsePriceDaFromCard(card) {
    if (!card) return null;
    const amt = card.querySelector(".price-amt");
    if (!amt) return null;
    const ds = amt.dataset.priceDa;
    if (ds != null && ds !== "") {
      const n = Number(ds);
      if (Number.isFinite(n)) return n;
    }
    const raw = amt.textContent.replace(/\s/g, "").replace(/[^\d]/g, "");
    if (!raw) return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }

  function isProductOutOfStock(card) {
    return !!card.querySelector(".stock-badge--out");
  }

  function loadCartItems() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (_) {
      return [];
    }
  }

  function saveCartItems(items) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (_) {}
  }

  function i18nText(key) {
    const lang = document.documentElement.lang || "ar";
    const v = (I18N[lang] || I18N.ar)[key];
    return typeof v === "string" ? v : key;
  }

  function addToCartFromCard(card) {
    if (!card) return;
    if (isProductOutOfStock(card)) {
      alert(i18nText("common.outOfStock"));
      return;
    }
    const priceDa = parsePriceDaFromCard(card);
    if (priceDa == null) {
      alert(i18nText("cart.priceOnRequest"));
      return;
    }
    const id = card.getAttribute("data-product-id") || card.id || `p-${Date.now()}`;
    const titleEl = card.querySelector(".product-title");
    const title = (titleEl && titleEl.textContent.trim()) || id;
    const items = loadCartItems();
    const existing = items.find((x) => x.id === id);
    if (existing) existing.qty += 1;
    else items.push({ id, title, priceDa, qty: 1 });
    saveCartItems(items);
    window.dispatchEvent(new CustomEvent("lorans-cart-changed"));
  }

  function flashBuyButton(btn) {
    if (!btn || btn.closest(".cart-drawer")) return;
    const prev = btn.textContent;
    btn.textContent = i18nText("common.addedToCart");
    btn.style.background = "linear-gradient(180deg, #16a34a, #15803d)";
    window.setTimeout(() => {
      btn.textContent = prev;
      btn.style.background = "";
    }, 1600);
  }

  async function postOrderToDiscord(order) {
    const meta = document.querySelector('meta[name="lorans-notify-url"]');
    const raw = meta && meta.content ? meta.content.trim() : "";
    const url =
      raw ||
      (typeof window !== "undefined" && window.__LORANS_NOTIFY_URL) ||
      "http://127.0.0.1:8787/notify";
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    if (!res.ok) throw new Error(`notify_http_${res.status}`);
  }

  function initCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const openBtn = document.getElementById("cartOpenBtn");
    const panel = document.querySelector("[data-cart-panel]");
    const linesEl = document.querySelector("[data-cart-lines]");
    const emptyEl = document.querySelector("[data-cart-empty]");
    const totalEl = document.querySelector("[data-cart-total]");
    const badge = document.getElementById("cartBadge");
    const footer = document.querySelector("[data-cart-footer]");
    const checkoutBtn = document.querySelector("[data-cart-checkout-btn]");
    const clearBtn = document.querySelector("[data-cart-clear]");
    const backBtn = document.getElementById("cartBackBtn");
    const confirmBtn = document.querySelector("[data-cart-confirm]");
    const doneBtn = document.querySelector("[data-cart-done]");
    const titleEl = document.querySelector("[data-cart-title]");
    const orderRefEl = document.querySelector("[data-order-ref]");
    const noteEl = document.getElementById("checkoutNote");

    let viewState = "cart";

    function cartTotalDa(items) {
      return items.reduce((s, it) => s + it.priceDa * it.qty, 0);
    }

    function setViewState(next) {
      viewState = next;
      if (!panel || !drawer) return;
      panel.classList.toggle("is-checkout", next === "checkout");
      panel.classList.toggle("is-success", next === "success");
      const viewCart = drawer.querySelector('[data-cart-view="cart"]');
      const viewCheckout = drawer.querySelector('[data-cart-view="checkout"]');
      const viewSuccess = drawer.querySelector('[data-cart-view="success"]');
      if (viewCart) viewCart.hidden = next !== "cart";
      if (viewCheckout) viewCheckout.hidden = next !== "checkout";
      if (viewSuccess) viewSuccess.hidden = next !== "success";
      if (footer) footer.hidden = next === "success";
      if (backBtn) backBtn.hidden = next !== "checkout";
      if (titleEl) {
        if (next === "success") titleEl.textContent = "";
        else if (next === "checkout") titleEl.textContent = i18nText("checkout.title");
        else titleEl.textContent = i18nText("cart.title");
      }
    }

    function renderLines() {
      const items = loadCartItems();
      if (!linesEl || !emptyEl || !totalEl || !checkoutBtn) return;
      linesEl.textContent = "";
      if (items.length === 0) {
        emptyEl.hidden = false;
        linesEl.hidden = true;
        checkoutBtn.disabled = true;
      } else {
        emptyEl.hidden = true;
        linesEl.hidden = false;
        checkoutBtn.disabled = false;
        items.forEach((it) => {
          const lineTotal = it.priceDa * it.qty;
          const li = document.createElement("li");
          li.className = "cart-line";
          li.dataset.lineId = it.id;

          const main = document.createElement("div");
          main.className = "cart-line__main";
          const titleSpan = document.createElement("span");
          titleSpan.className = "cart-line__title";
          titleSpan.textContent = it.title;
          const metaSpan = document.createElement("span");
          metaSpan.className = "cart-line__meta";
          metaSpan.textContent = formatCartPrice(lineTotal);
          main.appendChild(titleSpan);
          main.appendChild(metaSpan);

          const row2 = document.createElement("div");
          row2.className = "cart-line__row2";
          const eachSpan = document.createElement("span");
          eachSpan.className = "cart-line__each";
          eachSpan.textContent =
            it.qty > 1 ? `${formatCartPrice(it.priceDa)} × ${it.qty}` : formatCartPrice(it.priceDa);

          const controls = document.createElement("div");
          controls.className = "cart-line__controls";
          const dec = document.createElement("button");
          dec.type = "button";
          dec.className = "cart-line__qtybtn";
          dec.setAttribute("data-qty-dec", "");
          dec.textContent = "−";
          const qtySpan = document.createElement("span");
          qtySpan.className = "cart-line__qty";
          qtySpan.textContent = String(it.qty);
          const inc = document.createElement("button");
          inc.type = "button";
          inc.className = "cart-line__qtybtn";
          inc.setAttribute("data-qty-inc", "");
          inc.textContent = "+";
          const rem = document.createElement("button");
          rem.type = "button";
          rem.className = "cart-line__remove";
          rem.setAttribute("data-remove", "");
          rem.textContent = "×";
          controls.appendChild(dec);
          controls.appendChild(qtySpan);
          controls.appendChild(inc);
          controls.appendChild(rem);

          row2.appendChild(eachSpan);
          row2.appendChild(controls);

          li.appendChild(main);
          li.appendChild(row2);
          linesEl.appendChild(li);
        });
      }
      totalEl.textContent = formatCartPrice(cartTotalDa(items));
    }

    function updateBadge() {
      const items = loadCartItems();
      const n = items.reduce((s, it) => s + it.qty, 0);
      if (!badge) return;
      if (n <= 0) {
        badge.hidden = true;
        badge.textContent = "0";
      } else {
        badge.hidden = false;
        badge.textContent = n > 99 ? "99+" : String(n);
      }
    }

    function refreshCartUI() {
      renderLines();
      updateBadge();
      if (titleEl && viewState === "cart") titleEl.textContent = i18nText("cart.title");
    }

    function openDrawer() {
      if (!drawer) return;
      setViewState("cart");
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      if (openBtn) openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      refreshCartUI();
    }

    function closeDrawer() {
      if (!drawer) return;
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      if (openBtn) openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      setViewState("cart");
    }

    if (openBtn) openBtn.addEventListener("click", () => openDrawer());

    if (drawer) {
      drawer.querySelectorAll("[data-cart-close]").forEach((el) => {
        el.addEventListener("click", () => closeDrawer());
      });
    }

    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        if (loadCartItems().length === 0) return;
        setViewState("checkout");
      });
    }

    if (backBtn) {
      backBtn.addEventListener("click", () => setViewState("cart"));
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        saveCartItems([]);
        refreshCartUI();
      });
    }

    if (linesEl) {
      linesEl.addEventListener("click", (e) => {
        const line = e.target.closest(".cart-line");
        if (!line) return;
        const id = line.dataset.lineId;
        const items = loadCartItems();
        const ix = items.findIndex((x) => x.id === id);
        if (ix < 0) return;
        if (e.target.closest(".cart-line__remove")) {
          items.splice(ix, 1);
          saveCartItems(items);
          refreshCartUI();
          return;
        }
        if (e.target.closest("[data-qty-inc]")) {
          items[ix].qty += 1;
          saveCartItems(items);
          refreshCartUI();
        }
        if (e.target.closest("[data-qty-dec]")) {
          items[ix].qty -= 1;
          if (items[ix].qty < 1) items.splice(ix, 1);
          saveCartItems(items);
          refreshCartUI();
        }
      });
    }

    if (confirmBtn) {
      confirmBtn.addEventListener("click", async () => {
        const items = loadCartItems();
        if (items.length === 0) return;
        const pay = drawer ? drawer.querySelector('input[name="checkout-pay"]:checked') : null;
        const method = pay ? pay.value : "baridi";
        const note = noteEl ? noteEl.value.trim() : "";
        const ref = `ORD-${Date.now().toString(36).toUpperCase()}`;
        const orderPayload = {
          ref,
          at: Date.now(),
          method,
          note,
          items: items.map((x) => ({
            id: x.id,
            title: x.title,
            priceDa: x.priceDa,
            qty: x.qty,
          })),
          totalDa: cartTotalDa(items),
        };
        try {
          await postOrderToDiscord(orderPayload);
        } catch (err) {
          console.warn(err);
          alert(i18nText("checkout.notifyFail"));
        }
        try {
          const hist = JSON.parse(localStorage.getItem("lorans-orders") || "[]");
          const list = Array.isArray(hist) ? hist : [];
          list.push({
            ...orderPayload,
            items: orderPayload.items.map((x) => ({ ...x })),
          });
          localStorage.setItem("lorans-orders", JSON.stringify(list.slice(-20)));
        } catch (_) {}
        saveCartItems([]);
        refreshCartUI();
        if (orderRefEl) orderRefEl.textContent = ref;
        if (noteEl) noteEl.value = "";
        setViewState("success");
      });
    }

    if (doneBtn) {
      doneBtn.addEventListener("click", () => closeDrawer());
    }

    window.addEventListener("lorans-cart-changed", refreshCartUI);

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (!drawer || !drawer.classList.contains("is-open")) return;
      if (viewState === "success") closeDrawer();
      else if (viewState === "checkout") setViewState("cart");
      else closeDrawer();
    });

    refreshCartUI();
  }

  const header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setLang(lang) {
    const dict = I18N[lang] || I18N.ar;
    document.documentElement.lang = lang === "ar" ? "ar" : lang;
    // Keep the site layout RTL (no flipping). Only texts change.
    document.documentElement.dir = "rtl";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n") || "";
      const v = dict[key];
      if (typeof v === "string") el.textContent = v;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder") || "";
      const v = dict[key];
      if (typeof v === "string") el.setAttribute("placeholder", v);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label") || "";
      const v = dict[key];
      if (typeof v === "string") el.setAttribute("aria-label", v);
    });

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
      if (b.getAttribute("data-lang") === lang) {
        b.setAttribute("aria-selected", "true");
      } else {
        b.setAttribute("aria-selected", "false");
      }
    });

    const dropdown = document.querySelector("[data-lang-dropdown]");
    const labelEl = document.querySelector("[data-lang-label]");
    const trigger = document.querySelector("[data-lang-trigger]");
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if (labelEl && activeBtn) {
      const name = activeBtn.querySelector(".lang-name");
      labelEl.textContent = (name && name.textContent) || activeBtn.getAttribute("aria-label") || lang;
    }
    const triggerFlag = dropdown ? dropdown.querySelector(".lang-trigger-flag") : null;
    if (triggerFlag && activeBtn) {
      const f = activeBtn.querySelector(".lang-flag");
      triggerFlag.textContent = (f && f.textContent) || "🌐";
    }
    if (dropdown) {
      dropdown.classList.remove("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    }

    applyCatalogCurrency(document.getElementById("catalogCurrency")?.value || "da");

    if (typeof refreshPromoOfferFromLang === "function") refreshPromoOfferFromLang();

    try {
      localStorage.setItem("lorans-lang", lang);
    } catch (_) {}

    window.dispatchEvent(new CustomEvent("lorans-cart-changed"));
  }

  const savedLang = (function () {
    try {
      return localStorage.getItem("lorans-lang");
    } catch (_) {
      return null;
    }
  })();

  const catalogCurrencyEl = document.getElementById("catalogCurrency");
  const currencyPicker = document.querySelector("[data-currency-picker]");
  const currencyTrigger = currencyPicker ? currencyPicker.querySelector("[data-currency-trigger]") : null;
  const currencyMenu = currencyPicker ? currencyPicker.querySelector("[data-currency-menu]") : null;
  const currencySymbol = currencyPicker ? currencyPicker.querySelector("[data-currency-symbol]") : null;
  const currencyLabel = currencyPicker ? currencyPicker.querySelector("[data-currency-label]") : null;

  const CURRENCY_META = {
    da: { symbol: "DA", label: "Dinar (DA)" },
    eur: { symbol: "€", label: "Euro (EUR)" },
    usd: { symbol: "$", label: "USD" },
  };

  function setCurrencyUI(cur) {
    if (!catalogCurrencyEl) return;
    const code = ["da", "eur", "usd"].includes(cur) ? cur : "da";
    catalogCurrencyEl.value = code;

    if (currencyPicker) currencyPicker.dataset.value = code;
    if (currencySymbol) currencySymbol.textContent = CURRENCY_META[code].symbol;
    if (currencyLabel) currencyLabel.textContent = CURRENCY_META[code].label;

    if (currencyMenu) {
      currencyMenu.querySelectorAll("[data-currency]").forEach((btn) => {
        const on = btn.getAttribute("data-currency") === code;
        btn.classList.toggle("is-selected", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
    }
  }

  function openCurrencyMenu() {
    if (!currencyPicker || !currencyTrigger || !currencyMenu) return;
    currencyPicker.classList.add("is-open");
    currencyTrigger.setAttribute("aria-expanded", "true");
    currencyMenu.setAttribute("aria-hidden", "false");
  }

  function closeCurrencyMenu() {
    if (!currencyPicker || !currencyTrigger || !currencyMenu) return;
    currencyPicker.classList.remove("is-open");
    currencyTrigger.setAttribute("aria-expanded", "false");
    currencyMenu.setAttribute("aria-hidden", "true");
  }
  try {
    const savedCur = localStorage.getItem("lorans-currency");
    if (savedCur && ["da", "eur", "usd"].includes(savedCur) && catalogCurrencyEl) {
      setCurrencyUI(savedCur);
    } else if (catalogCurrencyEl) {
      setCurrencyUI(catalogCurrencyEl.value || "da");
    }
  } catch (_) {}

  initCatalogPriceData();
  initCartDrawer();
  setLang(savedLang || "ar");

  (function initSiteSplash() {
    const splash = document.getElementById("siteSplash");
    if (!splash) return;

    document.body.classList.add("splash-active");
    if (prefersReducedMotion) splash.classList.add("is-reduced");

    const MIN_LOAD_MS = 900;
    const PHASE_GAP_MS = 400;
    const TYPE_MS = 38;
    const HOLD_AFTER_TYPE_MS = 1450;
    const REMOVE_DELAY_MS = 1100;

    const tScript = performance.now();

    function splashLang() {
      const l = document.documentElement.lang || "ar";
      if (l === "fr") return "fr";
      if (l === "en") return "en";
      return "ar";
    }

    function welcomePhrase() {
      const dict = I18N[splashLang()] || I18N.ar;
      const t = dict["splash.welcome"];
      return typeof t === "string" ? t : "WELCOME TO LORANS SHOP";
    }

    function finishExit() {
      splash.classList.add("is-done");
      splash.setAttribute("aria-busy", "false");
      splash.setAttribute("aria-hidden", "true");
      document.body.classList.remove("splash-active");
      window.setTimeout(() => splash.remove(), REMOVE_DELAY_MS);
    }

    function runTyping() {
      const el = document.getElementById("splashTyped");
      const text = welcomePhrase();
      if (!el) {
        finishExit();
        return;
      }

      if (prefersReducedMotion) {
        el.textContent = text;
        splash.classList.add("is-typing-done");
        splash.setAttribute("aria-busy", "false");
        window.setTimeout(finishExit, 900);
        return;
      }

      let i = 0;
      el.textContent = "";

      function tick() {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i += 1;
          window.setTimeout(tick, TYPE_MS);
        } else {
          splash.classList.add("is-typing-done");
          splash.setAttribute("aria-busy", "false");
          window.setTimeout(finishExit, HOLD_AFTER_TYPE_MS);
        }
      }

      tick();
    }

    function showTypingPhase() {
      const loadPhase = splash.querySelector('[data-splash-phase="load"]');
      const typePhase = splash.querySelector('[data-splash-phase="type"]');
      if (!loadPhase || !typePhase) return;

      loadPhase.classList.add("is-out");

      window.setTimeout(() => {
        loadPhase.setAttribute("hidden", "");
        typePhase.removeAttribute("hidden");
        typePhase.classList.remove("is-hidden");
        splash.classList.add("splash--typing-bg");
        typePhase.setAttribute("dir", splashLang() === "ar" ? "rtl" : "ltr");
        window.requestAnimationFrame(() => {
          typePhase.classList.add("is-in");
          runTyping();
        });
      }, PHASE_GAP_MS);
    }

    function afterEverythingLoaded() {
      const elapsed = performance.now() - tScript;
      const waitLoad = Math.max(0, MIN_LOAD_MS - elapsed);
      window.setTimeout(showTypingPhase, waitLoad);
    }

    if (document.readyState === "complete") {
      afterEverythingLoaded();
    } else {
      window.addEventListener("load", afterEverythingLoaded, { once: true });
    }
  })();

  // Promo hero : fond + titre + prix restent sync (FC 26 / RDR2 / GTA V uniquement)
  (function initPromoHeroRotator() {
    const wrap = document.querySelector("[data-promo-rotator]");
    if (!wrap) return;

    const titleEl = wrap.querySelector("[data-promo-offer-title]");
    const priceAmt = wrap.querySelector("[data-promo-offer-price]");
    const card = wrap.querySelector(".promo-hero__card");
    const curEl = wrap.querySelector(".promo-hero__media--current");
    const nextEl = wrap.querySelector(".promo-hero__media--next");

    const raw = (wrap.getAttribute("data-promo-images") || "").trim();
    const bgImages = raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, PROMO_OFFER_ROTATION.length);

    function pageDict() {
      const lang = document.documentElement.lang || "ar";
      return I18N[lang] || I18N.ar;
    }

    function applyOfferSlide(i) {
      const offer = PROMO_OFFER_ROTATION[i];
      if (!offer) return;
      const dict = pageDict();
      if (titleEl && offer.titleKey) {
        const t = dict[offer.titleKey];
        if (typeof t === "string") titleEl.textContent = t;
      }
      if (priceAmt && offer.priceDa != null) {
        priceAmt.dataset.priceDa = offer.priceDa;
        applyCatalogCurrency(document.getElementById("catalogCurrency")?.value || "da");
      }
    }

    refreshPromoOfferFromLang = () => applyOfferSlide(promoOfferIdx);

    promoOfferIdx = 0;
    applyOfferSlide(promoOfferIdx);

    function applyBg(el, url) {
      el.style.backgroundImage = `url('${url.replace(/'/g, "\\'")}')`;
    }

    if (bgImages[0] && curEl && !curEl.style.backgroundImage) applyBg(curEl, bgImages[0]);

    if (prefersReducedMotion) return;

    const n = PROMO_OFFER_ROTATION.length;
    const tickMs = 4200;
    const fadeMs = 560;
    let timer = null;
    let paused = false;

    function rotateBg(toIdx) {
      if (!curEl || !nextEl || bgImages.length < 2) return;
      const url = bgImages[toIdx % bgImages.length];
      applyBg(nextEl, url);
      wrap.classList.add("is-rotating");
      window.setTimeout(() => {
        applyBg(curEl, url);
        wrap.classList.remove("is-rotating");
        nextEl.style.backgroundImage = "";
      }, fadeMs);
    }

    function step() {
      if (paused) return;
      promoOfferIdx = (promoOfferIdx + 1) % n;
      applyOfferSlide(promoOfferIdx);
      rotateBg(promoOfferIdx);
    }

    function start() {
      if (timer) return;
      timer = window.setInterval(step, tickMs);
    }

    function stop() {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    }

    if (n >= 2 && bgImages.length >= 2) start();

    const pauseOn = card || wrap;
    pauseOn.addEventListener("mouseenter", () => {
      paused = true;
      stop();
    });
    pauseOn.addEventListener("mouseleave", () => {
      paused = false;
      if (n >= 2 && bgImages.length >= 2) start();
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else if (!paused && n >= 2 && bgImages.length >= 2) start();
    });
  })();

  if (currencyPicker && currencyTrigger && currencyMenu && catalogCurrencyEl) {
    currencyTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      const open = currencyPicker.classList.contains("is-open");
      if (open) closeCurrencyMenu();
      else openCurrencyMenu();
    });

    currencyMenu.querySelectorAll("[data-currency]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const v = btn.getAttribute("data-currency") || "da";
        setCurrencyUI(v);
        applyCatalogCurrency(catalogCurrencyEl.value);
        try {
          localStorage.setItem("lorans-currency", catalogCurrencyEl.value);
        } catch (_) {}
        window.dispatchEvent(new CustomEvent("lorans-cart-changed"));
        closeCurrencyMenu();
      });
    });

    document.addEventListener("click", (e) => {
      if (!currencyPicker.classList.contains("is-open")) return;
      if (!currencyPicker.contains(e.target)) closeCurrencyMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (!currencyPicker.classList.contains("is-open")) return;
      closeCurrencyMenu();
    });
  } else if (catalogCurrencyEl) {
    // Fallback if markup changes back to native <select>
    catalogCurrencyEl.addEventListener("change", () => {
      applyCatalogCurrency(catalogCurrencyEl.value);
      try {
        localStorage.setItem("lorans-currency", catalogCurrencyEl.value);
      } catch (_) {}
      window.dispatchEvent(new CustomEvent("lorans-cart-changed"));
    });
  }

  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.addEventListener("click", () => setLang(b.getAttribute("data-lang") || "ar"));
  });

  const langDropdown = document.querySelector("[data-lang-dropdown]");
  if (langDropdown) {
    const trigger = langDropdown.querySelector("[data-lang-trigger]");
    const panel = langDropdown.querySelector("[data-lang-panel]");

    function closeLangMenu() {
      langDropdown.classList.remove("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    }

    function toggleLangMenu() {
      const open = langDropdown.classList.toggle("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");
    }

    if (trigger) {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleLangMenu();
      });
    }

    document.addEventListener("click", (e) => {
      if (!langDropdown.contains(e.target)) closeLangMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLangMenu();
    });

    if (panel) {
      panel.addEventListener("click", (e) => e.stopPropagation());
    }
  }

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    const sun = themeToggle.querySelector(".icon-sun");
    const moon = themeToggle.querySelector(".icon-moon");

    function setTheme(mode) {
      if (mode === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        if (sun) sun.hidden = true;
        if (moon) moon.hidden = false;
      } else {
        document.documentElement.removeAttribute("data-theme");
        if (sun) sun.hidden = false;
        if (moon) moon.hidden = true;
      }
      try {
        localStorage.setItem("lorans-theme", mode);
      } catch (_) {}
    }

    const saved = (function () {
      try {
        return localStorage.getItem("lorans-theme");
      } catch (_) {
        return null;
      }
    })();
    if (saved === "light") setTheme("light");

    themeToggle.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      setTheme(next);
    });
  }

  function bindCardTilt(selector, maxDeg) {
    document.querySelectorAll(selector).forEach((card) => {
      card.addEventListener(
        "mousemove",
        (e) => {
          if (prefersReducedMotion || isCoarsePointer) return;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const midX = rect.width / 2;
          const midY = rect.height / 2;
          const rxT = ((y - midY) / midY) * -maxDeg;
          const ryT = ((x - midX) / midX) * maxDeg;
          card.classList.add("is-tilted");
          card.style.transform = `perspective(1100px) rotateX(${rxT}deg) rotateY(${ryT}deg) translateY(-5px)`;
        },
        { passive: true }
      );

      card.addEventListener(
        "mouseleave",
        () => {
          card.classList.remove("is-tilted");
          card.style.transform = "";
        },
        { passive: true }
      );
    });
  }

  bindCardTilt(".product-card", 5);
  bindCardTilt(".payment-card", 6);

  const platformChips = document.querySelectorAll("[data-platform-filter]");
  const catalogSearchInput = document.getElementById("catalogSearch");
  const catalogSearchTrigger = document.getElementById("catalogSearchTrigger");
  const catalogSearchClose = document.getElementById("catalogSearchClose");
  const platformStripWrap = document.querySelector("[data-platform-strip-wrap]");
  const platformSearchPanel = document.getElementById("platformSearchPanel");
  const catalogProductCards = document.querySelectorAll("#catalog .product-card");

  let activePlatform = null;

  function updatePlatformShell() {
    document.body.classList.toggle("view-home", activePlatform === "home");
    platformChips.forEach((c) => {
      const filter = c.getAttribute("data-platform-filter");
      const on = filter === activePlatform;
      c.setAttribute("aria-pressed", on ? "true" : "false");
      c.classList.toggle("is-active", on);
    });
  }

  function setActivePlatform(next) {
    activePlatform = next;
    updatePlatformShell();
    applyCatalogFilters();
  }

  function platformsForCard(card) {
    const raw = (card.getAttribute("data-platform") || "").trim();
    if (!raw) return ["pc", "xbox"];
    return raw.split(",").map((s) => s.trim()).filter(Boolean);
  }

  function applyCatalogFilters() {
    const q = (catalogSearchInput && catalogSearchInput.value.trim().toLowerCase()) || "";
    catalogProductCards.forEach((card) => {
      const titleEl = card.querySelector(".product-title");
      const descEl = card.querySelector(".product-desc");
      const titleText = titleEl ? titleEl.textContent.toLowerCase() : "";
      const descText = descEl ? descEl.textContent.toLowerCase() : "";
      const textOk = !q || titleText.includes(q) || descText.includes(q);
      const platOk = !activePlatform || platformsForCard(card).includes(activePlatform);
      card.classList.toggle("is-filtered-out", !(textOk && platOk));
    });
  }

  platformChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const v = chip.getAttribute("data-platform-filter");
      if (activePlatform === v) setActivePlatform(null);
      else setActivePlatform(v);
    });
  });

  setActivePlatform("home");

  document.querySelectorAll("[data-home-start]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setActivePlatform("pc");
      const catalogEl = document.getElementById("catalog");
      if (catalogEl) {
        catalogEl.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    });
  });

  document.querySelectorAll('a[href="#catalog"]').forEach((a) => {
    a.addEventListener("click", () => {
      setActivePlatform("pc");
    });
  });

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", applyCatalogFilters);
  }

  function openCatalogSearchMode() {
    if (!platformStripWrap || !catalogSearchInput) return;
    platformStripWrap.classList.add("is-search-open");
    if (catalogSearchTrigger) catalogSearchTrigger.setAttribute("aria-expanded", "true");
    if (platformSearchPanel) platformSearchPanel.setAttribute("aria-hidden", "false");
    const runFocus = () => {
      catalogSearchInput.focus();
      try {
        catalogSearchInput.select();
      } catch (_) {}
    };
    if (prefersReducedMotion) runFocus();
    else requestAnimationFrame(runFocus);
  }

  function closeCatalogSearchMode() {
    if (!platformStripWrap) return;
    platformStripWrap.classList.remove("is-search-open");
    if (catalogSearchTrigger) {
      catalogSearchTrigger.setAttribute("aria-expanded", "false");
      catalogSearchTrigger.focus();
    }
    if (platformSearchPanel) platformSearchPanel.setAttribute("aria-hidden", "true");
  }

  if (catalogSearchTrigger && catalogSearchInput) {
    catalogSearchTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      openCatalogSearchMode();
    });
  }

  if (catalogSearchClose) {
    catalogSearchClose.addEventListener("click", () => closeCatalogSearchMode());
  }

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!platformStripWrap || !platformStripWrap.classList.contains("is-search-open")) return;
    closeCatalogSearchMode();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.06 }
  );

  document.querySelectorAll(".product-card, .payment-card, .step, .home-feature").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

  document.addEventListener("click", (e) => {
    const buy = e.target.closest(".product-card .btn-buy-primary");
    if (!buy) return;
    e.preventDefault();
    const card = buy.closest(".product-card");
    addToCartFromCard(card);
    flashBuyButton(buy);
  });

  const modal = document.querySelector("[data-product-modal]");
  let modalSourceCard = null;
  if (modal) {
    const dialog = modal.querySelector(".product-modal__dialog");
    const montage = modal.querySelector("[data-modal-montage]");
    const titleEl = modal.querySelector("[data-modal-title]");
    const descEl = modal.querySelector("[data-modal-desc]");
    const storeEl = modal.querySelector("[data-modal-store]");
    const priceEl = modal.querySelector("[data-modal-price]");
    const featsEl = modal.querySelector("[data-modal-features]");

    function openModalFromCard(card) {
      if (!card) return;
      modalSourceCard = card;

      const t = card.querySelector(".product-title");
      const d = card.querySelector(".product-desc");
      const visual = card.querySelector(".product-visual");
      const priceAmt = card.querySelector(".price-amt");
      const priceUnit = card.querySelector(".price-unit");
      const prefix = card.querySelector(".price-prefix");
      const suffix = card.querySelector(".price-suffix");
      const store = card.getAttribute("data-store") || "—";

      if (titleEl) titleEl.textContent = (t && t.textContent) || "—";
      if (descEl) descEl.textContent = (d && d.textContent) || "—";
      if (storeEl) storeEl.textContent = store;

      if (priceEl) {
        const pfx = (prefix && prefix.textContent) || "";
        const amt = (priceAmt && priceAmt.textContent) || "";
        const unit = (priceUnit && priceUnit.textContent) || "";
        const sfx = (suffix && suffix.textContent) || "";
        const parts = [pfx, `${amt} ${unit}`.trim(), sfx].filter(Boolean).join(" ");
        priceEl.textContent = parts || "—";
      }

      if (featsEl) {
        featsEl.innerHTML = "";
        card.querySelectorAll(".product-features li").forEach((li) => {
          const item = document.createElement("li");
          item.textContent = li.textContent.trim();
          featsEl.appendChild(item);
        });
      }

      if (montage) {
        const bg = visual ? getComputedStyle(visual).background : "";
        montage.style.background = bg || "";
        montage.style.backgroundSize = "cover";
        montage.style.backgroundPosition = "center";
      }

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (dialog) dialog.focus?.();
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    document.querySelectorAll(".btn-outline").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".product-card");
        openModalFromCard(card);
      });
    });

    modal.querySelectorAll("[data-modal-close]").forEach((el) => {
      el.addEventListener("click", closeModal);
    });

    modal.querySelectorAll("[data-modal-order]").forEach((btn) => {
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        addToCartFromCard(modalSourceCard);
        flashBuyButton(btn);
        closeModal();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("is-open")) return;
      if (e.key === "Escape") closeModal();
    });
  }
})();
