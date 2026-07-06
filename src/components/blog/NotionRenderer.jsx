// Renders the Notion block array returned by /api/blog/post into React elements.

function RichText({ spans }) {
  if (!spans?.length) return null;
  return spans.map((span, i) => {
    const { text, href, annotations = {} } = span;
    let node = text;

    if (annotations.code) node = <code key={i} className="rounded bg-lilac-200 px-1.5 py-0.5 font-mono text-sm text-brand">{node}</code>;
    if (annotations.bold) node = <strong key={i} className="font-bold text-ink">{node}</strong>;
    if (annotations.italic) node = <em key={i}>{node}</em>;
    if (annotations.strikethrough) node = <s key={i}>{node}</s>;
    if (annotations.underline) node = <u key={i}>{node}</u>;

    if (href) {
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer"
          className="font-medium text-brand underline underline-offset-2 transition hover:text-brand-dark">
          {node}
        </a>
      );
    }
    return <span key={i}>{node}</span>;
  });
}

function Block({ block }) {
  const { type } = block;

  switch (type) {
    case "paragraph":
      if (!block.richText?.length) return <div className="h-4" />;
      return (
        <p className="leading-8 text-muted-2">
          <RichText spans={block.richText} />
        </p>
      );

    case "heading_1":
      return (
        <h2 className="mt-12 text-3xl font-black tracking-[-0.03em] text-ink">
          <RichText spans={block.richText} />
        </h2>
      );

    case "heading_2":
      return (
        <h3 className="mt-10 text-2xl font-black tracking-[-0.03em] text-ink">
          <RichText spans={block.richText} />
        </h3>
      );

    case "heading_3":
      return (
        <h4 className="mt-8 text-xl font-bold text-ink">
          <RichText spans={block.richText} />
        </h4>
      );

    case "bulleted_list_item":
      return (
        <li className="list-disc leading-8 text-muted-2 marker:text-brand">
          <RichText spans={block.richText} />
        </li>
      );

    case "numbered_list_item":
      return (
        <li className="list-decimal leading-8 text-muted-2">
          <RichText spans={block.richText} />
        </li>
      );

    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-brand pl-6 text-xl font-medium italic leading-8 text-ink">
          <RichText spans={block.richText} />
        </blockquote>
      );

    case "callout":
      return (
        <div className="my-6 flex gap-4 rounded-2xl border border-brand/15 bg-lilac-100 px-6 py-5">
          {block.icon && (
            <span className="mt-0.5 shrink-0 text-xl">
              {block.icon.type === "emoji" ? block.icon.emoji : "💡"}
            </span>
          )}
          <p className="leading-7 text-ink">
            <RichText spans={block.richText} />
          </p>
        </div>
      );

    case "divider":
      return <hr className="my-10 border-ink/10" />;

    case "image":
      return (
        <figure className="my-8">
          <img
            src={block.url}
            alt={block.caption?.map((s) => s.text).join("") || ""}
            className="w-full rounded-2xl object-cover"
            loading="lazy"
          />
          {block.caption?.length > 0 && (
            <figcaption className="mt-3 text-center text-sm text-muted">
              <RichText spans={block.caption} />
            </figcaption>
          )}
        </figure>
      );

    case "code":
      return (
        <pre className="my-6 overflow-x-auto rounded-2xl bg-ink p-6 text-sm leading-6 text-cream">
          <code>{block.richText?.map((s) => s.text).join("")}</code>
        </pre>
      );

    case "table": {
      if (!block.rows?.length) return null;
      const [headerRow, ...bodyRows] = block.rows;
      return (
        <div className="my-6 overflow-x-auto rounded-2xl border border-ink/8">
          <table className="w-full min-w-full border-collapse text-sm">
            {block.hasColumnHeader && headerRow && (
              <thead>
                <tr className="border-b border-ink/10 bg-lilac-100">
                  {headerRow.cells.map((cell, ci) => (
                    <th
                      key={ci}
                      className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.12em] text-ink"
                    >
                      <RichText spans={cell} />
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {(block.hasColumnHeader ? bodyRows : block.rows).map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-ink/8 last:border-0 odd:bg-white even:bg-lilac-50"
                >
                  {row.cells.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 leading-6 text-muted-2 ${
                        block.hasRowHeader && ci === 0
                          ? "font-semibold text-ink"
                          : ""
                      }`}
                    >
                      <RichText spans={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    default:
      return null;
  }
}

export default function NotionRenderer({ blocks }) {
  if (!blocks?.length) return null;

  // Group consecutive list items into <ul>/<ol> wrappers
  const groups = [];
  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    if (block.type === "bulleted_list_item") {
      const items = [];
      while (i < blocks.length && blocks[i].type === "bulleted_list_item") {
        items.push(blocks[i++]);
      }
      groups.push({ type: "ul", items });
    } else if (block.type === "numbered_list_item") {
      const items = [];
      while (i < blocks.length && blocks[i].type === "numbered_list_item") {
        items.push(blocks[i++]);
      }
      groups.push({ type: "ol", items });
    } else {
      groups.push(block);
      i++;
    }
  }

  return (
    <div className="space-y-5">
      {groups.map((group, idx) => {
        if (group.type === "ul") {
          return (
            <ul key={idx} className="ml-6 space-y-2">
              {group.items.map((b, j) => <Block key={j} block={b} />)}
            </ul>
          );
        }
        if (group.type === "ol") {
          return (
            <ol key={idx} className="ml-6 space-y-2">
              {group.items.map((b, j) => <Block key={j} block={b} />)}
            </ol>
          );
        }
        return <Block key={idx} block={group} />;
      })}
    </div>
  );
}
