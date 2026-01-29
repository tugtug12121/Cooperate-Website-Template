export default function Testimonial(name: string, role: string, quote: string): string {
  return `
    <div style="
      background:#ffffff;
      padding:32px;
      border-radius:14px;
      box-shadow:0 6px 20px rgba(0,0,0,0.08);
      border-left:6px solid #0078ff;
      transition:transform 0.25s ease, box-shadow 0.25s ease;
    "
    onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 10px 28px rgba(0,0,0,0.12)'"
    onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 6px 20px rgba(0,0,0,0.08)'"
    >
      <p style="
        font-style:italic;
        margin:0 0 18px 0;
        color:#333;
        line-height:1.6;
        font-size:1.05rem;
      ">
        “${quote}”
      </p>

      <div style="font-weight:700;font-size:1.1rem;color:#222;margin-bottom:4px;">
        ${name}
      </div>

      <div style="color:#777;font-size:0.95rem;">
        ${role}
      </div>
    </div>
  `;
}
