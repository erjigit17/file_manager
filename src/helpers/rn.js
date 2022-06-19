import { rename } from 'fs/promises';
import { getIsDir, getAdsPath, exists } from './index.js';

export async function rn(context, pathToFile, pathToNewFile) {
  const oldPath = getAdsPath(context, pathToFile)
  const newPath = getAdsPath(context, pathToNewFile)

  const fileIsDir = await getIsDir( oldPath)
  if (fileIsDir) throw new Error('You cannot rename a directory.')

  const isOutputFileExists = await exists(newPath)
  if (isOutputFileExists) throw new Error('File with this name already exists.')

  await rename(oldPath, newPath);
}
