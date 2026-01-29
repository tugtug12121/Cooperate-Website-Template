export default function Footer(): string {
  const year = new Date().getFullYear();

  return `
<footer style="
  background:#111;
  color:#bbb;
  padding:25px 20px;
  position:relative;
  text-align:center;
  border-top:1px solid #222;
">

  <div style="font-weight:600;color:#fff;margin-bottom:6px;">
    CorpBrand
  </div>

  <div style="font-size:0.9rem;color:#888;line-height:1.5;margin-bottom:10px;">
    Empowering modern businesses with intelligent tools and enterprise‑grade performance.
  </div>

  <div style="font-size:0.85rem;color:#666;">
    © ${year} CorpBrand — All Rights Reserved
  </div>

  <div style="
    position:absolute;
    right:12px;
    bottom:10px;
    font-size:0.8rem;
    color:#555;
  ">
    <span style="color:#ff4d88;">❤</span> made with love au
  </div>

</footer>
  `;
}
