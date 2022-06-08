import {join} from "path";

export function getAdsPath(context, path) {
  const rootDir = context.homedir.split('/')
  const pathArr = path.split('/')
  return rootDir[0] === pathArr[0]
                              ? path
                              : join(context.currentFolder, path)
}