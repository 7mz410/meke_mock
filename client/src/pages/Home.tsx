/**
 * Visual contract: a faithful, dense Hebrew technical-supply storefront in RTL.
 * Black logo surfaces and the supplied red mark lead every interaction; no yellow UI accents.
 */
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Menu,
  Minus,
  Phone,
  Plus,
  Search,
  ShoppingCart,
  UserRound,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const IMG = import.meta.env.BASE_URL + "img/";

const ASSETS = {
  logo: IMG + "brand-logo-transparent.png",
  catSale: IMG + "cat-sale.png",
  catClearance: IMG + "cat-clearance.jpeg",
  catDeals: IMG + "cat-deals.png",
  catPower: IMG + "cat-power-tools.png",
  catCooling: IMG + "cat-cooling.png",
  catConsumables: IMG + "cat-consumables.png",
  catHand: IMG + "cat-hand-tools.png",
  catIndustrial: IMG + "cat-industrial.png",
  catCleaning: IMG + "cat-cleaning.png",
  catGarden: IMG + "cat-garden.png",
  catSafety: IMG + "cat-safety.png",
  catMeasurement: IMG + "cat-measurement.png",
  catStorage: IMG + "cat-storage.png",
  catHome: IMG + "cat-home-garden.png",
  productGarda: IMG + "product-garda.jpg",
  productDewalt: IMG + "product-dewalt.png",
  rentalHero: IMG + "industrial-rental-hero.png",
  powerHero: IMG + "power-tools-hero.png",
  safetyHero: IMG + "work-safety-hero.png",
};

const navItems = [
  "SALE שישי 14-08-26",
  "מבצעי חיסול אוגוסט 2026!!!",
  "מבצעים",
  "כלים חשמליים",
  "מוצרי צינון ואוורור",
  "אביזרים וציוד מתכלה",
  "כלים ידניים",
  "ציוד לתעשייה",
  "ציוד ניקיון",
  "ציוד גינון",
  "בגדי עבודה ובטיחות",
  "כלי מדידה וסימון",
  "ארונות / ארגזי כלים / תיקים",
  "לבית ולגינה",
  "אביזרי חשמל וטלפון",
  "השכרת כלי עבודה",
];

const categories = [
  { title: "SALE שישי 14-08-26", image: ASSETS.catSale, sale: true },
  { title: "מבצעי חיסול אוגוסט 2026!!!", image: ASSETS.catClearance, sale: true },
  { title: "מבצעים", image: ASSETS.catDeals },
  { title: "כלים חשמליים", image: ASSETS.catPower },
  { title: "מוצרי צינון ואוורור", image: ASSETS.catCooling },
  { title: "אביזרים וציוד מתכלה", image: ASSETS.catConsumables },
  { title: "כלים ידניים", image: ASSETS.catHand },
  { title: "ציוד לתעשייה", image: ASSETS.catIndustrial },
  { title: "ציוד ניקיון", image: ASSETS.catCleaning },
  { title: "ציוד גינון", image: ASSETS.catGarden },
  { title: "בגדי עבודה ובטיחות", image: ASSETS.catSafety },
  { title: "כלי מדידה וסימון", image: ASSETS.catMeasurement },
  { title: "ארונות / ארגזי כלים / תיקים", image: ASSETS.catStorage },
  { title: "לבית ולגינה", image: ASSETS.catHome },
  { title: "אביזרי חשמל וטלפון", icon: "electric" },
  { title: "השכרת כלי עבודה", icon: "rental" },
];

const products = [
  {
    title: "סט 3 כלים + שתי סוללות ואביזרים BOSCH",
    model: "GWS+GBH+GDR",
    price: "₪2,222",
    net: "₪1,883 ללא מע״מ",
    image: ASSETS.catPower,
  },
  {
    title: "מברגה/מקדחה רוטטת 18V ומארז ביטים מתנה! MAKITA",
    model: "DHP490WVEX",
    price: "₪565",
    net: "₪479 ללא מע״מ",
    image: ASSETS.catHand,
  },
  {
    title: "מנגל פחמים ברזילאי מקצועי 100*40 ס״מ GARDA",
    model: "19020",
    price: "₪349",
    net: "₪296 ללא מע״מ",
    image: ASSETS.productGarda,
  },
  {
    title: "עגלת כלים 7 מגירות מאובזרת 290 כלים TOUGHRED",
    model: "170119-008",
    price: "₪1,999",
    net: "₪1,694 ללא מע״מ",
    image: ASSETS.catStorage,
  },
  {
    title: "סט 7 כלים 20V DEWALT",
    model: "DCK849M3",
    price: "₪5,998",
    net: "₪5,083 ללא מע״מ",
    image: ASSETS.productDewalt,
  },
];

