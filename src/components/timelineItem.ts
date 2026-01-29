export default function TimelineItem(year: string, text: string) {
  return `
    <div style="
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 32px;
    ">
      <!-- Timeline Dot -->
      <div style="
        width: 14px;
        height: 14px;
        background: #0078ff;
        border-radius: 50%;
        margin-top: 4px;
        flex-shrink: 0;
        box-shadow: 0 0 0 4px rgba(0,120,255,0.15);
      "></div>

      <!-- Content -->
      <div style="
        padding-left: 12px;
        border-left: 3px solid #0078ff;
      ">
        <h3 style="
          margin: 0;
          font-size: 1.35rem;
          font-weight: 700;
          color: #222;
        ">
          ${year}
        </h3>

        <p style="
          margin: 8px 0 0 0;
          color: #555;
          line-height: 1.6;
          font-size: 1rem;
        ">
          ${text}
        </p>
      </div>
    </div>
  `;
}
