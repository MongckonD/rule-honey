import { FEES, FEE_ITEMS, FEE_NOTE } from "../data/fees";

export default function FeeCard() {
  return (
    <>
      <section className="card">
        <h2>
          <b>💰</b>
          <span>ค่าธรรมเนียม ({FEE_NOTE})</span>
        </h2>
        <table className="fee-table">
          <thead>
            <tr>
              <th>จำนวนเงิน (บาท)</th>
              <th>ค่าธรรมเนียม</th>
            </tr>
          </thead>
          <tbody>
            {FEES.map((f) => (
              <tr key={f.range}>
                <td>{f.range}</td>
                <td>{f.fee} บาท</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card">
        <h2>
          <b>📋</b>
          <span>กฎการโอน</span>
        </h2>
        <ul>
          {FEE_ITEMS.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>
    </>
  );
}