import {
  exit,
  ls,
  cd,
  up,
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
  os,
  hash,
  compress,
  decompress,

} from './helpers/index.js'

export const commands = new Map()
commands.set('.e',        {function: exit, })
commands.set('.exit',     {function: exit, })
commands.set('up',        {function: up,   })
commands.set('ls',        {function: ls,   })
commands.set('cd',        {function: cd,          requireArgs: ['pathToDirectory']})
commands.set('cat',       {function: cat,         requireArgs: ['pathToFile']})
commands.set('add',       {function: add,         requireArgs: ['pathToNewFile']})
commands.set('rn',        {function: rn,          requireArgs: ['pathToFile', 'pathToNewFile']})
commands.set('cp',        {function: cp,          requireArgs: ['pathToFile', 'pathToDirectory']})
commands.set('mv',        {function: mv,          requireArgs: ['pathToFile', 'pathToDirectory']})
commands.set('rm',        {function: rm,          requireArgs: ['pathToFile']})
commands.set('os',        {function: os,          requireArgs: ['os --param']})
commands.set('hash',      {function: hash,        requireArgs: ['pathToFile']})
commands.set('compress',  {function: compress,    requireArgs: ['pathToFile']})
commands.set('decompress',{function: decompress,  requireArgs: ['pathToFile']})


export async function processor(command, context, arg1, arg2) {
  checkArgs(command, arg1, arg2)
  await commands.get(command).function(context, arg1, arg2)
}

function checkArgs(command, arg1, arg2){
  if (!commands.get(command)?.requireArgs) return
  const args = commands.get(command).requireArgs

  switch (args.length) {
    case 1:
      if (!arg1) throw new Error(`Need ${args[0]}`)
      break
    case 2:
      if (!arg1 || !arg2) throw new Error(`Need ${args[0]} and ${args[1]}`)
      break
  }

}