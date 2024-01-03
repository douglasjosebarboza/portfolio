export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-1 px-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-sm bg-[var(--background-badge)] px-2 py-1 text-xs font-light text-[var(--secondary)]"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
