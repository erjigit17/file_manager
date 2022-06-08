import {getHomedir} from './helpers/index.js'
import {processor, commands} from './processor.js'
import {exit} from './helpers/index.js'

const userName = process.argv //todo need check
  .slice(3)[0]
  .replace('--username=', '')

const homedir = getHomedir()
const context = {
  _homedir: homedir,
  _currentFolder: homedir,
  _userName: userName,
  get homedir() {
    return this._homedir
  },
  get currentFolder() {
    return this._currentFolder
  },
  set currentFolder(newPath) {
    this._currentFolder = newPath
  },
  get userName() {
    return this._userName
  }
}

console.clear()
process.stdout.write(`Welcome to the File Manager, ${context.userName}!\n`)
console.log(`Current working directory: ${context.currentFolder}`)

process.stdin.on('data', async (data) => {
  await requestProcessing(data)
  console.log(`\nCurrent working directory: ${context.currentFolder}`)
});

process.on('SIGINT', async () => {
  console.log('\n')
  await exit(context)
})

async function requestProcessing(chunk)  {
  const chunkStringified = chunk.toString();
  const input = chunkStringified
                                      .trim()
                                      .split(' ')
                                      .filter(el=> el !== '')

  const [command, arg1, arg2, ..._] = input

  if (commands.has(command)) {
    //todo need check args
    await processor(command, context, arg1, arg2 )
  } else {
    console.error(`Invalid input`)
  }
};