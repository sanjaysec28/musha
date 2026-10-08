const root=document.getElementById('app');
const img = {
 hero:"Musha Empire Luxury Salon Interior.png",
 woman:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85",
 spa:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
 hair:"https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85",
 man:"https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
 nails:"https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
 face:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
 massage:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85",
 salon:"https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
 color:"https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=85",
 beauty:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
 woman2:"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85"
};

const nav = `
<header class="site-header">
 <div class="header-inner">
  <button class="menu-btn" onclick="toggleMenu()"><span></span></button>
  <nav class="desktop-nav">
   <a href="#/">Home</a><a href="#/services">Services</a><a href="#/about">About</a><a href="#/gallery">Gallery</a>
  </nav>
  <a href="#/" class="logo"><div class="logo-mark">M</div><div class="logo-name">MUSHA EMPIRE</div><div class="logo-sub">UNISEX SALON</div></a>
  <div style="display:flex;gap:8px;align-items:center">
   <nav class="desktop-nav"><a href="#/offers">Offers</a><a href="#/reviews">Reviews</a><a href="#/contact">Contact</a><a href="#/booking">Book</a></nav>
   <button class="phone-btn" onclick="location.href='tel:+918012345678'">☎</button>
  </div>
 </div>
</header>
<div id="mobileMenu" class="mobile-menu">
 <a href="#/" onclick="toggleMenu()">Home</a><a href="#/services" onclick="toggleMenu()">Services</a><a href="#/about" onclick="toggleMenu()">About</a><a href="#/gallery" onclick="toggleMenu()">Gallery</a><a href="#/offers" onclick="toggleMenu()">Offers</a><a href="#/reviews" onclick="toggleMenu()">Reviews</a><a href="#/contact" onclick="toggleMenu()">Contact</a>
 <a href="#/booking" class="btn" onclick="toggleMenu()">Book Appointment →</a>
</div>`;

const footer=`
<footer class="footer"><div class="footer-inner">
 <div class="footer-logo">Musha Empire</div>
 <div class="footer-grid">
  <div><h4>Musha Empire</h4><p>Premium unisex salon & beauty lounge for hair, skin, nails and spa.</p><p>✦  Premium care. Personal style.</p></div>
  <div><h4>Explore</h4><a href="#/">Home</a><br><a href="#/services">Services</a><br><a href="#/about">About</a><br><a href="#/gallery">Gallery</a></div>
  <div><h4>Experience</h4><a href="#/offers">Offers</a><br><a href="#/reviews">Reviews</a><br><a href="#/booking">Booking</a></div>
  <div><h4>Visit</h4><p>123 Beauty Street,<br>Gulshan 2, Chennai</p><p>+91 80 1234 5678</p></div>
 </div>
 <div class="footer-bottom"><span>© 2026 Musha Empire</span><span>All rights reserved.</span></div>
</div></footer>`;

function shell(content){root.innerHTML=nav+content+footer; window.scrollTo({top:0,behavior:"instant"});}

function home(){
 return `<main>
 <section class="hero">
  <div class="hero-photo"><img src="${img.hero}" alt=""></div>
  <div class="hero-content fade-up">
   <div class="hero-kicker">Premium Unisex Salon & Beauty Lounge</div>
   <h1>Style<br>For <em>Everyone.</em></h1>
   <p class="hero-copy">Hair • Skin • Nails • Spa — premium grooming and beauty experiences designed around you.</p>
   <a class="btn" href="#/booking">Book Appointment →</a>
   <div class="dots"><i class="dot active"></i><i class="dot"></i><i class="dot"></i></div>
  </div>
 </section>
 <div class="page">
  <section class="section"><div class="section-head"><div class="eyebrow">Why Musha Empire?</div><h2>Look good. Feel amazing.</h2></div>
   <div class="why-grid grid">${why("✂","Expert","Stylists")}${why("▣","Premium","Products")}${why("♢","Hygienic","& Safe")}${why("♧","Unisex","Friendly")}</div>
   <div class="banner"><img src="${img.man}" alt=""><div class="banner-copy"><h3>Look Good,<br>Feel Amazing.</h3><p>Your style. Our passion.</p></div></div>
  </section>
  <section class="section"><div class="section-head"><div class="eyebrow">Signature experience</div><h2>More than a salon.<br>It’s a feeling.</h2><p class="lead">From precision haircuts to relaxing spa rituals, every visit is crafted to leave you feeling your absolute best.</p></div><a class="btn" href="#/services">Explore Services →</a></section>
 </div></main>`;
}
function why(icon,a,b){return `<div class="why-item"><div class="why-icon">${icon}</div><b>${a}</b><small>${b}</small></div>`}

