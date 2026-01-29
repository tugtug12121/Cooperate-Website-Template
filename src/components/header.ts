export default function Header() {
  return `
    <header style="
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.85);
      border-bottom: 1px solid rgba(0,0,0,0.08);
      padding: 14px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    ">
      <div style="
        font-size: 1.8rem;
        font-weight: 700;
        color: #0052cc;
        letter-spacing: -0.5px;
      ">
        CorpBrand
      </div>

      <nav style="display: flex; gap: 28px; align-items: center;">
        <a href="/" style="
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: 0.25s;
        " onmouseover="this.style.color='#0052cc'" onmouseout="this.style.color='#333'">
          Home
        </a>

        <a href="/about" style="
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: 0.25s;
        " onmouseover="this.style.color='#0052cc'" onmouseout="this.style.color='#333'">
          About
        </a>

        <a href="/services" style="
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: 0.25s;
        " onmouseover="this.style.color='#0052cc'" onmouseout="this.style.color='#333'">
          Services
        </a>

        <a href="/contact" style="
          padding: 10px 18px;
          background: #0052cc;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.25s;
        " onmouseover="this.style.background='#003f99'" onmouseout="this.style.background='#0052cc'">
          Contact
        </a>
      </nav>
    </header>
  `;
}
