import {rm as remove} from 'fs/promises';
import {getIsDir} from './getIsDir.js';
import {getAdsPath} from './getAdsPath.js';

export async function rm(context, pathToFile) {
  const file = getAdsPath(context, pathToFile)

  const isFileDir = await getIsDir(context, file)

  if (isFileDir) {
    console.error('You cannot delete a directory.')
    return
  }

  try {
    await remove(file)
  } catch (err) {
    console.error('Operation failed. ', err.message)
  }

}