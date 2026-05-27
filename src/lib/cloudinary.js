/**
 * Inject (or merge) a Cloudinary transform into an image URL.
 *
 * Cloudinary URLs look like:
 *   .../image/upload/[<transform>/]<version>/<filename>
 *
 * Adding `f_auto,q_auto,w_<n>` lets Cloudinary serve a modern format
 * (AVIF/WebP) at the right size — typically a 15-20× reduction over
 * the raw PNG.
 *
 * If the URL already has a transform segment, the new transform is
 * merged onto the front so we don't double-apply or fight existing
 * parameters.
 */
const UPLOAD_MARKER = "/image/upload/";

// A transform segment contains "_" tokens (f_auto, q_auto, w_900, c_fill, ...)
// joined by commas; the version segment looks like "v1779...". Distinguish by
// the leading "v" + digits pattern.
const VERSION_RE = /^v\d+$/;

export function buildCloudinaryUrl(src, { width, transform = "f_auto,q_auto" } = {}) {
  if (typeof src !== "string" || !src.includes(UPLOAD_MARKER)) return src;

  const widthSegment = width ? `,w_${width}` : "";
  const newTransform = `${transform}${widthSegment}`;

  const [base, rest] = src.split(UPLOAD_MARKER);
  const parts = rest.split("/");
  const first = parts[0];

  // If the first segment is a version (v123...) or a filename, there's no
  // existing transform — insert one.
  if (VERSION_RE.test(first) || !first.includes("_")) {
    return `${base}${UPLOAD_MARKER}${newTransform}/${rest}`;
  }

  // Otherwise there's already a transform segment. Merge keys without
  // duplicating: new params take precedence, existing extras are kept.
  const seen = new Set();
  const keyOf = (token) => token.split("_")[0];
  const merged = [...newTransform.split(","), ...first.split(",")]
    .filter((token) => {
      const key = keyOf(token);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join(",");
  const rebuilt = [merged, ...parts.slice(1)].join("/");
  return `${base}${UPLOAD_MARKER}${rebuilt}`;
}
