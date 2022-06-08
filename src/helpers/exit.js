export async function exit(context){
  process.stdout.write(`Thank you for using File Manager, ${context.userName}!`)
  process.exit(1)
}