function services(){
 const data=[["Hair Styling & Haircut", "For Men & Women",img.man],["Hair Color & Treatments","Trendy Looks",img.color],["Facial & Skin Treatments","Glow & Bright",img.face],["Nails & Hand Care","Manicure & Pedicure",img.nails],["Spa & Relaxation","Massage & Wellness",img.massage],["Bridal & Occasion","Complete Glam",img.woman2]];
 return `<main class="page"><div class="breadcrumb">Home <span>›</span> Services</div><div class="page-title"><h1>Our Services</h1><p>Complete Grooming Solutions For Everyone.</p></div><div class="filter"><button class="active">All</button><button>Hair</button><button>Skin</button><button>Nails</button><button>Spa</button></div><div class="service-list">${data.map(x=>`<a href="#/booking" class="service-row card"><img src="${x[2]}" alt=""><div><h3>${x[0]}</h3><p>${x[1]}</p></div><div class="arrow">→</div></a>`).join("")}</div><div class="banner"><img src="${img.woman}" alt=""><div class="banner-copy"><h3>Premium Care<br>For You.</h3><p>Personalized beauty, every visit.</p></div></div></main>`;
}
function about(){
 return `<main class="page"><div class="breadcrumb">Home <span>›</span> About</div><div class="about-hero-img"><img src="${img.salon}" alt=""></div><div class="about-copy"><h2>More Than a Saloon,<br>It’s an Experience.</h2><p class="lead">At Musha Empire, we believe grooming is not just a service, it’s a confidence boost. Our premium unisex salon and beauty lounge is designed to help you look good, feel good, and be your best every day.</p><div class="feature-grid grid">${why("♢","Modern &","Premium Ambience")}${why("♙","Trained","Professionals")}${why("♧","Hygiene","First Approach")}${why("♜","Unisex","Friendly")}</div></div><section class="story"><img src="${img.woman2}" alt=""><div class="story-text"><h2>Our Story</h2><p>Built with a passion for beauty, style and self-care. Musha Empire is a space where everyone belongs.</p><a href="#/booking" class="btn">Experience Musha →</a></div></section></main>`;
}
function gallery(){
 const pics=[img.man,img.woman,img.color,img.hair,img.face,img.nails,img.massage,img.woman2,img.spa,img.salon,img.hero,img.beauty];
 return `<main class="page"><div class="breadcrumb">Home <span>›</span> Gallery</div><div class="page-title"><h1>Our Gallery</h1><p>Real People. Real Transformations.</p></div><div class="filter"><button class="active">All</button><button>Hair</button><button>Skin</button><button>Nails</button><button>Spa</button></div><div class="gallery-grid">${pics.map((p,i)=>`<div class="g"><img src="${p}" alt="Musha Empire transformation ${i+1}"></div>`).join("")}</div><div class="banner"><img src="${img.woman2}" alt=""><div class="banner-copy"><h3>Transformations<br>That Speak.</h3></div></div></main>`;
}
function offers(){
 const data=[["FLAT","20% OFF","ON HAIR COLOR",img.color],["Bridal","Packages","Starting from ₹4,999",img.woman],["Festival Offer","15% OFF","On Skin Treatments",img.face],["Combo Offers","Hair + Skin + Nails","Special Deals",img.spa]];
 return `<main class="page"><div class="breadcrumb">Home <span>›</span> Offers</div><div class="page-title"><h1>Special Offers</h1><p>Great Looks, Greater Value.</p></div><div class="offer-grid">${data.map(x=>`<div class="offer"><img src="${x[3]}" alt=""><div class="offer-content"><h3>${x[0]}</h3><b>${x[1]}</b><p>${x[2]}</p><a href="#/booking" class="mini-btn">Book Now →</a></div></div>`).join("")}</div></main>`;
}
function reviews(){
 const reviews=[["Aishwarya K.",img.woman,"Amazing experience! The staff are so friendly and professional. Loved the service."],["Rahul S.",img.man,"Best haircut I’ve ever had. Clean and premium ambience. Highly recommended."],["Sneha V.",img.woman2,"Loved the facial treatment. My skin feels so fresh and glowing."],["Karthik M.",img.man,"Great service, skilled professionals, and a very relaxing atmosphere."]];
 return `<main class="page"><div class="breadcrumb">Home <span>›</span> Reviews</div><div class="page-title"><h1>What Our Clients Say</h1><p>Real Experiences. Real Happiness.</p></div><div class="review-list">${reviews.map(r=>`<article class="review card"><div class="review-top"><div class="avatar"><img src="${r[1]}" alt=""></div><div><b style="font-size:12px">${r[0]}</b><div class="stars">★★★★★</div></div></div><p>“${r[2]}”</p></article>`).join("")}</div><div style="text-align:center;margin-top:18px"><button class="btn" onclick="toast('More reviews coming soon')">See More Reviews →</button></div></main>`;
}
function contact(){
 return `<main class="page"><div class="breadcrumb">Home <span>›</span> Contact</div><div class="page-title"><h1>Contact Us</h1><p>We’re Here For You.</p></div><div class="contact-layout"><div><div class="map"><iframe src="https://www.openstreetmap.org/export/embed.html?bbox=80.18%2C12.98%2C80.30%2C13.08&layer=mapnik&marker=13.03%2C80.24"></iframe></div></div><div class="contact-list">${contactItem("⌖","Our Location","123 Beauty Street, Gulshan 2, Chennai")}${contactItem("⌕","Call Us","+91 80 1234 5678")}${contactItem("✉","Email Us","mushaempire@gmail.com")}${contactItem("◷","Working Hours","Mon - Sun · 10:00 AM - 10:00 PM")}</div></div><div style="margin-top:16px"><a class="btn" href="https://maps.google.com/?q=Chennai" target="_blank">Get Directions →</a></div><div class="grid" style="grid-template-columns:1fr 1fr;margin-top:12px"><a class="card" style="padding:15px;text-align:center" href="tel:+918012345678">☎ Call</a><a class="card" style="padding:15px;text-align:center;color:#168b45" href="https://wa.me/918012345678" target="_blank">● WhatsApp</a></div></main>`;
}
function contactItem(i,t,p){return `<div class="contact-item card"><div class="contact-icon">${i}</div><div><b>${t}</b><p>${p}</p></div></div>`}
function booking(){
 const steps=[["♙","Choose Gender","Men, Women or Other"],["▣","Select Service","Pick from our wide range"],["▣","Choose Date","Select your preferred date"],["◷","Pick Time Slot","30-minute convenient slots"],["◎","Confirm Details","Review and confirm your booking"]];
 return `<main class="page"><div class="breadcrumb">Home <span>›</span> Book Appointment</div><div class="page-title"><h1>Book Your<br>Appointment</h1><p>Look Good, Feel Amazing.</p></div><div class="booking">${steps.map((s,i)=>`<div class="booking-step card" onclick="toast('${s[1]} selected')"><div class="step-icon">${s[0]}</div><div><b>${s[1]}</b><small>${s[2]}</small></div><div class="check">›</div></div>`).join("")}<button class="btn final-book" onclick="toast('Appointment request started ✓')">Start Booking →</button></div><div class="salon-photo"><img src="${img.salon}" alt=""></div></main>`;
}

function router(){
 const p=location.hash.replace("#","")||"/";
 let content=p==="/"?home():p==="/services"?services():p==="/about"?about():p==="/gallery"?gallery():p==="/offers"?offers():p==="/reviews"?reviews():p==="/contact"?contact():p==="/booking"?booking():home();
 shell(content);
}
function toggleMenu(){document.getElementById("mobileMenu")?.classList.toggle("open")}
function toast(t){const el=document.querySelector(".toast")||Object.assign(document.body.appendChild(document.createElement("div")),{className:"toast"});el.textContent=t;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2200)}
window.addEventListener("hashchange",router); router();
