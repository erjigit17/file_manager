export function getHomedir(){
  return process.env.HOME || process.env.USERPROFILE;
}