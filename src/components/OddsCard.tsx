import { ODDS_TABLES } from "../data/odds";

const CHIP: Record<string, string> = {
  เสียเต็ม: "lose",
  เสียครึ่ง: "half-lose",
  คืนทุน: "push",
  ได้ครึ่ง: "half-win",
  ได้เต็ม: "win",
};

export default function OddsCard() {
  return (
    <>
      {ODDS_TABLES.map((t) => (
        <section className="card" key={t.title}>
          <h2>
            <span>{t.title}</span>
          </h2>
          <div className="table-wrap">
            <table className="fee-table odds-table">
              <thead>
                <tr>
                  {t.head.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((r) => (
                  <tr key={r[0]}>
                    {r.map((c, i) => (
                      <td key={i}>
                        {CHIP[c] ? <span className={`chip ${CHIP[c]}`}>{c}</span> : c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </>
  );
}