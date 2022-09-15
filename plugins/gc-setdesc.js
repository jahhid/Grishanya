let handler = async (m, { conn, args }) => {
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
m.reply('*✅ Описание группы было изменено правильно*')
}
handler.help = ['Setdesc <text>']
handler.tags = ['group']
handler.command = /^сменаописания|setdesc$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
