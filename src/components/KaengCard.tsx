import { KAENG_ITEMS, KAENG_TITLE } from "../data/kaeng";

export default function KaengCard() {
  return (
    <section className="card">
      <h2>
        
        <span>{KAENG_TITLE}</span>
      </h2>
      <ol>
        {KAENG_ITEMS.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
    </section>
  );
}