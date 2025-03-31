let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*Прощай, бот прощается! (≧ω≦)ゞ*') 
await conn.groupLeave(id)}
handler.command = /^(out|leavegc|выход|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
export default handler
