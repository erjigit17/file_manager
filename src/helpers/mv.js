import {copyFile, rm} from "fs/promises";
import path from "path";
import {getAdsPath} from "./getAdsPath.js";
import {getIsDir} from "./getIsDir.js";

export async function mv(context, pathToFile, pathToDirectory) {
  const source = getAdsPath(context, pathToFile)
  const fileName = pathToFile.split('/').at(-1)
  const _destination = path.join(pathToDirectory, fileName)
  const destination = getAdsPath(context, _destination)

  const isSourceDir = await getIsDir(context, source)

  if (isSourceDir) {
    console.error('You cannot move a directory.')
    return
  }

  try {
    await copyFile(source, destination)
  } catch (err) {
    console.error('Operation failed. ', err.message)
    return
  }

  try {
    await rm(source)
  } catch(err) {
    console.error('Operation failed. ', err.message)
  }

}