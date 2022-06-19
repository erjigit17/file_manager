import { stat } from "fs/promises";
import { exists } from './index.js';

/**
 * @param {!string} path
 * @namespace getIsDir
 * @return {!Promise<boolean>}
 */
export async function getIsDir (path){
  const isExists = await exists(path)
  if (!isExists) throw new Error('Operation failed. Directory or file not exists. ')

  const pathStat = await stat(path)
  return pathStat.isDirectory()
}


