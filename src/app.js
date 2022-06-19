import {processor, commands} from './processor.js'
import { getHomedir, exit } from './helpers/index.js'


let userName = process.argv
  .slice(3)[0]

if (!userName || !userName.startsWith('--username=')) {
  console.error('\x1b[31m Please provide a username. Example: "node ./src/app -- --username=yourName"\x1b[0m')
  process.exit(1)
}
userName = userName.replace('--username=', '')


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
console.log(
  `\x1b[36mWelcome to the File Manager, ${context.userName}!
You are currently in: ${context.currentFolder}\x1b[0m`
)

process.stdin.on('data', async (data) => {
  await requestProcessing(data)
  console.log(`\x1b[36mYou are currently in: ${context.currentFolder}\x1b[0m`)
});

process.on('SIGINT', async () => {
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
    try {
      await processor(command, context, arg1, arg2)
    } catch (e) {
      console.error(`\x1b[31mOperation failed: ${e.message}\x1b[0m`)
    }
  } else {
    console.error(`\x1b[33mInvalid input\x1b[0m`)
  }
}