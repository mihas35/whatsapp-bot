let handler = async (m, { conn }) => {
try {
let pp = imagen4
let img = await(await fetch('https://github.com/BrunoSobrino.png')).buffer()
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭────[ *☆☬🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺☬☆* ]
│
│ *➤ Привет  ${taguser}*
│
│ *➪ 🤖 Время работы:* ${uptime}
│ *➪ ✅ Бот активен*
│ *➪ 👑 Владелец : Михаил*
╰────────────────`.trim()
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: 'ОФИЦИАЛЬНЫЕ АККАУНТЫ', body: '𝙱𝚈 @𝐵𝑟𝑢𝑛𝑜𝑆𝑜𝑏𝑟𝑖𝑛𝑜', thumbnail: img, sourceUrl: `https://www.atom.bio/theshadowbrokers-team`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*🤖 Время запроса:*                  *╭═〘✯✯✯✯✯✯✯✯✯〙═╮* ${uptime}                   *╰═╡✯✯✯✯✯✯✯✯✯╞═╯*`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(статус)$/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n│ *➪ 💥 ` + d, ' День* ', `\n│ *➪ 💫 ` + h, ' Час* ', `\n│ *➪ 💠 ` + m, ' Минута* ', `\n│ *➪ ♦ ` + s, ' Секунда*'].map(v => v.toString().padStart(2, 0)).join('')}
