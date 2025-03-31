let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*ღ ВЫЗОВ ВСЕХ УЧАТСНИКОВ ГРУППЫ!*`
let teks = `╭━〔 *ВЫЗОВ ВСЕХ.* 〕
`
for (let mem of participants) {
teks += `┃⊹ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `╰━━━[ 👻 ]━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(вызов)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
