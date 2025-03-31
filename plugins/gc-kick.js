let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '_*[ ⚠️ ] ВЛАДЕЛЕЦ ОГРАНИЧИЛ (включить ограничение / выключить ограничение) ИСПОЛЬЗОВАНИЕ ЭТОЙ КОМАНДЫ*_'
let kicktext = `_*[❗] ПОМЕТКА ПОЛЬЗОВАТЕЛЯ ТЕГАМИ ИЛИ ОТВЕТ НА ГРУППОВОЕ СООБЩЕНИЕ, ЧТОБЫ УДАЛИТЬ ПОЛЬЗОВАТЕЛЯ*_\n\n*—◉ ПРИМЕР:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(удалить)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
