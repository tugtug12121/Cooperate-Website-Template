/* ----------------------------------------------------------
   SCROLL REVEAL
---------------------------------------------------------- */
function revealOnScroll(){
  document.querySelectorAll('.reveal').forEach((el, i)=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80){
      setTimeout(()=> el.classList.add('visible'), i * 120);
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* ----------------------------------------------------------
   PARALLAX HERO
---------------------------------------------------------- */
const hero = document.querySelector('.hero');
const heroLayer = document.querySelector('.hero-layer');

if(hero && heroLayer){
  hero.addEventListener('mousemove', e=>{
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroLayer.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
  });

  window.addEventListener('scroll', ()=>{
    hero.style.backgroundPositionY = window.scrollY * 0.3 + "px";
  });
}

/* ----------------------------------------------------------
   3D TILT CARDS
---------------------------------------------------------- */
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const centerX = r.width / 2;
    const centerY = r.height / 2;

    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = ((x - centerX) / 20);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0,0,0,0.15)`;
  });

  card.addEventListener('mouseleave', ()=>{
    card.style.transform = 'rotateX(0) rotateY(0)';
    card.style.boxShadow = '0 8px 26px rgba(0,0,0,0.08)';
  });
});

/* ----------------------------------------------------------
   FAQ ACCORDION (CSP‑SAFE)
---------------------------------------------------------- */
document.querySelectorAll(".faq-item").forEach(item=>{
  item.addEventListener("click", ()=>{
    const ans = item.querySelector(".faq-answer");
    if(ans.style.maxHeight){
      ans.style.maxHeight = null;
    } else {
      ans.style.maxHeight = ans.scrollHeight + "px";
    }
  });
});
