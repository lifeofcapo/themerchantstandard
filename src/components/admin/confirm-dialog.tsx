"use client";

import * as React from "react";

type ConfirmDialogProps = {
  open: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

/**
 * Custom confirm dialog to replace window.confirm().
 *
 * window.confirm() lets the browser show a "Don't ask again" / "Prevent
 * this page from creating additional dialogs" checkbox after a couple of
 * calls. If the user checks it, confirm() silently returns false forever
 * on that page — so delete actions look like they stopped working.
 * A custom dialog avoids that entirely.
 */
export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm rounded-xl border border-line bg-panel p-5 text-parchment shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-2 font-display text-lg">{title}</h2>
        {description && (
          <p className="mb-5 text-sm text-parchment/70">{description}</p>
        )}
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-lg border border-line px-3 py-1.5 text-sm text-parchment/70 transition-colors hover:text-parchment"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-seal-light px-3 py-1.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}