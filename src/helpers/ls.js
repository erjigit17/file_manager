import {readdir} from "fs/promises";

export async function ls(context) {
  try {
    const contents = await readdir(context.currentFolder)
    console.log(contents.join('\n'))
  } catch(e) {
    console.error(e)
  }
}