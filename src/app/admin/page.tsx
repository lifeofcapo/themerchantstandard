export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const [leads, purchases, visits] = await Promise.all([
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
    prisma.purchase.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
    prisma.visit.findMany({ orderBy: { createdAt: "desc" }, take: 300 }),
  ]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 text-parchment">
      <h1 className="mb-8 font-display text-3xl">Admin page</h1>

      <section className="mb-12">
        <h2 className="mb-3 font-display text-xl">Paid clients ({purchases.length})</h2>
        <Table
          rows={purchases}
          columns={["email", "status", "billingCountry", "ipAddress", "createdAt"]}
        />
      </section>

      <section className="mb-12">
        <h2 className="mb-3 font-display text-xl">Заявки с /join ({leads.length})</h2>
        <Table
          rows={leads}
          columns={["name", "email", "phone", "country", "region", "city", "ipAddress", "createdAt"]}
        />
      </section>

      <section>
        <h2 className="mb-3 font-display text-xl">Посещения сайта ({visits.length})</h2>
        <Table
          rows={visits}
          columns={["path", "country", "region", "city", "ipAddress", "createdAt"]}
        />
      </section>
    </main>
  );
}

function Table<T extends Record<string, unknown>>({ rows, columns }: { rows: T[]; columns: (keyof T)[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line">
      <table className="w-full text-left text-sm">
        <thead className="bg-panel-2">
          <tr>
            {columns.map((c) => (
              <th key={String(c)} className="px-3 py-2 font-mono text-xs uppercase text-parchment/50">
                {String(c)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-line">
              {columns.map((c) => (
                <td key={String(c)} className="px-3 py-2 text-parchment/80">
                  {row[c] instanceof Date ? (row[c] as Date).toLocaleString() : String(row[c] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}