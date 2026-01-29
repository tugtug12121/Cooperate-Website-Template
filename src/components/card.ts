export default function Card(title: string, content: string) {
  return `
    <div style="
      background:white;
      padding:20px;
      border-radius:12px;
      box-shadow:0 4px 12px rgba(0,0,0,0.1);
      margin-bottom:20px;
    ">
      <h2>${title}</h2>
      <p>${content}</p>
    </div>
  `;
}
