type SystemStatusCardProps = {
  title: string;
  status: string;
  detail: string;
};

export function SystemStatusCard({
  title,
  status,
  detail
}: SystemStatusCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-semibold text-[#101820]">{title}</h3>
        <span className="rounded-full bg-[#f2ead8] px-3 py-1 text-xs font-semibold text-[#8a641f]">
          {status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
  );
}
