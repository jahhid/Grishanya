let handler = m => m
handler.before = async function (m) {
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|acepto|okay|si|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|no|rechazo|fuera|safa|gamau|nanti|ga(k.)?bisa)/i.test(m.text)) {
this.reply(m.chat, `*[โ] @${room.p2.split`@`[0]} ๐๐ด๐ฒ๐ท๐ฐ๐๐พ ๐ด๐ป ๐ฟ๐๐ฟ, ๐ด๐ป ๐ฟ๐๐ฟ ๐๐ด ๐ฒ๐ฐ๐ฝ๐ฒ๐ด๐ป๐ฐ*`, m)
delete this.suit[room.id]
return !0
}
room.status = 'play'
room.asal = m.chat
clearTimeout(room.waktu)
m.reply(`*๐ฎ ๐ถ๐ฐ๐ผ๐ด๐ - ๐ฟ๐๐ฟ - ๐ถ๐ฐ๐ผ๐ด๐ ๐ฎ*

*โโ ๐ด๐ป ๐น๐๐ด๐ถ๐พ ๐ฒ๐พ๐ผ๐ธ๐ด๐ฝ๐๐ฐ, ๐ป๐ฐ๐ ๐พ๐ฟ๐ฒ๐ธ๐พ๐ฝ๐ด๐ ๐ท๐ฐ๐ฝ ๐๐ธ๐ณ๐พ ๐ด๐ฝ๐๐ธ๐ฐ๐ณ๐พ๐ ๐ฐ ๐ป๐พ๐ ๐ฒ๐ท๐ฐ๐๐ ๐ฟ๐๐ธ๐๐ฐ๐ณ๐พ๐ ๐ณ๐ด @${room.p.split`@`[0]} ๐ @${room.p2.split`@`[0]}*

*โ ๐๐ด๐ป๐ด๐ฒ๐ฒ๐ธ๐พ๐ฝ๐ด๐ฝ ๐๐ฝ๐ฐ ๐พ๐ฟ๐ฒ๐ธ๐พ๐ฝ ๐ด๐ฝ ๐๐๐ ๐ฒ๐ท๐ฐ๐๐ ๐ฟ๐๐ธ๐๐ฐ๐ณ๐พ๐, ๐๐ด๐๐ฟ๐ด๐ฒ๐๐ธ๐๐ฐ๐ผ๐ด๐ฝ๐๐ด*
*โ ๐ด๐ป๐ด๐ถ๐ธ๐ ๐พ๐ฟ๐ฒ๐ธ๐พ๐ฝ ๐ด๐ฝ wa.me/${conn.user.jid.split`@`[0]}*`, m.chat, {
contextInfo: {
mentionedJid: [room.p, room.p2]
}
})
    
if (!room.pilih) this.sendHydrated(room.p, '*๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐ด๐ป๐ด๐ฒ๐ฒ๐ธ๐พ๐ฝ๐ด ๐๐ฝ๐ฐ ๐ณ๐ด ๐ป๐ฐ๐ ะกะะะะฃะฉะะะฃะฉะะฏ image.png๐ ๐พ๐ฟ๐ฒ๐ธ๐พ๐ฝ๐ด๐*', `๐ถ๐ฐ๐ฝ๐ฐ๐ณ๐พ๐ +${room.poin} ๐๐ฟ\n๐ฟ๐ด๐๐ณ๐ด๐ณ๐พ๐ -${room.poin_lose} ๐๐ฟ\n๐ด๐ผ๐ฟ๐ฐ๐๐ด +${room.poin_bot} ๐๐ฟ`, null, null, null, null, null, [['PIEDRA ๐ฟ', 'Piedra'], ['PAPEL ๐', 'Papel'], ['TIJERA โ๏ธ', 'Tijera']], m)
    
if (!room.pilih2) this.sendHydrated(room.p2, '*๐ฟ๐พ๐ ๐ต๐ฐ๐๐พ๐ ๐๐ด๐ป๐ด๐ฒ๐ฒ๐ธ๐พ๐ฝ๐ด ๐๐ฝ๐ฐ ๐ณ๐ด ๐ป๐ฐ๐ ะกะะะะฃะฉะะะฃะฉะะฏ image.png๐ ๐พ๐ฟ๐ฒ๐ธ๐พ๐ฝ๐ด๐*', `๐ถ๐ฐ๐ฝ๐ฐ๐ณ๐พ๐ +${room.poin} ๐๐ฟ\n๐ฟ๐ด๐๐ณ๐ด๐ณ๐พ๐ -${room.poin_lose} ๐๐ฟ\n๐ด๐ผ๐ฟ๐ฐ๐๐ด +${room.poin_bot} ๐๐ฟ`, null, null, null, null, null, [['PIEDRA ๐ฟ', 'Piedra'], ['PAPEL ๐', 'Papel'], ['TIJERA โ๏ธ', 'Tijera']], m)
                                    
