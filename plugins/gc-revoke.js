/* Creditos a https://github.com/ALBERTO9883 */

let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `🔹️ *_Связь группы была успешно восстановлена._*\n♾ • Новая ссылка: ${'https://chat.whatsapp.com/' + revoke}`, m)}
handler.command = ['сбросить_ссылку', 'revoke']
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
