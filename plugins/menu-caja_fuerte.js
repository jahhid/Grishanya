const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Komar.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
*_γπ ΠΡΡΠ²Π΅ΠΉΡ! ${name} πε½‘_*

γ€γ€ *π³οΈ<ΠΠΠΠΠΠΠ‘ΠΠΠ‘Π’Π¬/>π*

- π°πππΈ πΏππ΄π³π΄ πΆππ°ππ³π°π πΌπ΄π½ππ°πΉπ΄π πππ΄ πππΈπ΄ππ°π ππ΄π πΌπ°π ππ°ππ³π΄

*<πΈπΎβπΌπΎπΈβ πΈ ππΈ πππππΈ/>*

Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_

*<πππππΈ π»πΌ βπππΈβπ»ππ/>*

Β° ΰΆ¬βπ³οΈ _${usedPrefix}listamsg_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listavn_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listavideo_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listaaudio_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listaimg_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}listasticker_

*<ππΌβ ππΌππππ π πΈβββππππ/>*

Β° ΰΆ¬βπ³οΈ _${usedPrefix}vermsg *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}vervn *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}vervideo *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}veraudio *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}verimg *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}versticker *<texto/comando/palabra clave>*_

*<πΌππππβπΈβ/>*

Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
Β° ΰΆ¬βπ³οΈ _${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com', 'πΆπΈππ·ππ±', null, null, [
['ΠΠΠΠΠΠΠ ΠΠΠΠ?', '/ΠΌΠ΅Π½Ρ']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(Π±Π΅Π·ΠΎΠΏΠ°ΡΠ½ΠΎΡΡΡ)$/i
handler.rowner = true
handler.fail = null
export default handler