room.waktu_milih = setTimeout(() => {
if (!room.pilih && !room.pilih2) this.sendButton(m.chat, `*[โ] ๐ฝ๐ธ๐ฝ๐ถ๐๐ฝ ๐น๐๐ถ๐ฐ๐ณ๐พ๐ ๐๐พ๐ผ๐พ ๐ป๐ฐ ๐ธ๐ฝ๐ธ๐ฒ๐ธ๐ฐ๐๐ธ๐๐ฐ ๐ณ๐ด ๐ด๐ผ๐ด๐ฟ๐ด๐๐ฐ๐ ๐ด๐ป ๐น๐๐ด๐ถ๐พ, ๐ด๐ป ๐ฟ๐๐ฟ ๐๐ด ๐ฐ๐ท ๐ฒ๐ฐ๐ฝ๐ฒ๐ด๐ป๐ฐ๐ณ๐พ*`, wm, null, [['ะะะะะะะ ะะะะฎ', '/ะผะตะฝั']], m)
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p
this.sendButton(m.chat, `*[โ] @${(room.pilih ? room.p2 : room.p).split`@`[0]} ๐ฝ๐พ ๐ด๐ป๐ด๐ถ๐ธ๐๐๐ด ๐ฝ๐ธ๐ฝ๐ถ๐๐ฝ๐ฐ ๐พ๐ฟ๐ฒ๐ธ๐พ๐ฝ, ๐ต๐ธ๐ฝ ๐ณ๐ด๐ป ๐ฟ๐๐ฟ*`.trim(), wm, null, [['ะะะะะะะ ะะะะฎ', '/ะผะตะฝั']], m)    
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)
}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(tijera|piedra|papel)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`*[ โ ] ๐ท๐ฐ๐ ๐ด๐ป๐ด๐ถ๐ธ๐ณ๐พ ${m.text}* ${!room.pilih2 ? `\n\n*๐ด๐๐ฟ๐ด๐๐ฐ๐ฝ๐ณ๐พ ๐ฐ ๐๐๐ด ๐ด๐ป ๐พ๐ฟ๐พ๐ฝ๐ด๐ฝ๐๐ด ๐ด๐ป๐ธ๐น๐ฐ*` : ''}`)
if (!room.pilih2) this.reply(room.p2, '*[โ] ๐ด๐ป ๐พ๐ฟ๐พ๐ฝ๐ด๐ฝ๐๐ด ๐ฐ๐ท ๐ด๐ป๐ด๐ถ๐ธ๐ณ๐พ, ๐ด๐ ๐๐ ๐๐๐๐ฝ๐พ ๐ณ๐ด ๐ด๐ป๐ด๐ถ๐ธ๐!!*', 0)
}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`*[ โ ] ๐ท๐ฐ๐ ๐ด๐ป๐ด๐ถ๐ธ๐ณ๐พ ${m.text}* ${!room.pilih ? `\n\n*๐ด๐๐ฟ๐ด๐๐ฐ๐ฝ๐ณ๐พ ๐ฐ ๐๐๐ด ๐ด๐ป ๐พ๐ฟ๐พ๐ฝ๐ด๐ฝ๐๐ด ๐ด๐ป๐ธ๐น๐ฐ*` : ''}`)
if (!room.pilih) this.reply(room.p, '*[โ] ๐ด๐ป ๐พ๐ฟ๐พ๐ฝ๐ด๐ฝ๐๐ด ๐ฐ๐ท ๐ด๐ป๐ด๐ถ๐ธ๐ณ๐พ, ๐ด๐ ๐๐ ๐๐๐๐ฝ๐พ ๐ณ๐ด ๐ด๐ป๐ด๐ถ๐ธ๐!!*', 0)
}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true

this.reply(room.asal, `*๐ฎ ๐ถ๐ฐ๐ผ๐ด๐ - ๐ฟ๐๐ฟ - ๐ถ๐ฐ๐ผ๐ด๐ ๐ฎ*

*โโ ๐๐ด๐๐๐ป๐๐ฐ๐ณ๐พ ๐ณ๐ด๐ป ๐น๐๐ด๐ถ๐พ*

*โ @${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` ๐ถ๐ฐ๐ฝ๐พ \n${room.poin} ๐๐ฟ\n๐ด๐ผ๐ฟ๐ฐ๐๐ด, ๐ฑ๐พ๐ฝ๐๐: ${room.poin_bot} ๐๐ฟ` : ` ๐ฟ๐ด๐๐ณ๐ธ๐พ ${room.poin_lose} ๐๐ฟ`}*
*โ @${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` ๐ถ๐ฐ๐ฝ๐พ \n${room.poin} ๐๐ฟ\n๐ด๐ผ๐ฟ๐ฐ๐๐ด, ๐ฑ๐พ๐ฝ๐๐: ${room.poin_bot} ๐๐ฟ` : ` ๐ฟ๐ด๐๐ณ๐ธ๐พ ${room.poin_lose} ๐๐ฟ`}*
`.trim(), m, { contextInfo: { mentionedJid: [room.p, room.p2] } })

if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]
}
return !0
}}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
