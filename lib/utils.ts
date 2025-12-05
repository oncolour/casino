/**
 *
 * Normalizes a URL by ensuring it has a protocol.
 * If the URL starts with "//", it prepends "https:" to it.
 * Otherwise, it returns the URL as is.
 *
 * @param url - The URL to normalize
 * @returns The normalized URL
 */
export const normalizeSrc = (url: string) => {
  return url.startsWith("//") ? `https:${url}` : url;
};
