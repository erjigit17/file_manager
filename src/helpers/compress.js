import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import path from 'path';
import zlib from 'zlib';
import { getAdsPath, getIsDir, exists } from "./index.js";

// compress test.txt // compress same directory -> test.txt.br
// compress test.txt someFolder // compress same directory -> someFolder/test.txt.br

export async function compress(context, pathToFile, pathToDestination) {
  const sourcePath = getAdsPath(context, pathToFile)
  const isFileDir = await getIsDir(sourcePath)
  if (isFileDir) throw new Error('Operation failed. You cannot compress directory.')

  const fileName = sourcePath.split(path.sep).at(-1) + '.br'

  let pathOutputFolder = context.currentFolder
  if (pathToDestination){
    pathOutputFolder = getAdsPath(context, pathToDestination)
    const folderIsDir = await getIsDir(pathOutputFolder)
    if (!folderIsDir) throw new Error('Destination is not a directory')
  }

  const pathOutputFile = path.join(pathOutputFolder, fileName)

  const isOutputFileExists = await exists(pathOutputFile)
  if (isOutputFileExists) throw new Error('Output file already exists')

  const brotliCompress = zlib.createBrotliCompress()
  const source = createReadStream(sourcePath)
  const destination = createWriteStream(pathOutputFile)

  pipeline(
    source, brotliCompress, destination,
    (err) => {
      if (err) {
        throw err
      }
    }
  )
}