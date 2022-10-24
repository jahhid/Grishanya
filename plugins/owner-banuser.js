let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗ИНФО❗] ВЫБЕРИТЕ @𝚝𝚊𝚐 ЛЮБОВА ПОЛЬЗОВАТЕЛЯ*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗ИНФО❗] ВЫБЕРИТЕ @𝚝𝚊𝚐 ЛЮБОВА ПОЛЬЗОВАТЕЛЯ*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*[❗ИНФО❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n*—◉ 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙿𝙾𝙳𝚁𝙰 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙷𝙰𝚂𝚃𝙰 𝚀𝚄𝙴 𝚂𝙴𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^бан$/i
handler.rowner = true
export default handler
