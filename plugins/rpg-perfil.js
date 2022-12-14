import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*๐ฝ๐พ๐ผ๐ฑ๐๐ด:* ${username} ${registered ? '(' + name + ') ': ''}
*๐ฝ๐๐ผ๐ด๐๐พ:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*๐ป๐ธ๐ฝ๐บ:* wa.me/${who.split`@`[0]}${registered ? '\n*๐ด๐ณ๐ฐ๐ณ:* ' + age + ' aรฑos' : ''}
*๐ป๐ธ๐ผ๐ธ๐๐ด:* ${limit} ๐๐๐พ๐
*๐๐ด๐ถ๐ธ๐๐๐๐ฐ๐ณ๐พ:* ${registered ? 'Si': 'No'}
*๐ฟ๐๐ด๐ผ๐ธ๐๐ผ:* ${prem ? 'Si' : 'No'}
*๐ฝ๐๐ผ๐ด๐๐พ ๐ณ๐ด ๐๐ด๐๐ธ๐ด:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['ะะะะะะะ ะะะะฎ', '/ะผะตะฝั']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
