/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇   「 ☬ССЫЛКА НА МОЮ ГРУППУ☬ 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ Привет ${name} 💙*
*┃*
*┃ НЕ УЗНАВАЙ О БОТЕ*
*┃ ФИГУШКИ ТЕБЕ А НЕ ГРИШАНЯ :𝟹*
*┃*
┃ https://chat.whatsapp.com
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://chat.whatsapp.com/KwZDOksu8Hx4IxXrNuhWJ8', 'НАЖМИ НА ССЫЛКУ', null, null, [['ГЛАВНОЕ МЕНЮ', '/меню']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|аренда|apoyar$/i
export default handler
