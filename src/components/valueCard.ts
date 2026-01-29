export default function ValueCard(title: string, text: string, icon: string) {
  return `
    <div style="
      background: white;
      padding: 32px;
      border-radius: 14px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      text-align: center;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      cursor: default;
    "
    onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 28px rgba(0,0,0,0.12)'"
    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.08)'"
    >
      <div style="
        font-size: 48px;
        margin-bottom: 14px;
        line-height: 1;
      ">
        ${icon}
      </div>

      <h3 style="
        margin: 0 0 12px 0;
        font-size: 1.35rem;
        font-weight: 700;
        color: #222;
      ">
        ${title}
      </h3>

      <p style="
        color: #555;
        font-size: 1rem;
        line-height: 1.6;
        margin: 0;
      ">
        ${text}
      </p>
    </div>
  `;
}
