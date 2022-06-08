import {copyFile} from 'fs/promises';
import path from 'path';
import {getIsDir} from './getIsDir.js';
import {getAdsPath} from './getAdsPath.js';


export async function cp(context, pathToFile, pathToDirectory) {
  const source = getAdsPath(context, pathToFile)
  const fileName = pathToFile.split('/').at(-1)
  const _destination = path.join(pathToDirectory, fileName)
  const destination = getAdsPath(context, _destination)

  const isSourceDir = await getIsDir(context, source)

  if (isSourceDir) {
    console.error('You cannot copy a directory.')
    return
  }

  try {
    await copyFile(source, destination)
  } catch (err) {
    console.error('Operation failed. ', err.message)
  }
}