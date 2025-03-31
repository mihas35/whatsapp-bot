let handler = async (m, { conn, text}) => {
if (!text) throw '_*[❗ИНФОРМАЦИЯ❗] Ввод @tag пользователя*_'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '_*[❗ИНФОРМАЦИЯ❗] Ввод @tag пользователя*_'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `_*[❗ИНФОРМАЦИЯ❗] Пользователь был успешно заблокирован*_\n_*—◉ Пользователь не сможет использовать Бота до тех пор, пока не будет разблокирован.*_`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^бан$/i
handler.rowner = true
export default handler
