import os from 'os';

export function getHomedir(){
  return os.homedir()
  // return process.env.HOME || process.env.USERPROFILE;
}