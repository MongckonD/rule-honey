import type { Rule } from "../types";

type Props = { rule: Rule };

export default function RuleCard({ rule }: Props) {
  return (
    <section className="card">
      <h2>
        <b>{rule.no}</b>
        <span>{rule.title}</span>
      </h2>
      <ul>
        {rule.items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  );
}