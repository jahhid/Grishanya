const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu.gif'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ミ💖 Салам Алейкум _${name}_ 💖彡*

╠═〘 СПИСОК ВОЗМОЖНОСТЕЙ БОТА И АРЕНДА 〙

° ✯-ПОИСК МУЗЫКИ_
° ✯-ДЕЛАЕТ СТИКЕРЫ С ВАШИМ ИМЕНЕМ_
° ✯-АВТОСТИКЕРЫ_
° ✯-АНТИССЫЛКА_
° ✯-АНТИССЫЛКА 2_ 
° ✯-УДАЛЕНИЕ УЧАСТНИКА_
° ✯-ДОБАВЛЕНИЕ УЧАСТНИКА _
° ✯-ДАЕТ АДМИНА_
° ✯-СНИМАЕТ АДМИНА_
° ✯-ПРЕОБРАЗОВАНИЕ СТИКЕРА В КАРТИНКУ_
° ✯-ВИКИПЕДИЯ_
° ✯-ПРЕОБРАЗОВАНИЕ ВИДЕО ИЛИ ГОЛОСОВОГО В MP3_
° ✭-ВЫЗОВ ВСЕХ УЧАСТНИКОВ ГРУППЫ_
° ✬-ВЫЗОВ АДМИНОВ ГРУППЫ_
° ✯-ССЫЛКА НА ГРУППУ_
° ✯-ЛОГОТИПЫ_
° ✯-ИНФО ГРУППЫ_
° ✯-СМЕНА ОПИСАНИЯ ГРУППЫ_
° ✯-БЛОКИРОВКА ЧАТА_
° ✯-БЛОКИРОВКА ПОЛЬЗОВАТЕЛЯ_
° ✯-ДАЕТ ПРЕМИУМ_

° ✭✭✭✭ ХОТИТЕ УЗНАТЬ ПРО АРЕНДУ ПИШИТЕ ВЛАДЕЛЬЦУ БОТА ✭✭✭✭_

`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/jahhid', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['ГЛАВНОЕ МЕНЮ', '/меню']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(возможности||)$/i
handler.fail = null
export default  handler
