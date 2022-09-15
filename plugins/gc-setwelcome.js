let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] ПРИВЕТСТВИЕ УСТАНОВЛЕНО ПРАВИЛЬНО ДЛЯ ЭТОЙ ГРУППЫ*')
} else throw `*[❗] ВВЕДИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ, КОТОРОЕ ВЫ ХОТИТЕ ДОБАВИТЬ И ИСПОЛЬЗОВАТЬ:*\n*- @user (упомянуть)*\n*- @group (название группы)*\n*- @desc (описание группы)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['сменаприветствия'] 
handler.admin = true
export default handler
