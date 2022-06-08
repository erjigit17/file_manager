import { getIsDir } from "./getIsDir.js";
import { up } from "./up.js";

export async function cd(context, pathToDirectory){
  if (pathToDirectory === '..') {
    await up(context)
    return
  }
  if (pathToDirectory === '.') {
    await cd(context, context.homedir)
    return
  }


  const isDir = await getIsDir(pathToDirectory)
  if (isDir === true) {
    context.currentFolder = pathToDirectory
  } else if (isDir === false) {
    console.error(`Operation failed. Path to file`)
  }

}

