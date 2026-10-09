import { FOOTBALL_ITEMS, FOOTBALL_TITLE } from "../data/football";

export default function FootballCard() {
  return (
    <section className="card">
      <h2>
        
        <span>{FOOTBALL_TITLE}</span>
      </h2>
      <ol>
        {FOOTBALL_ITEMS.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
    </section>
  );
}