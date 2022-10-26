import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*╔══❰ ОФИЦАЛЬНАЯ ГРУППА ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, 'ЭТО ОФИЦИАЛЬНАЯ ГРУППА БОТА Grishanya \n' + wm, fs.readFileSync('./src/comunicado_ofc.png'), [['🤖 ВЛАДЕЛЕЦ 🤖', '.владелец'],['💎 ГРУППА 💎', '.группа']], false, { 
contextInfo: { externalAdReply: {
title: 'Официальная группа Ботов',
body: 'ʙʏ Grishanyaᷦ', 
sourceUrl: `https://chat.whatsapp.com`, 
thumbnail: fs.readFileSync('./Grishanya.jpg') }}})}
m.reply(`*[❗ИНФО❗] СООБЩЕНИЕ ОТПРАВЛЕНО ${groups.length} 𝙶𝚁𝚄𝙿𝙾/𝚂*\n\n*𝐍𝐎𝐓𝐀: 𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝙵𝙰𝙻𝙻𝙾𝚂 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚈 𝙽𝙾 𝚂𝙴 𝙴𝙽𝚅𝙸𝙴 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂, 𝙳𝙸𝚂𝙲𝚄𝙻𝙿𝙴 𝙿𝙾𝚁 𝙴𝙻 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(группабота|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
