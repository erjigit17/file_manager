export async function exit(context){
  process.stdout.write(`\nThank you for using File Manager, ${context.userName}!`)
  process.exit(1)
}