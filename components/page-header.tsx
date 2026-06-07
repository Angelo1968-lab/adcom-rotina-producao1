import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
}

export function PageHeader({ title, description, actionHref, actionLabel }: PageHeaderProps) {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-slate-600">{description}</p>
      </div>
      {actionHref && actionLabel ? (
        <Link href={actionHref} className="button-primary shrink-0">
          {actionLabel}
        </Link>
      ) : null}
    </header>
  );
}
