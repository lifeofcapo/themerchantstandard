export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { AdminDataTable } from "@/components/admin/admin-data-table";

export default async function AdminPage() {
  const [leads, purchases] = await Promise.all([
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
    prisma.purchase.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
  ]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 text-parchment">
      <h1 className="mb-8 font-display text-3xl">Admin Page</h1>

      <section className="mb-14">
        <AdminDataTable
          title="Paid cliens"
          rows={purchases}
          emailKey="email"
          fileName="purchases"
          columns={[
            { key: "email", label: "Email" },
            { key: "status", label: "Статус" },
            { key: "billingCountry", label: "Страна" },
            { key: "ipAddress", label: "IP" },
            { key: "createdAt", label: "Дата" },
          ]}
        />
      </section>

      <section>
        <AdminDataTable
          title="Заявки с /join"
          rows={leads}
          emailKey="email"
          fileName="leads"
          columns={[
            { key: "name", label: "Имя" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Телефон" },
            { key: "country", label: "Страна" },
            { key: "region", label: "Регион" },
            { key: "city", label: "Город" },
            { key: "ipAddress", label: "IP" },
            { key: "createdAt", label: "Дата" },
          ]}
        />
      </section>
    </main>
  );
}