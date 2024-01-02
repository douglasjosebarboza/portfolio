export default function Spans({ spans }: { spans: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-1 px-2">
      {spans.map((span) => (
        <span
          key={span}
          className="rounded-sm bg-[var(--background-badge)] px-2 py-1 text-xs font-light text-[var(--secondary)]"
        >
          {span}
        </span>
      ))}
    </div>
  )
}
