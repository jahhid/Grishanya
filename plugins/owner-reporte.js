let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗ИНФО❗] ОТПРАВИТЬ ОТЧЕТ*\n\n*ПРИМЕР:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`
if (text.length < 10) throw `*[❗ИНФО❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙸𝙽𝙸𝙼𝙾 𝟷0 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`
if (text.length > 1000) throw `*[❗ИНФО❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙰𝚇𝙸𝙼𝙾 𝟷000 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*`
let teks = `*❒═════[ОТЧЕТ]═════❒*\n*┬*\n*├❧ НОМЕР:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ СООБЩЕНИЕ:* ${text}\n*┴*`
conn.reply('+79997187212@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️ ] ОТЧЕТ УСПЕШНО ОТПРАВЛЕН СОЗДАТЕЛЮ БОТА. ВАШ ОТЧЕТ БУДЕТ РАССМОТРЕН КАК МОЖНО СКОРЕЕ, ЕСЛИ ЭТО ЛОЖЬ ИЛИ ШУТКА, ОН БУДЕТ ТОЛЬКО ИГНОРИРОВАН*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(отчет|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
