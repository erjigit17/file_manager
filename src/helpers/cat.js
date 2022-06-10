import { readFile } from 'fs/promises';
import { getAdsPath, getIsDir } from './index.js';

export async function cat(context, pathToFile) {
  const file = getAdsPath(context, pathToFile)
  const isDir = await getIsDir(file)
  if (isDir) throw new Error(`Operation failed. Cannot read folder.`);

  const content = await readFile(file, "utf8" );
  console.log(content)
}
