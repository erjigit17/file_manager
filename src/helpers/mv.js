import { copyFile, rm } from "fs/promises";
import path from "path";
import { getAdsPath, getIsDir } from "./index.js";

export async function mv(context, pathToFile, pathToDirectory) {
  const source = getAdsPath(context, pathToFile)
  const isSourceDir = await getIsDir( source)
  if (isSourceDir) throw new Error('You cannot move a directory.')

  const destinationPath = getAdsPath(context, pathToDirectory)
  const isDestinationDir = await getIsDir( destinationPath)
  if (!isDestinationDir) throw new Error('Destination is not a directory.')

  const fileName = pathToFile.split(path.sep).at(-1)
  const destination = getAdsPath(context, path.join(destinationPath, fileName))

  await copyFile(source, destination)
  await rm(source)

}