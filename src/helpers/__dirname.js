import { fileURLToPath } from "url";
import { dirname } from "path";
/**
 * @param {!string} metaUrl
 * @namespace get__dirName
 * @return {string}
 */
export function get__dirName(metaUrl) {
  const __filename = fileURLToPath(metaUrl) //import.meta.url
  return dirname(__filename)
}