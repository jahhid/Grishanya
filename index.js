console.log('✅ㅤИнициализация...')
import { join, dirname } from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import { createInterface } from 'readline'
import yargs from 'yargs'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, './package.json')) 
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

say('Grishanya BoT\nDzheka Vorobey', {
font: 'chrome',
align: 'center',
gradient: ['red', 'magenta']})
say(`Sozdatel Bota Dzheka Vorobey. Esli u vas budut voprosy po Botu napishi mne v Ls`, {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']})

var isRunning = false
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]

say('Nastroyte ekran dlya scanirovaniya coda QR', {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']})
  
setupMaster({
exec: args[0],
args: args.slice(1), })
let p = fork()
p.on('message', data => {
console.log('[ПОЛУЧЕННЫЙ]', data)
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'время безотказной работы':
p.send(process.uptime())
break }})
p.on('exit', (_, code) => {
isRunning = false
console.error('❎ㅤПроизошла непредвиденная ошибка:', code)
if (code === 0) return
watchFile(args[0], () => {
unwatchFile(args[0])
start(file)})})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())})}
start('main.js')