let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://github.com*`
let buttonMessage= {
'document': { url: `https://github.com` },
'mimetype': `application/${document}`,
'fileName': `「  Grishanya БоТ 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://chat.whatsapp.com',
'mediaType': 2,
'previewType': 'pdf',
'title': 'Лучший бот для ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://chat.whatsapp.com' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'МЕНЮ'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'НАЖМИ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['sc','скрипт']
export default handler
