import { up, getIsDir, getAdsPath } from "./index.js";

export async function cd(context, pathToDirectory){
  if (pathToDirectory === '..') {
    await up(context)
    return
  }
  if (pathToDirectory === '.') {
    await cd(context, context.homedir)
    return
  }

  const path = getAdsPath(context,pathToDirectory)
  const isDir = await getIsDir(path)
  if (!isDir) throw new Error(`Path to file`)
  context.currentFolder = path
}