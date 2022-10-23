import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `*╔══❰ ОБЬЯВЛЕНИЕ УЧАСТНИКАМ ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, 'КОСАЕТЬСЯ ОБСАЛЮТНО ВСЕХ УЧАСТНИКОВ\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 ВЛАДЕЛЕЦ 🤖', '.owner'],['💎 ССЫЛКА НА ГРУППУ 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'ОТНЕСИТЕСЬ К ЭТОМУ СЕРЬЕЗНО И С УВАЖЕНИЕМ',
body: 'ʙʏ Grishanyaᷦ', 
sourceUrl: `https://chat.whatsapp.com`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗ИНФО❗] СООБЩЕНИЕ РАСКИДАНО ПО ВСЕМ ЧАТАМ*\n\n*ПРИМЕЧАНИЕ: ПРОСТО ТАК МЕНЯ НЕ ТЫКАТЬ НЕ ОБЯЗАТЕЛЬНО ОТ ТОГО ЧТО ВАМ СКУЧНО! ХОЧЕШЬ ТЫКНУТЬ ИДИ И ТЫКНИ СВОЕЙ ДЕВУШКЕ ИЛИ ЖЕ СВОЕМУ ПАРНЮ! ЕСЛИ У ТЕБЯ ЕЁ ИЛИ ЖЕ ЕГО НЕТ ТО ТЫКНИ СЕБЕ В ГЛАЗ! Я КАК РАБОТАЛ ТАК И БУДУ РАБОТАТЬ С УВАЖЕНИЕМ ВАШ БОТ Grishanyaᷦ*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|обьявление)$/i
handler.rowner = true
export default handler
