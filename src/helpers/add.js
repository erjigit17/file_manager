import { open } from 'fs/promises';
import { getAdsPath } from "./index.js";

export async function add(context, pathToNewFile) {
  const filePath = getAdsPath(context, pathToNewFile)

  const fileHandle = await open(filePath, 'wx')
  await fileHandle.close()
}