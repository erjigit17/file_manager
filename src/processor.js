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
  os
} from './helpers/index.js'

export const commands = new Map()
commands.set('.e',    {function: exit, })
commands.set('.exit', {function: exit, })
commands.set('up',    {function: up,   })
commands.set('cd',    {function: cd,   requireArgs: ['pathToDirectory']})
commands.set('ls',    {function: ls,   })
commands.set('cat',   {function: cat,  requireArgs: ['pathToFile']})
commands.set('add',   {function: add,  requireArgs: ['pathToNewFile']})
commands.set('rn',    {function: rn,   requireArgs: ['pathToFile', 'pathToNewFile']})
commands.set('cp',    {function: cp,   requireArgs: ['pathToFile', 'pathToDirectory']})
commands.set('mv',    {function: mv,   requireArgs: ['pathToFile', 'pathToDirectory']})
commands.set('rm',    {function: rm,   requireArgs: ['pathToFile']})
commands.set('os',    {function: os,   requireArgs: ['param']})


export async function processor(command, context, arg1, arg2) {
  await commands.get(command).function(context, arg1, arg2)
}