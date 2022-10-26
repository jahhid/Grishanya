let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗ИНФО❗] ВВЕДИТЕ @имя ЧЕЛОВЕКА, КОТОРОГО ВЫ ХОТИТЕ УДАЛИТЬ ИЗ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕЙ*`
if (!global.prems.includes(who.split`@`[0])) throw '*[❗ИНФО❗] ВВЕДЕННЫЙ ПОЛЬЗОВАТЕЛЬ НЕ ЯВЛЯЕТСЯ ПРЕМИУМ ПОЛЬЗОВАТЕЛЕМ*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `*[❗ИНФО❗] @${who.split`@`[0]} ТЕПЕРЬ ДАННЫЙ КОНТАКТ БОЛЬШЕ НЕ ЯВЛЯЕТСЯ ЧАСТЬЮ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕЙ*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|снять)премиум$/i
handler.group = true
handler.rowner = true
export default handler
