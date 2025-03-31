let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^группы$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*🍒 ГРУППЫ ДЛЯ ВАС🍒* 
*┏━━━━━━━━━━━ ┅*
*┇ПРИВЕТ 🖐️ ✧${name}✧*
*┣━━━━━━━━━━━ ┅*
*┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*┃🅢🅣🅘🅒🅚🅔🅡🅝🅐🅨*
*┃https://chat.whatsapp.com/HVzCx6A92RYAWiGUptLY5a*
*┃✧ССЫЛОЧНАЯ✧*
*┃https://chat.whatsapp.com/CvZxyCIV6j48M2LGJ740Xt* 
*┃🅑🅞🅣    🅦🅗🅐🅣🅢🅐🅟🅟* 
*┃https://chat.whatsapp.com/ISpFK7VojdJ9ihspSJGPZD*
*┃* 
*┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*┃*
*┗━━━━━━━━━━━ ┅*`, m) //wm, null, [['Меню', '#меню']], m) botones :V

}

if (/^Что такое бот?|Что за бот$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆::Что такое бот WhatsApp?::☆*
┆——————«•»——————
┆ Бот — это искусственный интеллект, который выполняет задачи
┆ для указания с помощью команд, в случае WhatsApp 
┆ Вы можете создавать стикеры, скачивать музыку, видео, 
┆ создавать пользовательские логотипы и многое другое, 
┆ Это автоматизированным способом, то есть человеком 
┆ не мешает процессу 
┆ Чтобы увидеть меню команд, вы можете использовать #меню
┆ 
┆ 「 ☆☬🇷🇺𝐏⃢𝐑𝐈𝐙𝐑𝐀𝐂⃢𝐊🇷🇺☬☆ 」
╰━━━⊰ ${vs} ⊱━━━━დ*`, m) //wm, null, [['Меню', '#меню']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
