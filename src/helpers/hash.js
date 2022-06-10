import  crypto  from 'crypto'
import { readFile } from 'fs/promises';
import { getAdsPath, getIsDir } from "./index.js";


export async function hash(context, pathToFile) {
  const path = getAdsPath(context, pathToFile)
  const isFileDir = await getIsDir(path)
  if (isFileDir) throw new Error('Operation failed. You cannot get hash from directory.')

  const data = await readFile(path);
  const hashSum = crypto.createHash('sha256')
  hashSum.update(data)
  const hex = hashSum.digest('hex')
  console.log(hex)
}