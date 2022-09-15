let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'открыть': 'без объявления',
'закрыть': 'объявление',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'открыта': 'без объявления',
'закрыта': 'объявление',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] НЕВЕРНЫЙ ФОРМАТ!!*

*┏━━━❲ ✨ПРИМЕР✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} открыть*
*┠┉↯ ${usedPrefix + command} закрыть*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] ГРУППА НАСТРОЕНА ПРАВИЛЬНО*')}
}
handler.help = ['группа открыть / закрыть', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(группа|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
