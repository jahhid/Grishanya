import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/novenkiy.mp3'
conn.sendFile(m.chat, vn, 'novenkiy.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /читаем правила|Новенький|представьтесь|Buenos días/
handler.command = new RegExp
export default handler