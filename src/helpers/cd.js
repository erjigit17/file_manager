import { up, getIsDir, getAdsPath} from "./index.js";

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
  if (isDir === true) {
    context.currentFolder = path
  } else if (isDir === false) {
    console.error(`Operation failed. Path to file`)
  }

}

