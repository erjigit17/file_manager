/**
 * @param {!object} context
 * @namespace exit
 * @return {!Promise<void>}
 */
export async function exit(context){
  process.stdout.write(`\n\x1b[36mThank you for using File Manager, ${context.userName}!\x1b[0m`)
  process.exit(1)
}