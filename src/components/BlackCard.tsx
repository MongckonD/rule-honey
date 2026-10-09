import { BLACK_ITEMS, BLACK_TITLE } from "../data/black";

export default function BlackCard() {
  return (
    <section className="card">
      <h2>
        
        <span>{BLACK_TITLE}</span>
      </h2>
      <ol>
        {BLACK_ITEMS.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
    </section>
  );
}