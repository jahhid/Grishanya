import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/gzhopa.mp3'
conn.sendFile(m.chat, vn, 'gzhopa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Ублюдок|жопа|Жопа|тормоз|Тормоз|vendes tu pack|Vendes tu pack|Vendes tu pack?|vendes tu pack|Pasa Pack Bot|pasa pack Bot|pasa tu pack Bot|Pásame tus fotos desnudas|pásame tu pack|me pasas tu pak|me pasas tu pack|pasa pack/
handler.command = new RegExp
export default handler
