/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '_*[❗] ЗДРАВСТВУЙТЕ, СОЗДАТЕЛЬ, КАК ЭТО? ВЫ УЖЕ ЯВЛЯЕТЕСЬ АДМИНИСТРАТОРОМ ЭТОЙ ГРУППЫ*_'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[❗] ОШИБКА, НЕ УДАЕТСЯ ДАТЬ АДМИНИСТРАТОРУ*')}}
handler.command = /^автоадмин$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