const slides = [
  {
    image: ASSETS.rentalHero,
    eyebrow: "השכרות כלים",
    title: "השכרות כלים למגוון עבודות",
    subtitle: "השכרה ליום / שבוע",
    action: "לכל הכלים לחצו כאן",
  },
  {
    image: ASSETS.powerHero,
    eyebrow: "מבצעים מקצועיים",
    title: "כלים שמסיימים את העבודה",
    subtitle: "אספקה מהירה לכל הארץ",
    action: "למבצעים החמים",
  },
  {
    image: ASSETS.safetyHero,
    eyebrow: "עבודה בטוחה",
    title: "ציוד מגן לעבודה ללא פשרות",
    subtitle: "מקצועיות מתחילה בבטיחות",
    action: "לכל ציוד הבטיחות",
  },
];

const infoLinks = [
  "האם נעלי עבודה מונעות החלקה בעבודה?",
  "מוצרים מומלצים לבידוד אקוסטי בין חדרים",
  "כלי העבודה שבעזרתם תוכלו לתחזק את הגינה",
  "מה זה מברגת אימפקט? ולמה היא משמשת?",
  "איך לבחור כלי עבודה חשמליים: המדריך המקצועי המלא",
  "בטיחות בעבודה עם כלי בנייה: כל מה שצריך לדעת",
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedNav, setExpandedNav] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const notify = (message: string) => toast.info(message, { duration: 2200 });

  const addToCart = (title: string) => {
    setCartCount((current) => current + 1);
    toast.success(`נוסף לסל: ${title}`, { duration: 1800 });
  };

  const toggleFavorite = (index: number) => {
    setFavorites((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <div className="site-shell" dir="rtl">
      <header className="site-header">
        <div className="header-top container">
          <a className="brand-lockup" href="#top" aria-label="דף הבית">
            <span className="brand-caption">כלי עבודה מקצועיים</span>
            <img src={ASSETS.logo} alt="לוגו כלי עבודה" />
          </a>

          <div className="header-search-wrap">
            <label className="header-search" aria-label="חיפוש מוצר">
              <Search size={20} strokeWidth={2.5} />
              <input placeholder="איזה מוצר אתם מחפשים?" onKeyDown={(event) => event.key === "Enter" && notify("החיפוש מוכן להצגת תוצאות")}/>
            </label>
            <p className="contact-line"><Phone size={14} /> ענבר 7, צומת סגולה פתח תקווה <b>*2263</b> <span>מס׳ ספק משרד הביטחון 11022264</span></p>
          </div>

          <div className="utility-nav">
            <button className="utility-pill" onClick={() => notify("ההשכרות זמינות עבורך")}>השכרות <Wrench size={15} /></button>
            <button className="utility-pill" onClick={() => notify("המועדפים שלך שמורים כאן")}>המועדפים <Heart size={15} /></button>
            <button className="utility-pill cart-pill" onClick={() => notify(`בסל הקניות שלך ${cartCount} מוצרים`)}>עגלה <ShoppingCart size={15} /><strong>{cartCount}</strong></button>
          </div>

          <button className="mobile-menu-button" aria-label="פתיחת תפריט" onClick={() => setMobileMenuOpen((open) => !open)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className="nav-rail">
          <nav className="main-nav container" aria-label="קטגוריות">
            {navItems.map((item) => (
              <button
                className={item.includes("SALE") ? "nav-link nav-link-sale" : "nav-link"}
                key={item}
                onClick={() => setExpandedNav((current) => (current === item ? null : item))}
              >
                {item}
              </button>
            ))}
          </nav>
          {expandedNav && (
            <div className="mega-menu">
              <div className="container mega-menu-inner">
                <strong>{expandedNav}</strong>
                <button onClick={() => notify("קטגוריה זו מוכנה להצגת מוצרים")}>מוצרים מובילים</button>
                <button onClick={() => notify("קטגוריה זו מוכנה להצגת מוצרים")}>מבצעים מיוחדים</button>
                <button onClick={() => notify("קטגוריה זו מוכנה להצגת מוצרים")}>כל המוצרים</button>
              </div>
            </div>
          )}
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => <button key={item} onClick={() => { setMobileMenuOpen(false); notify(`פתיחת ${item}`); }}>{item}</button>)}
          </div>
        )}
      </header>

      <main id="top">
        <section className="intro-section container">
          <h1>כלי עבודה וציוד משלים מהמותגים המובילים בעולם באספקה מהירה</h1>
          <div className="red-rule" />
        </section>

        <section className="category-section container" aria-label="קטגוריות ראשיות">
          <div className="category-grid">
            {categories.map((category) => (
              <button className="category-card" key={category.title} onClick={() => notify(`פתיחת ${category.title}`)}>
                <div className="category-art">
                  {category.image ? <img src={category.image} alt="" /> : category.icon === "electric" ? <Zap size={42} /> : <Wrench size={42} />}
                  {category.sale && <span className="sale-stamp">SALE</span>}
                </div>
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="carousel-section container" aria-label="באנרים ראשיים">
          <article className="hero-banner">
            <img className="hero-banner-media" src={slides[activeSlide].image} alt="" />
            <div className="hero-banner-tint" />
            <div className="hero-banner-content">
              <span>{slides[activeSlide].eyebrow}</span>
              <h2>{slides[activeSlide].title}</h2>
              <p>{slides[activeSlide].subtitle}</p>
              <button onClick={() => notify("המעבר לקטלוג מוכן")}>{slides[activeSlide].action} <ChevronLeft size={17} /></button>
            </div>
            <div className="carousel-controls" aria-label="שליטה בבאנר">
              <button onClick={() => setActiveSlide((current) => (current + slides.length - 1) % slides.length)} aria-label="הבאנר הקודם"><ChevronRight /></button>
              <div className="slide-dots">
                {slides.map((slide, index) => <button key={slide.title} className={index === activeSlide ? "active" : ""} onClick={() => setActiveSlide(index)} aria-label={`באנר ${index + 1}`} />)}
              </div>
              <button onClick={() => setActiveSlide((current) => (current + 1) % slides.length)} aria-label="הבאנר הבא"><ChevronLeft /></button>
            </div>
          </article>
        </section>

        <section className="products-area container" id="products">
          <aside className="catalog-sidebar">
            <label className="aside-search"><Search size={17} /><input placeholder="חפש באתר" onKeyDown={(event) => event.key === "Enter" && notify("החיפוש מוכן להצגת תוצאות")}/></label>
            <button className="login-button" onClick={() => notify("חלון הכניסה למערכת ייפתח כאן")}>כניסה למערכת <UserRound size={17} /></button>
            <button className="category-button" onClick={() => notify("הקטגוריות הראשיות פתוחות למעלה")}>קטגוריות ראשיות</button>
            <div className="secure-note"><span>מאובטח</span><b>SSL</b><p>רכישה בטוחה ומאובטחת</p></div>
          </aside>

          <div className="products-main">
            <div className="section-heading"><span>מוצרים נבחרים</span><div /></div>
            <div className="product-grid">
              {products.map((product, index) => {
                const favorite = favorites.includes(index);
                return (
                  <article className="product-card" key={product.title}>
                    <button className={favorite ? "favorite-button is-active" : "favorite-button"} aria-label="הוספה למועדפים" onClick={() => toggleFavorite(index)}><Heart fill={favorite ? "currentColor" : "none"} size={19} /></button>
                    <div className="product-image"><img src={product.image} alt={product.title} /></div>
                    <h3>{product.title}</h3>
                    <p className="model">דגם: <b>{product.model}</b></p>
                    <div className="price-block"><strong>{product.price}</strong><span>({product.net})</span></div>
                    <div className="product-actions">
                      <button className="details-button" onClick={() => notify(`פרטים נוספים: ${product.title}`)}>פרטים נוספים</button>
                      <button className="add-button" aria-label="הוספה לסל" onClick={() => addToCart(product.title)}><Plus size={18} /></button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="guide-strip">
          <div className="container guide-content">
            <div><span>ידע מקצועי</span><h2>הציוד שעושה את ההבדל: עבודה חכמה, יעילה ובטוחה</h2></div>
            <button onClick={() => notify("מאמרים מקצועיים יופיעו כאן")}>לכל המדריכים <ChevronLeft size={18} /></button>
          </div>
        </section>

        <section className="links-section container">
          <h2>דפי מידע באתר</h2>
          <div className="info-links">
            {infoLinks.map((link) => <button key={link} onClick={() => notify(`פתיחת המאמר: ${link}`)}>{link}</button>)}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <img src={ASSETS.logo} alt="לוגו כלי עבודה" />
          <p>כלי עבודה וציוד טכני באספקה מהירה. שירות מקצועי, פתרונות מדויקים ועבודה בטוחה.</p>
          <div><button onClick={() => notify("מדיניות פרטיות")}>מדיניות פרטיות</button><button onClick={() => notify("תקנון האתר")}>תקנון האתר</button></div>
        </div>
      </footer>

      <button className="accessibility-button" onClick={() => notify("תפריט נגישות פתוח")}>נגישות</button>
    </div>
  );
}
