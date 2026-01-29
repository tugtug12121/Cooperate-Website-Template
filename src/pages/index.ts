import { Request, Response } from "express";
import Header from "../components/header";
import Footer from "../components/footer";

export default function indexPage(req: Request, res: Response): string {
  return `
<html>
<head>
<title>Home</title>

<style>
body{margin:0;font-family:Arial,sans-serif;background:#fafafa;overflow-x:hidden;}

/* -------------------- GLOBAL ANIMATIONS -------------------- */
@keyframes fadeUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes slideIn{from{opacity:0;transform:translateX(40px);}to{opacity:1;transform:translateX(0);}}
@keyframes popIn{0%{opacity:0;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}}
@keyframes gradientFlow{0%{background-position:0% 50%;}100%{background-position:100% 50%;}}
@keyframes float{0%{transform:translateY(0);}50%{transform:translateY(-20px);}100%{transform:translateY(0);}}

/* -------------------- PARALLAX HERO -------------------- */
.hero{
  height:480px;
  padding:160px 20px;
  text-align:center;
  color:white;
  background:linear-gradient(135deg,#0052cc,#0078ff);
  position:relative;
  overflow:hidden;
  perspective:1000px;
}
.hero-layer{
  position:absolute;
  width:200%;
  height:200%;
  top:-50%;
  left:-50%;
  background:radial-gradient(circle,rgba(255,255,255,0.2),transparent 70%);
  animation:float 8s ease-in-out infinite;
}
.hero-title{
  font-size:3.8rem;
  font-weight:800;
  letter-spacing:-1px;
  background:linear-gradient(90deg,#fff,#dfe9ff,#fff);
  background-size:300%;
  -webkit-background-clip:text;
  color:transparent;
  animation:gradientFlow 6s linear infinite;
}
.hero-sub{
  font-size:1.4rem;
  opacity:0.9;
  margin-top:20px;
  animation:fadeUp 1.4s ease;
}

/* -------------------- SCROLL REVEAL -------------------- */
.reveal{opacity:0;transform:translateY(40px);transition:0.8s ease;}
.reveal.visible{opacity:1;transform:translateY(0);}

/* -------------------- 3D TILT CARDS -------------------- */
.tilt{
  transition:transform 0.2s ease,box-shadow 0.2s ease;
  transform-style:preserve-3d;
}
.tilt:hover{
  box-shadow:0 20px 40px rgba(0,0,0,0.15);
}

/* -------------------- PRICING -------------------- */
.pricing-card{
  background:white;
  padding:32px;
  border-radius:16px;
  box-shadow:0 8px 26px rgba(0,0,0,0.08);
  transition:0.3s;
}
.pricing-card:hover{
  transform:translateY(-8px);
  box-shadow:0 14px 34px rgba(0,0,0,0.12);
}

/* -------------------- FAQ ACCORDION -------------------- */
.faq-item{
  background:white;
  padding:20px;
  border-radius:12px;
  margin-bottom:12px;
  box-shadow:0 4px 14px rgba(0,0,0,0.08);
  cursor:pointer;
}
.faq-answer{
  display:none;
  margin-top:10px;
  color:#555;
}
</style>

</head>

<body>

${Header()}

<section class="hero" id="hero">
  <div class="hero-layer"></div>
  <h1 class="hero-title">Welcome to Our Platform</h1>
  <p class="hero-sub">Modern tools. Intelligent automation. Enterprise‑grade performance.</p>
</section>

<section style="max-width:1100px;margin:90px auto;padding:0 20px;">
  <h2 style="text-align:center;font-size:2.4rem;font-weight:700;color:#0b1f3b;" class="reveal">Why Choose Us</h2>

  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:26px;margin-top:40px;">
    <div class="tilt reveal" style="background:white;padding:32px;border-radius:16px;box-shadow:0 8px 26px rgba(0,0,0,0.08);text-align:center;">
      <div style="font-size:52px;margin-bottom:14px;">⚡</div>
      <h3 style="font-size:1.5rem;font-weight:700;color:#0b1f3b;">Fast</h3>
      <p style="color:#555;">Optimized for performance.</p>
    </div>

    <div class="tilt reveal" style="background:white;padding:32px;border-radius:16px;box-shadow:0 8px 26px rgba(0,0,0,0.08);text-align:center;">
      <div style="font-size:52px;margin-bottom:14px;">🔒</div>
      <h3 style="font-size:1.5rem;font-weight:700;color:#0b1f3b;">Secure</h3>
      <p style="color:#555;">Enterprise‑grade protection.</p>
    </div>

    <div class="tilt reveal" style="background:white;padding:32px;border-radius:16px;box-shadow:0 8px 26px rgba(0,0,0,0.08);text-align:center;">
      <div style="font-size:52px;margin-bottom:14px;">🚀</div>
      <h3 style="font-size:1.5rem;font-weight:700;color:#0b1f3b;">Scalable</h3>
      <p style="color:#555;">Built for growth.</p>
    </div>
  </div>
</section>

<section style="max-width:1100px;margin:90px auto;padding:0 20px;">
  <h2 style="text-align:center;font-size:2.4rem;font-weight:700;color:#0b1f3b;" class="reveal">Pricing</h2>

  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:26px;margin-top:40px;">
    <div class="pricing-card reveal">
      <h3 style="font-size:1.6rem;font-weight:700;">Starter</h3>
      <p style="font-size:2rem;font-weight:800;color:#0052cc;">$9/mo</p>
      <p>Perfect for individuals and small teams.</p>
    </div>

    <div class="pricing-card reveal">
      <h3 style="font-size:1.6rem;font-weight:700;">Pro</h3>
      <p style="font-size:2rem;font-weight:800;color:#0052cc;">$29/mo</p>
      <p>Advanced features for growing businesses.</p>
    </div>

    <div class="pricing-card reveal">
      <h3 style="font-size:1.6rem;font-weight:700;">Enterprise</h3>
      <p style="font-size:2rem;font-weight:800;color:#0052cc;">Custom</p>
      <p>Tailored solutions for large organizations.</p>
    </div>
  </div>
</section>

<section style="max-width:900px;margin:90px auto;padding:0 20px;">
  <h2 style="text-align:center;font-size:2.4rem;font-weight:700;color:#0b1f3b;" class="reveal">FAQ</h2>

  <div style="margin-top:40px;">
    <div class="faq-item reveal">
      <strong>How does the platform work?</strong>
      <div class="faq-answer">Our platform uses intelligent automation to streamline your workflow.</div>
    </div>

    <div class="faq-item reveal">
      <strong>Is my data secure?</strong>
      <div class="faq-answer">Yes, we use enterprise‑grade encryption and security protocols.</div>
    </div>

    <div class="faq-item reveal">
      <strong>Do you offer support?</strong>
      <div class="faq-answer">We offer 24/7 support for all customers.</div>
    </div>
  </div>
</section>

${Footer()}

<script src="/main.js"></script>

</body>
</html>
  `;
}
