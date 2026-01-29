export default function Feature(title: string, text: string, icon: string) {
  return `
    <div style="
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      text-align: center;
    ">
      <div style="font-size: 40px; margin-bottom: 15px;">${icon}</div>
      <h3 style="margin-bottom: 10px;">${title}</h3>
      <p style="color: #555;">${text}</p>
    </div>
  `;
}
