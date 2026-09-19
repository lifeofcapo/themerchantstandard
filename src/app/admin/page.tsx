export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { AdminDataTable } from "@/components/admin/admin-data-table";
import { fullCountryName } from "@/lib/country-name";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const [leadsRaw, purchasesRaw] = await Promise.all([
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
    prisma.purchase.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
  ]);

  const purchases = purchasesRaw.map((p) => ({
    ...p,
    billingCountry: fullCountryName(p.billingCountry),
  }));

  const leads = leadsRaw.map((l) => ({
    ...l,
    country: fullCountryName(l.country),
  }));

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 text-parchment">
      <h1 className="mb-8 font-display text-3xl">Admin Page</h1>

      <section className="mb-14">
        <AdminDataTable
          title="Paid clients"
          rows={purchases}
          emailKey="email"
          fileName="purchases"
          columns={[
            { key: "email", label: "Email" },
            { key: "status", label: "Status" },
            { key: "plan", label: "Plan" },
            { key: "billingCountry", label: "Country" },
            { key: "billingState", label: "Region" },
            { key: "billingCity", label: "City" },
            { key: "ipAddress", label: "IP" },
            { key: "createdAt", label: "Date" },
          ]}
        />
      </section>

      <section>
        <AdminDataTable
          title="Applications from /free-training"
          rows={leads}
          emailKey="email"
          fileName="leads"
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Phone" },
            { key: "country", label: "Country" },
            { key: "ipAddress", label: "IP" },
            { key: "createdAt", label: "Date" },
          ]}
        />
      </section>
    </main>
  );
}