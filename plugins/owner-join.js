let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ ТРЕВОГА ⚠️ ] НЕПРАВИЛЬНОЕ ИЛИ ОТСУТСТВУЮЩЕЕ ЗВЕНО*\n*👉🏻 ВВЕДИТЕ ССЫЛКУ НА ГРУППУ*\n\n*ПРИМЕР:*\n*#соединять https://chat.whatsapp.com/ISpFK7VojdJ9ihspSJGPZD*\n\n*[❗ИНФОРМАЦИЯ ❗] НЕ ОТВЕЧАЙТЕ НИ НА ОДНО СООБЩЕНИЕ, МОЖЕТ ВЫЗВАТЬ ПОМЕХИ, ПИШИТЕ ЕГО ТОЛЬКО КАК НОВОЕ СООБЩЕНИЕ*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*БОТ УСПЕШНО ПРИСОЕДИНИЛСЯ К ГРУППЕ, НАСЛАЖДАЙТЕСЬ БОТОМ! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗ИНФОРМАЦИЯ❗] НОВЫЙ ЗАПРОС БОТА ДЛЯ ГРУППЫ [❗ИНФОРМАЦИЯ ❗]*\n\n*—◉ НОМЕР ЗАЯВИТЕЛЯ:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ ССЫЛКА НА ГРУППУ, В КОТОРОЙ ЗАПРАШИВАЕТСЯ БОТ:* ' + link, jid)

await m.reply('*[❗ИНФОРМАЦИЯ ❗] ССЫЛКА НА ВАШУ ГРУППУ БЫЛА ОТПРАВЛЕНА МОЕМУ ВЛАДЕЛЬЦУ*\n\n*👉🏻 ВАША ГРУППА БУДЕТ ОЦЕНИВАТЬСЯ, И ВЛАДЕЛЕЦ БОТА РЕШИТ, ДОБАВЛЯТЬ МЕНЯ ИЛИ НЕТ*\n\n*[❗ИНФОРМАЦИЯ ❗] ВОТ НЕКОТОРЫЕ ИЗ ПРИЧИН, ПО КОТОРЫМ ВАША ЗАЯВКА МОЖЕТ БЫТЬ ОТКЛОНЕНА:*\n*1.- БОТ НАСЫЩЕН*\n*2.- РАНЕЕ БОТ БЫЛ УДАЛЕН ИЗ ГРУППЫ*\n*3.- СВЯЗЬ ГРУППЫ БЫЛА ВОССТАНОВЛЕНА*\n*4.-БОТ НЕ ДОБАВЛЯЕТСЯ В ГРУППЫ ПО РЕШЕНИЮ ВЛАДЕЛЬЦА*\n\n*👉🏻 ИМЕЙТЕ В ВИДУ, ЧТО ОТВЕТ НА ВАШ ЗАПРОС О ПРИСОЕДИНЕНИИ БОТА К ГРУППЕ МОЖЕТ ЗАНЯТЬ НЕСКОЛЬКО ЧАСОВ ИЛИ ДНЕЙ, НАБЕРИТЕСЬ ТЕРПЕНИЯ*')}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^соединять$/i
export default handler
