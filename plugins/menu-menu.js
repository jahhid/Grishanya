import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*ミСалам Алейкум и Привет ${name}, ЗДЕСЬ ПОЛНОЕ МЕНЮ ☣ⒹⓞⓃ ⓀⓞⓂⓐⓇ☣ 彡*

*📅 ДАТА: ${week}, ${date}*
*📈 ВРЕМЯ АКТИВНОСТИ: ${uptime}*
*📊 ПОЛЬЗОВАТЕЛИ: ${rtotalreg}*

*<👽 ИНФОРМАЦИЯ ОБ ЭТОМ БОТЕ 👽/>*

° ඬ ⃟ 💟 _${usedPrefix}инфобот_
° ඬ ⃟ 💟 _${usedPrefix}список групп_
° ඬ ⃟ 💟 _${usedPrefix}владелец_
° ඬ ⃟ 💟 _Бот_ (использовать без префикса)

*<ПРИВОДИТЕ БОТА В СВОЮ ГРУППУ/>*

° ඬ⃟👽 _${usedPrefix}вступить *<ссылка на группу*_

*<ПРИКОЛЫ/>*

° ඬ⃟🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
° ඬ⃟🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
° ඬ⃟🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}puto *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}puta *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}manco *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}manca *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}rata *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}love *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pregunta *<texto>*_
° ඬ⃟🎖️ _${usedPrefix}slot *<apuesta>*_
° ඬ⃟🎖️ _${usedPrefix}pvp *<@tag>*_
° ඬ⃟🎖️ _${usedPrefix}simi *<texto>*_
° ඬ⃟🎖️ _${usedPrefix}topgays_
° ඬ⃟🎖️ _${usedPrefix}topotakus_
° ඬ⃟🎖️ _${usedPrefix}formarpareja_
° ඬ⃟🎖️ _${usedPrefix}verdad_
° ඬ⃟🎖️ _${usedPrefix}reto_

*<АКТИВИРОВАТЬ ИЛИ ДЕАКТИВИРОВАТЬ/>*

° ඬ⃟☑️ _${usedPrefix}включить *приветствие*_
° ඬ⃟☑️ _${usedPrefix}выключить *приветствие*_
° ඬ⃟☑️ _${usedPrefix}включить *modohorny*_
° ඬ⃟☑️ _${usedPrefix}выключить *modohorny*_
° ඬ⃟☑️ _${usedPrefix}включить *антиссылка*_
° ඬ⃟☑️ _${usedPrefix}выключить *антиссылка*_
° ඬ⃟☑️ _${usedPrefix}включить *антиссылка2*_
° ඬ⃟☑️ _${usedPrefix}выключить *антиссылка2*_
° ඬ⃟☑️ _${usedPrefix}включить *обнаружить*_
° ඬ⃟☑️ _${usedPrefix}выключить *обнаружить*_
° ඬ⃟☑️ _${usedPrefix}включить *аудио*_
° ඬ⃟☑️ _${usedPrefix}выключить *аудио*_
° ඬ⃟☑️ _${usedPrefix}включить *автостикер*_
° ඬ⃟☑️ _${usedPrefix}выключить *автостикер*_

*<ОТЧЕТЫ ОБ ОШИБКАХ/>*

° ඬ⃟🔰 _${usedPrefix}отчет *<текст>*_

*<ЗАГРУЗКИ/>*

° ඬ⃟📥 _${usedPrefix}facebook *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}mediafire *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}gitclone *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}gdrive *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}tiktok *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}play.1 *<texto / enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}play.2 *<texto / enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}плей *<исполнитель и название>*_
° ඬ⃟📥 _${usedPrefix}playdoc *<texto>*_
° ඬ⃟📥 _${usedPrefix}плейлист *<texto>*_
° ඬ⃟📥 _${usedPrefix}playlist2 *<texto>*_
° ඬ⃟📥 _${usedPrefix}spotify *<texto>*_
° ඬ⃟📥 _${usedPrefix}изображение *<название>*_
° ඬ⃟📥 _${usedPrefix}pinteret *<texto>*_
° ඬ⃟📥 _${usedPrefix}обои *<название>*_
° ඬ⃟📥 _${usedPrefix}обои2 *<название>*_
° ඬ⃟📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}igstalk *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}igstory *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}tiktokstalk *<nombre de usuario>*_

*<ГРУППЫ/>* 

