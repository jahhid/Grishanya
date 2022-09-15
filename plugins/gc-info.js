let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/info_group.jpg'
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 ☆☬ИНФОРМАЦИЯ О ГРУППЕ☬☆ 」*\n
*ИДЕНТИФИКАЦИЯ ГРУППЫ:* 
${groupMetadata.id}

*ИМЯ:* 
${groupMetadata.subject}

*ОПИСАНИЕ:* 
${groupMetadata.desc?.toString() || 'БЕЗ ОПИСАНИЯ'}

*ВСЕГО УЧАСТНИКОВ:*
${participants.length} Участники

*СОЗДАТЕЛЬ ГРУППЫ:* 
@${owner.split('@')[0]}

*АДМИНЫ ГРУППЫ:*
${listAdmin}

*АВТОМАТИЧЕСКИЕ ВАРИАНТЫ:*
—◉ ПРИВЕТСТВИЕ: ${welcome ? '✅' : '❌'}
—◉ ОБНАРУЖИТЬ: ${detect ? '✅' : '❌'} 
—◉ АНТИ-ССЫЛКА: ${antiLink ? '✅' : '❌'} 
—◉ АНТИ-ССЫЛКА 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ АВТОСТИКЕР: ${autosticker ? '✅' : '❌'} 
—◉ АУДИО: ${audios ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command =
handler.group = true
export default handler

import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Far Cry New Dawn.mp3'
conn.sendFile(m.chat, vn, 'Far Cry New Dawn.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix =
handler.command =  /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.fail = null
handler.exp = 100
