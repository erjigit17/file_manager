import { readdir } from "fs/promises";

export async function ls(context) {
  const contents = await readdir(context.currentFolder)
  console.log(contents.join('\n'))
}