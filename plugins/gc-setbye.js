let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[❗] ПРОЩАНИЕ УСТАНОВЛЕНО ПРАВИЛЬНО ДЛЯ ЭТОЙ ГРУППЫ*')
} else throw `*[❗] ВВЕДИТЕ ПРОЩАЛЬНОЕ СООБЩЕНИЕ, КОТОРОЕ ВЫ ХОТИТЕ ДОБАВИТЬ И ИСПОЛЬЗОВАТЬ:*\n*- @user (упомянуть)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['сменапрощания'] 
handler.admin = true
export default handler
