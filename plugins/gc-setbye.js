let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('_*[❗] Прощальное сообщение настроено правильно для этой группы.*_')
} else throw `_*[❗] Введите прощальное сообщение которое вы хотите добавить, используйте:*\n*- @user (упоминание)*_`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['прощание'] 
handler.admin = true
export default handler
