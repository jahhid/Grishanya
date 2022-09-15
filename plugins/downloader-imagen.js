import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗ИНФО❗] ПРИМЕР ИСПОЛЬЗОВАНИЯ КОМАНДЫ ${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🔎 *РЕЗУЛЬТАТ:* ${text}
🌎 *ПОИСК:* Google
`, author, link, link, '🔗 ССЫЛКА', null, null, [
['СЛЕДУЩАЯ', `/imagen ${text}`]
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|изображение)$/i
export default handler
