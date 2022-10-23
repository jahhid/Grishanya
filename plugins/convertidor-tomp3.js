import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗ИНФО❗] ОТВЕТЬТЕ НА ВИДЕО ИЛИ ГОЛОСОВУЮ ЗАПИСКУ, КОТОРУЮ ВЫ ХОТИТЕ ПРЕОБРАЗОВАТЬ В АУДИО/MP3*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗ИНФО❗] ИЗВИНИТЕ, ПРИ ЗАГРУЗКЕ ВАШЕГО ВИДЕО ПРОИЗОШЛА ОШИБКА. ПОПРОБУЙТЕ ЕЩЕ РАЗ*'
if (!media && !/audio/.test(mime)) throw '*[❗ИНФО❗] ИЗВИНИТЕ, ПРИ ЗАГРУЗКЕ ВАШЕЙ ЗАМЕТКИ ПРОИЗОШЛА ОШИБКА. ПОПРОБУЙТЕ ЕЩЕ РАЗ*'
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗ИНФО❗] ИЗВИНИТЕ, ПРИ ПРЕОБРАЗОВАНИИ ВАШЕЙ ГОЛОСОВОЙ ЗАПИСКИ В АУДИО/MP3 ПРОИЗОШЛА ОШИБКА. ПОПРОБУЙТЕ ЕЩЕ РАЗ*'
if (!audio.data && !/video/.test(mime)) throw '*[❗ИНФО❗] ИЗВИНИТЕ, ПРИ КОНВЕРТИРОВАНИИ ВАШЕГО ВИДЕО В АУДИО/MP3 ПРОИЗОШЛА ОШИБКА. ПОПРОБУЙТЕ ЕЩЕ РАЗ*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['вмп3', 'toaudio', 'mp3']
export default handler