° ඬ⃟💎 _${usedPrefix}добавить *<номер>*_
° ඬ⃟💎 _${usedPrefix}удалить *<@уча>*_
° ඬ⃟💎 _${usedPrefix}дать админа *<@уча>*_
° ඬ⃟💎 _${usedPrefix}снять админа *<@уча>*_
° ඬ⃟💎 _админы *<текст>*_ (использовать без префикса)
° ඬ⃟💎 _${usedPrefix}инфо группы_
° ඬ⃟💎 _${usedPrefix}ссылка_
° ඬ⃟💎 _${usedPrefix}сменить имя *<текст>*_
° ඬ⃟💎 _${usedPrefix}сменить описание *<текст>*_
° ඬ⃟💎 _${usedPrefix}внимание *<текст>*_
° ඬ⃟💎 _${usedPrefix}установить приветствие *<текст>*_
° ඬ⃟💎 _${usedPrefix}установить до свидание *<текст>*_
° ඬ⃟💎 _${usedPrefix}скрыть тег *<текст>*_

*<ПРЕОБРАЗОВАТЕЛИ/>*

° ඬ⃟🧧 _${usedPrefix}визображение *<конвертирует стикер в изображение>*_
° ඬ⃟🧧 _${usedPrefix}вмп3 *<конвертирует видео / или голосовое>*_
° ඬ⃟🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
° ඬ⃟🧧 _${usedPrefix}tovideo *<responde a un audio>*_
° ඬ⃟🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _${usedPrefix}tts es *<texto>*_

*<ЭФФЕКТЫ И ЛОГОТИПЫ/>*

° ඬ⃟🖍️ _${usedPrefix}логотип *<эффекты> <текст>*_
° ඬ⃟🖍️ _${usedPrefix}simpcard *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}hornycard *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}lolice *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}ytcomment *<texto>*_
° ඬ⃟🖍️ _${usedPrefix}itssostupid_
° ඬ⃟🖍️ _${usedPrefix}pixelar_
° ඬ⃟🖍️ _${usedPrefix}blur_

*<СТРОГО 18+/>*

° ඬ⃟👾 _${usedPrefix}аниме_
° ඬ⃟👾 _${usedPrefix}аниме2_
° ඬ⃟👾 _${usedPrefix}аниме3_
° ඬ⃟👾 _${usedPrefix}аниме4_
° ඬ⃟👾 _${usedPrefix}аниме5_
° ඬ⃟👾 _${usedPrefix}аниме6_
° ඬ⃟👾 _${usedPrefix}аниме7_
° ඬ⃟👾 _${usedPrefix}эродевушки_
° ඬ⃟👾 _${usedPrefix}аниме8_
° ඬ⃟👾 _${usedPrefix}аниме9_
° ඬ⃟👾 _${usedPrefix}аниме10_
° ඬ⃟👾 _${usedPrefix}девушка_
° ඬ⃟👾 _${usedPrefix}девушка2_
° ඬ⃟👾 _${usedPrefix}девушка3_
° ඬ⃟👾 _${usedPrefix}девушка4_
° ඬ⃟👾 _${usedPrefix}девушка5_
° ඬ⃟👾 _${usedPrefix}девушка6_
° ඬ⃟👾 _${usedPrefix}жопа_
° ඬ⃟👾 _${usedPrefix}лесбиянки_
° ඬ⃟👾 _${usedPrefix}порно_
° ඬ⃟👾 _${usedPrefix}сиськи_
° ඬ⃟👾 _${usedPrefix}член_

*<ЭФФЕКТЫ И АУДИО/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

° ඬ⃟🎤 _${usedPrefix}bass_
° ඬ⃟🎤 _${usedPrefix}blown_
° ඬ⃟🎤 _${usedPrefix}deep_
° ඬ⃟🎤 _${usedPrefix}earrape_
° ඬ⃟🎤 _${usedPrefix}fast_
° ඬ⃟🎤 _${usedPrefix}fat_
° ඬ⃟🎤 _${usedPrefix}nightcore_
° ඬ⃟🎤 _${usedPrefix}reverse_
° ඬ⃟🎤 _${usedPrefix}robot_
° ඬ⃟🎤 _${usedPrefix}slow_
° ඬ⃟🎤 _${usedPrefix}smooth_
° ඬ⃟🎤 _${usedPrefix}tupai_

*<АНОНИМНЫЙ ЧАТ/>*

° ඬ⃟📳 _${usedPrefix}start_
° ඬ⃟📳 _${usedPrefix}next_
° ඬ⃟📳 _${usedPrefix}leave_

*<ПОИСКОВЫЕ СИСТЕМЫ/>*

