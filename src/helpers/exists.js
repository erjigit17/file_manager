import { access } from "fs/promises";
import { constants } from 'fs';
/**
 * @param {!string} path
 * @namespace exists
 * @return {!Promise<boolean>}
 */
export async function exists(path)  {
  try {
    await access(path, constants.R_OK | constants.W_OK);
    return true;
  } catch(err) {
    return ['EACCES', 'EROFS'].includes(err.code)
  }
}