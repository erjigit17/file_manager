import os from 'os';
/**
 * @namespace getHomedir
 * @return {string}
 */
export function getHomedir(){
  return os.homedir()
}