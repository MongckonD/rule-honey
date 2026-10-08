import { RULES } from "./data/rules";
import RuleCard from "./components/RuleCard";

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="deco" aria-hidden>🍯 🌸 🎀 🌸 🍯</div>
        <h1>เกณฑ์การตัดสินน้ำผึ้ง</h1>
        <p>กฎกลางเฉพาะ ข้อ 1–19 · เสียงของกลางถือเป็นที่สิ้นสุด</p>
      </header>

      <main>
        {RULES.map((rule) => (
          <RuleCard key={rule.no} rule={rule} />
        ))}
        <footer>🎀 เสียงของกลางถือเป็นที่สิ้นสุด 🎀</footer>
      </main>
    </div>
  );
}