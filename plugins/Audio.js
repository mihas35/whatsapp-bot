import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*[❗ИНФОРМАЦИЯ❗] ОТВЕТ НА ВИДЕО ИЛИ ГОЛОСОВУЮ ЗАМЕТКУ, КОТОРУЮ ВЫ ХОТИТЕ ПРЕОБРАЗОВАТЬ В АУДИО/MP3*`
let media = await q.download()
if (!media) throw '*[❗ИНФОРМАЦИЯ ❗] ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА ПРИ ЗАГРУЗКЕ ВИДЕО, ПОВТОРИТЕ ПОПЫТКУ*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*[❗ИНФОРМАЦИЯ ❗] ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА ПРИ ПРЕОБРАЗОВАНИИ ГОЛОСОВОЙ ЗАМЕТКИ В АУДИО/MP3, ПОВТОРИТЕ ПОПЫТКУ*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = /^(аудио)$/i
export default handler
