/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇   「 ☬ССЫЛКА НА МОЮ ГРУППУ☬ 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ Салам Алейкум ${name} 💙*
*┃*
*┃ ХОЧЕШЬ УЗНАТЬ О БОТЕ*
*┃ ИЛИ ХОЧЕШЬ ВЗЯТЬ В АРЕНДУ :𝟹*
*┃*
┃ https://chat.whatsapp.com
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://chat.whatsapp.com/EWCRxPMC3w3CVV8ncqxxbh', 'НАЖМИ НА ССЫЛКУ', null, null, [['ГЛАВНОЕ МЕНЮ', '/меню']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|аренда|apoyar$/i
export default handler
