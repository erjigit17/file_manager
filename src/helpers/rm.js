import { rm as remove } from 'fs/promises';
import { getAdsPath, getIsDir } from './index.js';

export async function rm(context, pathToFile) {
  const file = getAdsPath(context, pathToFile)
  const isFileDir = await getIsDir(file)
  if (isFileDir) throw new Error('You cannot delete a directory.')

  await remove(file)
}