° ඬ⃟🔍 _${usedPrefix}xnxxsearch *<texto>*_
° ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
° ඬ⃟🔍 _${usedPrefix}google *<texto>*_
° ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
° ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
° ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_
° ඬ⃟🔍 _${usedPrefix}apkdone *<texto>*_
° ඬ⃟🔍 _${usedPrefix}apkgoogle *<texto>*_
° ඬ⃟🔍 _${usedPrefix}apkmody *<texto>*_
° ඬ⃟🔍 _${usedPrefix}apkshub *<texto>*_
° ඬ⃟🔍 _${usedPrefix}happymod *<texto>*_
° ඬ⃟🔍 _${usedPrefix}hostapk *<texto>*_
° ඬ⃟🔍 _${usedPrefix}revdl *<texto>*_
° ඬ⃟🔍 _${usedPrefix}toraccino *<texto>*_
° ඬ⃟🔍 _${usedPrefix}uapkpro *<texto>*_

*<ИНСТРУМЕНТЫ/>*

° ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
° ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
° ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_

*<ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸/>*

° ඬ⃟💵 _${usedPrefix}balance_
° ඬ⃟💵 _${usedPrefix}claim_
° ඬ⃟💵 _${usedPrefix}top_
° ඬ⃟💵 _${usedPrefix}levelup_
° ඬ⃟💵 _${usedPrefix}myns_
° ඬ⃟💵 _${usedPrefix}perfil_
° ඬ⃟💵 _${usedPrefix}work_
° ඬ⃟💵 _${usedPrefix}minar_
° ඬ⃟💵 _${usedPrefix}buy_
° ඬ⃟💵 _${usedPrefix}buyall_
° ඬ⃟💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
° ඬ⃟💵 _${usedPrefix}verificar_
° ඬ⃟💵 _${usedPrefix}unreg *<numero de serie>*_

*<СТИКЕРЫ/>*

° ඬ⃟👽 _${usedPrefix}sticker *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}sticker *<enlace / link / url>*_
° ඬ⃟👽 _${usedPrefix}s *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}s *<enlace / link / url>*_
° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _${usedPrefix}semoji *<tipo> <emoji>*_
° ඬ⃟👽 _${usedPrefix}attp *<texto>*_
° ඬ⃟👽 _${usedPrefix}ttp *<texto>*_
° ඬ⃟👽 _${usedPrefix}pat *<@tag>*_
° ඬ⃟👽 _${usedPrefix}slap *<@tag>_
° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
° ඬ⃟👽 _${usedPrefix}dado_
° ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
° ඬ⃟👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
° ඬ⃟👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

*<ВЛАДЕЛЕЦ И МОДЕРАТОРЫ/>*

° ඬ⃟👑 _${usedPrefix}безопасность_
° ඬ⃟👑 _${usedPrefix}включить *ограничение*_
° ඬ⃟👑 _${usedPrefix}выключить *ограничение*_
° ඬ⃟👑 _${usedPrefix}включить *авточтение*_
° ඬ⃟👑 _${usedPrefix}выключить *авточтение*_
° ඬ⃟👑 _${usedPrefix}включить *публичный*_
° ඬ⃟👑 _${usedPrefix}выключить *публичный*_
° ඬ⃟👑 _${usedPrefix}включить *только владелец*_
° ඬ⃟👑 _${usedPrefix}выключить *только владелец*_
° ඬ⃟👑 _${usedPrefix}включить *только группа*_
° ඬ⃟👑 _${usedPrefix}выключить *только группа*_
° ඬ⃟👑 _${usedPrefix}блокировкачата_
° ඬ⃟👑 _${usedPrefix}разблокировкачата_
° ඬ⃟👑 _${usedPrefix}блокировкапользователя *<@tag>*_
° ඬ⃟👑 _${usedPrefix}разблокировкапользователя *<@tag>*_
° ඬ⃟👑 _${usedPrefix}bc *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcchats *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcgc *<texto>*_
° ඬ⃟👑 _${usedPrefix}cleartpm_
° ඬ⃟👑 _${usedPrefix}перезапуск_
° ඬ⃟👑 _${usedPrefix}обновить_
° ඬ⃟👑 _${usedPrefix}датьпремиум *<@имя>*_
° ඬ⃟👑 _${usedPrefix}снятьпремиум *<@имя>*_
° ඬ⃟👑 _${usedPrefix}списокпремиум_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://chat.whatsapp.com', 'WHATSAPP','https://i.ibb.co/ygZQTjh/IMG-20220801-WA0925.jpg', 'НАЖМИ', [
['💻 ССЫЛКА НА ВЛАДЕЛЬЦА 💻', '/donasi'],
['🔖 ВЛАДЕЛЕЦ 🔖', '/владелец'],
['🧧 ИНФОБОТ 🧧', '/инфобот']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗ИНФО❗] В МЕНЮ ОШИБКА И НЕ ВОЗМОЖНО ОТПРАВИТЬ ЕЕ СООБЩИТЬ ВЛАДЕЛЬЦУ БОТА*', m)
throw e
}}
handler.command = /^(меню|меню3|menú3|memu3|memú3|help3|info3|comandos3|allmenu3|ayuda3|commands3|commandos3)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
