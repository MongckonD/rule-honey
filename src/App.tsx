import { useEffect, useState } from "react";
import { RULES } from "./data/rules";
import RuleCard from "./components/RuleCard";
import FeeCard from "./components/FeeCard";
import CheckCard from "./components/CheckCard";

type Page = "fees" | "check" | "rules";

const PAGES: { id: Page; label: string }[] = [
  { id: "fees", label: "1 · ค่าธรรมเนียม" },
  { id: "check", label: "2 · เช็คไฟล์NAM" },
  { id: "rules", label: "3 · กฎกลาง" },
];

const SUBTITLE: Record<Page, string> = {
  fees: "ค่าธรรมเนียมและกฎการโอน",
  check: "กฎการเช็คไฟล์NAM",
  rules: "ข้อ 1-21 คือ กฎกลาง Nam autthaporn เสียงของกลางถือเป็นที่สิ้นสุด",
};

const fromHash = (): Page => {
  const h = location.hash.replace("#", "");
  return PAGES.some((p) => p.id === h) ? (h as Page) : "fees";
};

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

  const next = PAGES[(PAGES.findIndex((p) => p.id === page) + 1) % PAGES.length];

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
        {page === "fees" && <FeeCard />}
        {page === "check" && <CheckCard />}
        {page === "rules" &&
          RULES.map((rule) => <RuleCard key={rule.no} rule={rule} />)}

        <button className="next-page" onClick={() => go(next.id)}>
          ไปหน้า {next.label} →
        </button>

        <footer>🎀 เสียงของกลางถือเป็นที่สิ้นสุด 🎀</footer>
      </main>
    </div>
  );
}