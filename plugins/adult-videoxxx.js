let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'   
let res = pickRandom(asupan)
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['🔄 СЛЕДУЮЩАЯ 🔄', `/${command}`]], m)}
handler.help = ['videoxxx']
handler.tags = ['random']
handler.command = /^порно|vídeoxxx$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const asupan = [
"https://cdn2.embed-player.space/21/11/16/1098605.mp4",
"https://hot0.semyana.website/cached/828379.mp4",
"https://hot.embed-player.space/cached/1096462.mp4",
"https://cdn2.embed-player.space/19/09/26/736731.mp4",
"https://cdn.embed-player.space/15/07/14/Dtr9iHiemU.mp4",
]
