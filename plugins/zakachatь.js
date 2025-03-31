import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗ИНФОРМАЦИЯ ❗] ОТВЕТ НА ИЗОБРАЖЕНИЕ ИЛИ ВИДЕО, КОТОРОЕ БУДЕТ ПРЕОБРАЗОВАНО В ССЫЛКУ*'
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*ССЫЛКА НА ВАШ ФАЙЛ:* ${link}`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(закачать)$/i
export default handler
