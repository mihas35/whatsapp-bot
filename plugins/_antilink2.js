let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text, participants }) { 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`;
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0 
}    
await conn.sendMessage(m.chat, {text: `_В этой группе запрещенно отправлять ссылки поэтому вы будете исключены._${user}`, mentions: [m.sender]}, {quoted: m})
//await conn.sendButton(m.chat, `${lenguajeGB['smsEnlaceWatt']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${lenguajeGB['smsAvisoFG']()}${lenguajeGB['smsAllAdmin']()}`}`, wm, [`${lenguajeGB['smsApagar']()}`, '/disable antilink'], m)    
if (!isBotAdmin) return conn.sendMessage(m.chat, {text: `*⛔ антиссылка2 ⛔*\n${listAdmin}\n\n${lenguajeGB['smsAllAdmin']()}`, mentions: [...groupAdmins.map(v => v.id)] }, {quoted: m})
//m.reply(`${lenguajeGB['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)  
if (isBotAdmin) {
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
return !0
}}
