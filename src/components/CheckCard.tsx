import { CHECK_ITEMS, CHECK_TITLE } from "../data/check";

export default function CheckCard() {
  return (
    <section className="card">
      <h2>
        <b>📁</b>
        <span>{CHECK_TITLE}</span>
      </h2>
      <ul>
        {CHECK_ITEMS.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  );
}