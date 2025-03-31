let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗ИНФОРМАЦИЯ ❗] ВВОД @TAG ПОЛЬЗОВАТЕЛЯ*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗ИНФОРМАЦИЯ ❗] ВВОД @TAG ПОЛЬЗОВАТЕЛЯ*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗ИНФОРМАЦИЯ ❗] ПОЛЬЗОВАТЕЛЬ УСПЕШНО РАЗБЛОКИРОВАН*\n*—◉ ТЕПЕРЬ ПОЛЬЗОВАТЕЛЬ МОЖЕТ ИСПОЛЬЗОВАТЬ БОТА*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^снять_бан$/i
handler.rowner = true
export default handler
