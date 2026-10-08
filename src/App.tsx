import { useEffect, useState } from "react";
import { RULES } from "./data/rules";
import RuleCard from "./components/RuleCard";
import FeeCard from "./components/FeeCard";

type Page = "fees" | "rules";

const PAGES: { id: Page; label: string }[] = [
  { id: "fees", label: "1 · ค่าธรรมเนียม" },
  { id: "rules", label: "2 · กฎกลาง" },
];

const SUBTITLE: Record<Page, string> = {
  fees: "ค่าธรรมเนียมและกฎการโอน · เสียงของกลางถือเป็นที่สิ้นสุด",
  rules: "กฎกลางเฉพาะ ข้อ 1–19 · เสียงของกลางถือเป็นที่สิ้นสุด",
};

const fromHash = (): Page => (location.hash === "#rules" ? "rules" : "fees");

export default function App() {
  const [page, setPage] = useState<Page>(fromHash);

  useEffect(() => {
    const onHash = () => {
      setPage(fromHash());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (p: Page) => {
    location.hash = p;
  };

  const other = PAGES.find((p) => p.id !== page)!;

  return (
    <div className="app">
      <header className="hero">
        <div className="script" aria-hidden>Namphueng</div>
        <h1><span className="heart">♥</span> เกณฑ์การตัดสินน้ำผึ้ง <span className="heart">♥</span></h1>
        <p className="sub">{SUBTITLE[page]}</p>
      </header>

      <nav className="pager" aria-label="เลือกหน้า">
        {PAGES.map((p) => (
          <button
            key={p.id}
            className={p.id === page ? "active" : ""}
            aria-current={p.id === page ? "page" : undefined}
            onClick={() => go(p.id)}
          >
            {p.label}
          </button>
        ))}
      </nav>

      <main>
        {page === "fees" ? (
          <FeeCard />
        ) : (
          RULES.map((rule) => <RuleCard key={rule.no} rule={rule} />)
        )}

        <button className="next-page" onClick={() => go(other.id)}>
          ไปหน้า {other.label} →
        </button>

        <footer>🎀 เสียงของกลางถือเป็นที่สิ้นสุด 🎀</footer>
      </main>
    </div>
  );
}