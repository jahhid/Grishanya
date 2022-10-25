import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 ИНФО О БОТЕ 〙 ═
╠
╠➥ [🤴🏻] СОЗДАТЕЛЬ: *Гришаня*
╠➥ [#️⃣] НОМЕР СОЗДАТЕЛЯ: *+7 977 345-21-27*
╠➥ [🎳] ПРЕФИКС: *${usedPrefix}*
╠➥ [🔐] ПРИВАТНЫЕ ЧАТЫ: *${chats.length - groups.length}*
╠➥ [🦜] ЧАТЫ ГРУПП: *${groups.length}* 
╠➥ [💡] ВСЕГО ЧАТОВ: *${chats.length}* 
╠➥ [🚀] АКТИВНОСТЬ: *${uptime}*
╠➥ [🎩] ПОЛЬЗОВАТЕЛИ: *${totalreg} числа*
╠➥ [👨‍🦯] 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: 
╠  *${speed}* 
╠  *милисекунд*
╠➥ [☑️] АВТОЧТЕНИЕ: ${autoread ? '*активировано*' : '*деактивировано*'}
╠➥ [❗] ОГРАНИЧЕНИЕ: ${restrict ? '*активировано*' : '*деактивировано*'} 
╠
╠═〘 Жека Воробей 〙 ═
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ИНФО ОБ ЭТОМ БОТЕ',
body: 'Жека Воробей',         
previewType: 0, thumbnail: fs.readFileSync("./Жека Воробей.jpg"),
sourceUrl: `https://github.com/jahhid`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|инфобот)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
