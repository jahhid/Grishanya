import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗ИНФО❗] ПРИМЕР ИСПОЛЬЗОВАНИЯ КОМАНДЫ ${usedPrefix + command} Minecraft*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, img, 'error.jpg', `*РЕЗУЛЬТАТ ${text}*`, m)
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(обои2?)$/i
export default handler
