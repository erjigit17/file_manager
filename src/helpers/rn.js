import {rename} from 'fs/promises';
import {getIsDir} from './getIsDir.js';
import {getAdsPath} from './getAdsPath.js';


export async function rn(context, pathToFile, pathToNewFile) {
  const oldPath = getAdsPath(context, pathToFile)
  const newPath = getAdsPath(context, pathToNewFile)

  const fileIsDir = await getIsDir( oldPath)
  if (fileIsDir) {
    console.error('You cannot rename a directory.')
    return
  }

  try {
    await rename(oldPath, newPath);
  } catch {
    console.error(`The file ${pathToFile} could not be renamed`);
  }
}
