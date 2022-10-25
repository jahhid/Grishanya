import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let vn = './media/Komar.jpg'
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Жека Воробейᷦ', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloimages = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"images": { "mimetype":"images/jpg; codecs=opus", "seconds": "99569", "images": "true"   
}}}  

if (/^komar$/i.test(m.text)) {
    
conn.sendButton(m.chat, '*Привет, МОГУ Я ЧЕМ-НИБУДЬ ПОМОЧЬ?*', wm, [['МЕНЮ КОМАНД', `#меню`]], 'Беседа', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, 'Komar.jpg', null, m, true, { type: 'jpg', images: true, sendEphemeral: true, quoted: estiloimages })   
}
return !0
}
export default handler
