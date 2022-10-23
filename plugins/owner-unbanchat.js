let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[❗ИНФО❗] 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^разблокировкачата$/i
handler.rowner = true
export default handler
