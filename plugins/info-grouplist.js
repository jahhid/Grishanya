let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\nโโ ${await conn.getName(jid)}\nโค ${jid} [${chat?.metadata?.read_only ? '๐ฝ๐พ ๐ฟ๐ฐ๐๐๐ธ๐ฒ๐ธ๐ฟ๐ฐ๐ฝ๐๐ด' : '๐ฟ๐ฐ๐๐๐ธ๐ฒ๐ธ๐ฟ๐ฐ๐ฝ๐๐ด'}]\n\n`
m.reply(`*ะกะะะกะะ ะะ ะฃะะ ะ ะะะขะะ ะซะฅ ะกะะะะข ะะะข:*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|ัะฟะธัะพะบะณััะฟะฟ|listadegrupo|gruposlista|listagrupos)$/i
export default handler
