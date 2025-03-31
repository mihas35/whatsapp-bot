let handler = async (m, { conn, args }) => {
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
m.reply('_*✅ Описание группы было корректно изменено*_')
}
handler.help = ['Setdesc <text>']
handler.tags = ['group']
handler.command = /^описание$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
