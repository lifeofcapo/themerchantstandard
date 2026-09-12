"use client";

import * as React from "react";
import { Copy, Check, FileSpreadsheet, ClipboardList } from "lucide-react";
import * as XLSX from "xlsx";

type Column<T> = {
  key: keyof T;
  label: string;
};

type AdminDataTableProps<T extends Record<string, unknown>> = {
  title: string;
  rows: T[];
  columns: Column<T>[];
  emailKey: keyof T;
  fileName: string;
};

export function AdminDataTable<T extends Record<string, unknown>>({
  title,
  rows,
  columns,
  emailKey,
  fileName,
}: AdminDataTableProps<T>) {
  const [copiedCell, setCopiedCell] = React.useState<string | null>(null);
  const [copiedAll, setCopiedAll] = React.useState(false);

  async function copyValue(value: string, cellId: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedCell(cellId);
      setTimeout(() => setCopiedCell((c) => (c === cellId ? null : c)), 1200);
    } catch {
      // clipboard недоступен (например, не https) — молча игнорируем
    }
  }

  async function copyAllEmails() {
    const emails = Array.from(
      new Set(rows.map((r) => String(r[emailKey] ?? "")).filter(Boolean))
    );
    try {
      await navigator.clipboard.writeText(emails.join(", "));
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 1500);
    } catch {
      // ignore
    }
  }

  function exportToExcel() {
    const data = rows.map((row) =>
      Object.fromEntries(
        columns.map((c) => [
          c.label,
          row[c.key] instanceof Date
            ? (row[c.key] as Date).toLocaleString()
            : String(row[c.key] ?? ""),
        ])
      )
    );
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, title.slice(0, 31));
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl text-parchment">
          {title} ({rows.length})
        </h2>

        <div className="flex gap-2">
          <button
            onClick={copyAllEmails}
            className="flex items-center gap-1.5 rounded-lg border border-line bg-panel px-3 py-1.5 text-xs text-parchment/70 transition-colors hover:border-brass hover:text-parchment"
          >
            {copiedAll ? (
              <>
                <Check className="h-3.5 w-3.5 text-brass" /> Скопировано
              </>
            ) : (
              <>
                <ClipboardList className="h-3.5 w-3.5" /> Копировать все email
              </>
            )}
          </button>

          <button
            onClick={exportToExcel}
            className="flex items-center gap-1.5 rounded-lg border border-line bg-panel px-3 py-1.5 text-xs text-parchment/70 transition-colors hover:border-brass hover:text-parchment"
          >
            <FileSpreadsheet className="h-3.5 w-3.5" /> Экспорт в Excel
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-panel-2">
            <tr>
              {columns.map((c) => (
                <th
                  key={String(c.key)}
                  className="px-3 py-2 font-mono text-xs uppercase text-parchment/50"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const rowId = `row-${i}`;
              return (
                <tr key={rowId} className="border-t border-line">
                  {columns.map((c) => {
                    const raw = row[c.key];
                    const display =
                      raw instanceof Date ? raw.toLocaleString() : String(raw ?? "—");
                    const isEmail = c.key === emailKey && raw;
                    const cellId = `${rowId}-${String(c.key)}`;

                    if (isEmail) {
                      return (
                        <td key={cellId} className="px-3 py-2">
                          <button
                            onClick={() => copyValue(display, cellId)}
                            className="group flex items-center gap-1.5 text-parchment/80 transition-colors hover:text-brass"
                            title="Скопировать email"
                          >
                            {display}
                            {copiedCell === cellId ? (
                              <Check className="h-3.5 w-3.5 shrink-0 text-brass" />
                            ) : (
                              <Copy className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" />
                            )}
                          </button>
                        </td>
                      );
                    }

                    return (
                      <td key={cellId} className="px-3 py-2 text-parchment/80">
                        {display}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}