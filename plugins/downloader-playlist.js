/* Created by https://github.com/BrunoSobrino */
       /* Diseño by Yameko-Bot V1*/

import yts from "yt-search"
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[❗ИНФО❗] ОТСУТСТВУЕТ НАЗВАНИЕ ПЕСНИ ВВЕДИТЕ КОМАНДУ И НАЗВАНИЕ/НАЗВАНИЕ ПЕСНИ*\n\n*—◉ ПРИМЕР:*\n*${usedPrefix + command} Begin you*`    
try {
let imagen1 = fs.readFileSync('./src/nuevobot.jpg') 
let search = await yts(args.join(" "))
let listSerch = []
let teskd = `Музыка, связанная с: ${args.join(" ")}`
const sections = [{
title: `результаты`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'Выберите вариант и нажмите «Отправить».',
title: " 『 СВЯЗАННАЯ МУЗЫКА 』",
buttonText: "[♦ РЕЗУЛЬТАТЫ ♦]",
sections}
const fake = { quoted: {
key : {
remoteJid: '6283136505591-1614953337@g.us',
participant : '0@s.whatsapp.net'},
message: {
orderMessage: {
itemCount: 9999999,
status: 1,
surface: 1,
message: 'Жека Воробейᷦ', 
orderTitle: `Жека Воробейᷦᷦ`,
thumbnail: imagen1, 
sellerJid: '0@s.whatsapp.net'}}}}
if (command == 'playlist') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)}
if (command == 'playlist2') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)} 
} catch (e) {
m.reply('*[❗ИНФО❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*')
console.log(e)
}}
handler.command = /^плейлист|playlist2$/i
export default handler
