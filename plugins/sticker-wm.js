import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[❗ИНФОРМАЦИЯ ❗] ОТВЕТ НА СТИКЕР, К КОТОРОМУ ВЫ ХОТИТЕ ДОБАВИТЬ НАБОР И НАЗВАНИЕ,*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[❗ИНФОРМАЦИЯ ❗] ОТВЕТЫ НА СТИКЕР, К КОТОРОМУ ВЫ ХОТИТЕ ДОБАВИТЬ ПАКЕТ И ИМЯ*'
let img = await m.quoted.download()
if (!img) throw '*[❗ИНФОРМАЦИЯ❗] ОТВЕТЫ НА СТИКЕР, К КОТОРОМУ ВЫ ХОТИТЕ ДОБАВИТЬ ПАКЕТ И ИМЯ*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[❗ИНФОРМАЦИЯ ❗] ИЗВИНИТЕ, ЧТО-ТО НЕ ТАК. УБЕДИТЕСЬ, ЧТО ВЫ ОТВЕТИЛИ НА СТИКЕР И ДОБАВИЛИ ИМЯ ПАКЕТА И ИМЯ ПОЛЬЗОВАТЕЛЯ*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^спиздил$/i
export default handler
