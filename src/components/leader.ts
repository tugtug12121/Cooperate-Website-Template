export default function Leader(name: string, role: string, bio: string) {
  return `
    <div style="
      background: white;
      padding: 30px;
      border-radius: 14px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    "
    onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 28px rgba(0,0,0,0.12)'"
    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.08)'"
    >
      <h3 style="
        margin: 0 0 6px 0;
        font-size: 1.4rem;
        font-weight: 700;
        color: #222;
      ">
        ${name}
      </h3>

      <div style="
        font-weight: 600;
        color: #0078ff;
        margin-bottom: 12px;
        font-size: 1rem;
      ">
        ${role}
      </div>

      <p style="
        margin: 0;
        color: #555;
        line-height: 1.6;
        font-size: 0.95rem;
      ">
        ${bio}
      </p>
    </div>
  `;
}
