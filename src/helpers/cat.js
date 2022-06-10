import { createReadStream } from 'fs';
import { getAdsPath, getIsDir } from './index.js';

export async function cat(context, pathToFile) {
  const filePath = getAdsPath(context, pathToFile)
  const isDir = await getIsDir(filePath)
  if (isDir) throw new Error(`Operation failed. Cannot read folder.`)

  const readPromise = new Promise((resolve, reject) => {
    createReadStream(filePath)
      .once('error', reject)
      .on('data', (chunk) => {
        console.log(chunk.toString());
      })
      .once('end',  ()=> {
        resolve();
      })
  })

  await readPromise
}
