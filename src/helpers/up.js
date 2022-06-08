import path from 'path';

export async function up(context) {
  const newPathArr = context.currentFolder.split("/").slice(-1)
  if (newPathArr.length > 0) {
    context.currentFolder = path.join(newPathArr.join("/"))
  }
}