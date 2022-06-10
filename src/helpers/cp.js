import { createReadStream, createWriteStream} from 'fs';
import path from 'path';
import {getIsDir, getAdsPath, exists} from './index.js';

export async function cp(context, pathToFile, pathToDirectory) {
  // check source
  const source = getAdsPath(context, pathToFile)
  const isSourceDir = await getIsDir(source)
  if (isSourceDir) throw new Error('You cannot copy a directory.')

  // check destination
  const _destination = getAdsPath(context, pathToDirectory)
  const isDestinationExists = await exists(_destination)
  if (!isDestinationExists) throw new Error('Destination folder does not exist.')
  const isDestinationDir = await getIsDir(_destination)
  if (!isDestinationDir) throw new Error('You cannot copy a directory.')

  // check output
  const fileName = pathToFile.split(path.sep).at(-1)
  const destination = path.join(_destination, fileName)
  const isOutputFileExists = await exists(destination)
  if (isOutputFileExists) throw new Error('File with this name already exists.')

  const inputStream = createReadStream(source)
  const outputStream = createWriteStream(destination)
  inputStream.pipe(outputStream)
}