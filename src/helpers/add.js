import { open } from 'fs/promises';
import {getAdsPath} from "./getAdsPath.js";



export async function add(context, pathToNewFile) {
  const filePath = getAdsPath(context, pathToNewFile)

  let fileHandle
  try {
    fileHandle = await open(filePath, 'wx')
  } catch (err) {
    console.log('Operation failed.', err.message)
  } finally {
    await fileHandle.close()
  }

}