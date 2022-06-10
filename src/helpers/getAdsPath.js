import { isAbsolute, join } from "path";

/**
 * @param {!object} context
 * @param {!string} path
 * @namespace getAdsPath
 * @return {string}
 */
export function getAdsPath(context, path) {
  return isAbsolute(path)
    ? path
    : join(context.currentFolder, path)
}