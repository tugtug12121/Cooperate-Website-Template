export interface SectionProps {
  title?: string;
  content: string;
  center?: boolean;
  id?: string;
  maxWidth?: number;
  padding?: string;
  background?: "none" | "light" | "dark" | "gradient";
  tag?: "section" | "div" | "article";
  animate?: boolean;
}

export default function Section(title: string, content: string): string {
  return `
    <section style="max-width:1100px;margin:60px auto;padding:0 20px;">
      <h2 style="text-align:center;margin-bottom:30px;font-size:2rem;">${title}</h2>
      ${content}
    </section>
  `;
}

