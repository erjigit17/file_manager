import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import path from 'path';
import zlib from 'zlib';
import { getAdsPath, getIsDir, exists } from "./index.js";

// decompress test.txt.br  // decompress same directory -> test.txt
// decompress test.txt.br someFolder // or decompress to someFolder -> someFolder/test.txt

export async function decompress(context, pathToFile, pathToDestination) {
  const sourcePath = getAdsPath(context, pathToFile)
  const isFileDir = await getIsDir(sourcePath)
  if (isFileDir) throw new Error('Operation failed. You cannot decompress directory.')

  let fileName = pathToFile.split(path.sep).at(-1)
  if (fileName.endsWith('.br')) fileName = fileName.replace('.br', '')

  let pathOutputFolder = context.currentFolder
  if (pathToDestination){
    pathOutputFolder = getAdsPath(context, pathToDestination)
    const folderIsDir = await getIsDir(pathOutputFolder)
    if (!folderIsDir) throw new Error('Destination is not a directory')
  }

  const pathOutputFile = path.join(pathOutputFolder, fileName)
  const isOutputFileExists = await exists(pathOutputFile)
  if (isOutputFileExists) throw new Error('Destination file already exists')

  const brotliDecompress = zlib.createBrotliDecompress()
  const source = createReadStream(sourcePath)
  const destination = createWriteStream(pathOutputFile)

  pipeline(
    source, brotliDecompress, destination,
    (err) => {
      if (err) {
        throw err
      }
    }
  )
}




