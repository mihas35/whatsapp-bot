let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗ИНФОРМАЦИЯ ❗] ВВЕДИТЕ ОТЧЕТ*\n\n*ПРИМЕР:*\n*${usedPrefix + command} Команда ${usedPrefix}Игра ничем не командует*`
if (text.length < 10) throw `*[❗ИНФОРМАЦИЯ ❗] ОТЧЕТ ДОЛЖЕН СОДЕРЖАТЬ НЕ МЕНЕЕ 10 СИМВОЛОВ!*`
if (text.length > 1000) throw `*[❗ИНФОРМАЦИЯ ❗] ОТЧЕТ ДОЛЖЕН СОДЕРЖАТЬ НЕ БОЛЕЕ 1000 СИМВОЛОВ!*`
let teks = `*❒═════[СЧЕТ]═════❒*\n*┬*\n*├❧ ЧИСЛО:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ СООБЩЕНИЕ:* ${text}\n*┴*`
conn.reply('79940139737@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️ ] ОТЧЕТ УСПЕШНО ОТПРАВЛЕН СОЗДАТЕЛЮ БОТА, ВАШ ОТЧЕТ БУДЕТ РАССМОТРЕН КАК МОЖНО СКОРЕЕ, ЕСЛИ ОН ЛОЖНЫЙ ИЛИ ШУТКА ТОЛЬКО ИГНОРИРУЕТСЯ*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(отчёт)$/i
export default handler
