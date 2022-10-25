import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/KoMaR.jpg'
conn.sendFile(m.chat, vn, 'KoMaR.jpg', null, m, true, {
type: ' JpgMessage ', 
ptt: true 
})
}
handler.command = /^(Don|Komar|Комар|ola🤖)$/i
handler.fail = null
handler.exp = 100
export default handler
