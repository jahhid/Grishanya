import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/uhodgu.mp3'
conn.sendFile(m.chat, vn, 'uhodgu.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /ухожу|до завтра|пока|merry chritmas/
handler.command = new RegExp
export default handler
