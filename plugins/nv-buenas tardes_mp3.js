import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/zavtrak.mp3'
conn.sendFile(m.chat, vn, 'zavtrak.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /завтрак|обед|ужин|поесть/
handler.command = new RegExp
export default handler
