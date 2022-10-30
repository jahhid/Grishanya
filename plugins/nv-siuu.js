import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/100gramm.mp3'
conn.sendFile(m.chat, vn, '100gramm.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /воды|похмелье|плохо|вино|пиво|водка|siuuuu|siiiiuuuuu|siu|SIIIIUUU/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler


