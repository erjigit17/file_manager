import { createReadStream } from "fs"
import  crypto  from "crypto"
import { getAdsPath } from "./index.js"

export async function hash(context, pathToFile){
  const path = getAdsPath(context,pathToFile)

  const hashPromise = new Promise(((resolve, reject) => {
    const hash = crypto
                          .createHash('sha256')
                          .setEncoding('hex')

    createReadStream(path)
                          .once('error', reject)
                          .pipe(hash)
                          .once('finish',  () => {
                            resolve(hash.read());
                          })
  }))

  const result = await hashPromise
  console.log(result)
}