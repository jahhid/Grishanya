import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/siski.mp3'
conn.sendFile(m.chat, vn, 'siski.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /noche de paz|Сиськи|Noche de amor|noche de amor|Noche de Paz/
handler.command = new RegExp
export default handler

