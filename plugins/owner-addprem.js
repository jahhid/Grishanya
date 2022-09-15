let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗ИНФО❗] ВВЕДИТЕ @имя ЧЕЛОВЕКА, КОТОРОГО ВЫ ХОТИТЕ ДОБАВИТЬ В ПРЕМИУМ-ПОЛЬЗОВАТЕЛИ*`
if (global.prems.includes(who.split`@`[0])) throw '*[❗ИНФО❗] ВВЕДЕННЫЙ ПОЛЬЗОВАТЕЛЬ УЖЕ ЯВЛЯЕТСЯ ПРЕМИУМ ПОЛЬЗОВАТЕЛЕМ*'
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `*[❗ИНФО❗] @${who.split`@`[0]} 
ТЕПЕРЬ ВЫ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЬ, У ВАС НЕ БУДЕТ ОГРАНИЧЕНИЙ ПРИ ИСПОЛЬЗОВАНИИ БОТА*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(дать|\+)премиум$/i
handler.group = true
handler.rowner = true
export default handler
