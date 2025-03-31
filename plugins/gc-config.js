let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'открыта': 'not_announcement',
'закрыта': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] ОШИБОЧНОЕ ФОРМАТИРОВАНИЕ!!*

*┏━━━❲ ✨ПРИМЕР✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} открыта*
*┠┉↯ ${usedPrefix + command} закрыта*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] ГРУППА НАСТРОЕНА ПРАВИЛЬНО*')}
}
handler.help = ['group open / close', 'группа открыта / закрыта']
handler.tags = ['group']
handler.command = /^(группа)$/i
handler.admin = true
handler.botAdmin = true
export default handler
