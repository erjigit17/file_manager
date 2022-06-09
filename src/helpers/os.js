import {
  EOL,
  cpus as osCPU,
  homedir,
  userInfo,
  arch
} from 'os';

const osCommands = new Map()
osCommands.set('--EOL', {function: getEOL})
osCommands.set('--cpus', {function: getCPUs})
osCommands.set('--homedir', {function: getHomedir})
osCommands.set('--username', {function: getUsername})
osCommands.set('--architecture', {function: getArch})

export async function os (_, param){
  if (osCommands.has(param)) {
    osCommands.get(param).function()
  } else {
    console.error(`OS. Invalid input`)
  }
}


function getEOL(){
  console.log(`default system End-Of-Line is ${JSON.stringify(EOL)}`)
}

function getCPUs(){
  const cpus = osCPU()

  const cpusSpeed = []
  for (let i=0; i<cpus.length; i++) {
    let cpuSpeed = Math.round((cpus[i].speed / 1000 * 100)) / 100
    if (cpuSpeed < 1)  cpuSpeed = Math.round((cpus[i].speed / 10 * 100)) / 100 //PATCH fom apple m1
    cpusSpeed.push(`CPU${i} ${cpuSpeed}GHz`)
  }
  console.log(`Amount of CPUS ${cpus.length},\nCPU model ${cpus[0].model}\ncpusSpeed:`)
  console.log(cpusSpeed)
}

function getHomedir(){
  console.log(homedir())
}

function getUsername(){
  console.log(userInfo().username)
}

function getArch(){
  console.log(arch())
}