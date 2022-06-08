import {readFile} from 'fs/promises';
import {getAdsPath} from './getAdsPath.js';
import {getIsDir} from './getIsDir.js';


export async function cat(context, pathToFile) {
  const file = getAdsPath(context, pathToFile)
  const isDir = await getIsDir(file)
  if (isDir === true) console.error(`Operation failed. Cannot read folder.`);
  if (isDir === false) {
    try {
      const content = await readFile(file, "utf8" );
      console.log(content)
    } catch {
      console.error(`Operation failed. The file ${file} could not be read`);
    }
  }
}
