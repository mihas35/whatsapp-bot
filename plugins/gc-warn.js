let handler = async (m, { conn, text, command, usedPrefix }) => {
if (m.mentionedJid.includes(conn.user.jid)) return	
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*[❗] ПОМЕТКА ПОЛЬЗОВАТЕЛЯ ТЕГАМИ ИЛИ ОТВЕТ НА ГРУППОВОЕ СООБЩЕНИЕ, ЧТОБЫ ПРЕДУПРЕДИТЬ ПОЛЬЗОВАТЕЛЯ*\n\n*—◉ ПРИМЕР:*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ТЫ ПОЛУЧИЛ ПРЕДУПРЕЖДЕНИЕ В ЭТОЙ ГРУППЕ!`, `*ПРЕДУПРЕЖДЕНИЯ ${user.warn}/3*\n\n${wm}`, pp, [['📋 СПИСОК 📋', '.листпред']], m, { mentions: [who] })
	
if (user.warn >= 3) {
if (!bot.restrict) return m.reply('_*[❗ИНФОРМАЦИЯ ❗] У владельца бота не включены ограничения (#включить ограничение) свяжитесь с ним чтобы включить его.*_')        
user.warn = 0
await m.reply(`_Я предупреждал вас несколько раз!!_\n*@${who.split`@`[0]}* _Вы превысили*3* предупреждения, теперь вы будете удалены. 👽_`, Недействительный, { mentions: [who]})
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') 
} 
return !1
}
handler.command = /^(предупреждение)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
