let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('_*[❗] Приветственое сообщение правильно настроено для этой группы.*_')
} else throw `_*[❗] Введите приветственное сообщение которое вы хотите добавить, используйте:*_\n*- @user (упоминание)*\n*- @group (Название группы)*\n*- @desc (Описание группы)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['приветствие'] 
handler.admin = true
export default handler
