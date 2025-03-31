let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`_*${toM(a)}, Вы должны жениться 💍 С ${toM(b)}, Они хорошо подходят друг к другу. 💓*_`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['пара','formarparejas']
handler.group = true
export default handler
