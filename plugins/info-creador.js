let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ ЭТО НОМЕР МОЕГО СОЗДАТЕЛЯ wa.me//++79997187212*
`.trim()   
let buttonMessage= {
'document': { url: `https://chat.whatsapp.com` },
'mimetype': `application/${document}`,
'fileName': `「БОТ Grishanya 」`,
'fileLength':'./Komar.jpg',
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://chat.whatsapp.com',
'mediaType': 2,
'previewType': 'jpg',
'title': 'ЛУЧШИЙ БОТ WhatsApp',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://chat.whatsapp.com' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}меню`, buttonText: {displayText: 'МЕНЮ'}, type: 1}, 
{buttonId: `${usedPrefix}владелец`, buttonText: {displayText: 'ХОЗЯИН'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(владелец|creator|creador|propietario)$/i
export default handler
