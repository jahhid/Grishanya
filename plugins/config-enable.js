let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `СПИСОК ОПЦИЙ`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "АКТИВИРОВАТЬ ИЛИ ДЕАКТИВИРОВАТЬ ПРИВЕТСТВИЕ В ГРУППЕ", rowId: `${usedPrefix + command} приветствие`},
{title: "🌎 | РЕЖИМ ПУБЛИЧНЫЙ", description: "БОТ СТАНОВИТСЯ ДЛЯ ОБЩЕСТВЕННОГО ИЛИ ЧАСТНОГО ИСПОЛЬЗОВАНИЯ", rowId: `${usedPrefix + command} публичный`},
{title: "🔗 | АНТИССЫЛКА", description: "АКТИВИРУЙТЕ ИЛИ ДЕАКТИВИРУЙТЕ АНТИССЫЛКИ ГРУПП 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix + command} антиссылка`},   
{title: "🔗 | АНТИССЫЛКА 2", description: "ВКЛЮЧИТЕ ИЛИ ОТКЛЮЧИТЕ АНТИ-ССЫЛКИ, КОТОРЫЕ ИНИЦИАЛИРУЮТСЯ В HTTPS", rowId: `${usedPrefix + command} антиссылка`},    
{title: "🔎 | ОБНАРУЖИТЬ", description: "АКТИВИРОВАТЬ ИЛИ ДЕАКТИВИРОВАТЬ УВЕДОМЛЕНИЕ ЯВЛЯЕТСЯ НОВОЙ МОДИФИКАЦИЕЙ В ГРУППЕ", rowId: `${usedPrefix + command} обнаружить`},      
{title: "❗ | ОГРАНИЧЕНИЯ", description: "ВКЛЮЧИТЕ И ОТКЛЮЧИТЕ ОГРАНИЧЕНИЯ НА УДАЛЕНИЕ ЛЮДЕЙ ИЗ ГРУПП", rowId: `${usedPrefix + command} ограничения`},    
{title: "☑️ | АВТОЧТЕНИЕ", description: "АВТОМАТИЧЕСКИ ПОМЕТИТЬ РАЗГОВОР ПРОЧИТАННЫМ", rowId: `${usedPrefix + command} авточтение`},
{title: "🔊 | АУДИО", description: "ВКЛЮЧЕНИЕ И ОТКЛЮЧЕНИЕ ЗВУКОВЫХ КОМАНД БЕЗ ПРЕФИКСА", rowId: `${usedPrefix + command} аудио`},
{title: "👾 | АВТОСТИКЕР", description: "ВСЕ ИЗОБРАЖЕНИЯ, ВИДЕО ИЛИ ССЫЛКИ СТАНОВЯТСЯ СТИКЕРОМ", rowId: `${usedPrefix + command} автостикер`},
{title: "💬 | ТОЛЬКО ВЛАДЕЛЕЦ", description: "БОТ ОТВЕЧАЕТ НА КОМАНДЫ, ТОЛЬКО ЕСЛИ ЭТО ВЛАДЕЛЕЦ", rowId: `${usedPrefix + command} тольковладелец`},
{title: "🏢 | ТОЛЬКО ГРУППА", description: "БОТ БУДЕТ ОТВЕЧАТЬ НА КОМАНДЫ, ТОЛЬКО ЕСЛИ ЭТО ГРУППА", rowId: `${usedPrefix + command} толькогруппа`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `
▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬
║➤ *✨Салам Алейкум, ${name}!!*
▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬
┏━━━━━━━━━━━━━┓
┣❧ *Выберите один из параметров, которые выходят в следующем списке или нажмите на какую -то кнопку этого сообщения*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ _${usedPrefix}включить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *публичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *публичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *ограничения*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *ограничения*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *только владелец*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *только владелец*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *только группа*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *только группа*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *автостикер*_
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "ВЫБЕРИТЕ ЗДЕСЬ",
sections }

let isEnable = /true|включить|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаружить':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'удалить':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'антиудаление':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'публичный':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable          
break
case 'автостикер':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'аудио':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'ограничения':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'слушать':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'авточтение':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'тольковладелец':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'толькогруппа':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ ОПЦИИ: ${type} 
🎚️ СОСТОЯНИЕ: ${isEnable ? 'АКТИВИРОВАНО' : 'ДЕАКТИВИРОВАНО'}
📣 РАБОТАЕТ: ${isAll ? 'ЭТОТ БОТ' : isUser ? '' : 'В ЭТОМ ЧАТЕ'}`, author, null, [[`${isEnable ? '✖️ ОТКЛЮЧЕНО ✖️' : '✔️ ВКЛЮЧЕНО ✔️'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['👾 ГЛАВНОЕ МЕНЮ 👾', '.menu']],m)}

handler.help = ['вкл', 'выкл'].map(v => v + 'ючить <option>')
handler.tags = ['group', 'owner']
handler.command = /^((вкл|выкл)ючить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
