import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/dobroe utro.mp3'
conn.sendFile(m.chat, vn, 'dobroe utro.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /доброе утро|салам|салют|Ho me vengo|Oh me vengo|O me vengo/
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler