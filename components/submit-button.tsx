"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  label: string;
  pendingLabel: string;
  variant?: "primary" | "danger";
}

export function SubmitButton({ label, pendingLabel, variant = "primary" }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const classes =
    variant === "danger"
      ? "inline-flex items-center rounded-md px-3 py-1.5 text-sm font-semibold text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
      : "button-primary disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <button type="submit" disabled={pending} className={classes}>
      {pending ? pendingLabel : label}
    </button>
  );
}
