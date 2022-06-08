import {stat} from "fs/promises";

export async function getIsDir (path) {
  try {
    const pathStat = await stat(path)
    return pathStat.isDirectory()
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Operation failed. Directory or file not exists.')
    } else {
      console.error('Operation failed. ', err.message)
    }
  }
}

