import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═〘 ✯✯✯✯✯✯✯ 〙═╮
║◉🇮 🇳 🇫 🇮 🇳 🇮 🇽 ◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Привет, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ _*Владелец: Михаил*_ 
║➤ _*Номер: _wa.me/79520830782*_
╰═╡✯✯✯✯✯✯✯╞═╯
${readMore}

╭═〘 ✯✯✯✯✯✯✯ 〙═╮
┃ ➪ *ИНФО О БОТЕ*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ➪._*владелец*_
┣ ➪._*соединять [ссылка]*_
╰═╡✯✯✯✯✯✯✯✯╞═╯


╭═〘 ✯✯✯✯✯✯✯ 〙═╮
┃            ➪  *ГРУППЫ* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ➪._*удалить *[@Пльзователь]*_
┣ ➪._*группа *<открыта / закрыта>*_
┣ ➪._*групптайм *<Выбор> <Время>*_
┣ ➪._*дать_админа *<@tag>*_
┣ ➪._*снять_админа *<@tag>*_
┣ ➪._*админы [вызов админов]*_ 
┣ ➪._*сбросить_ссылку*_
┣ ➪._*ссылка*_
┣ ➪._*Имя *[Название группы]*_
┣ ➪._*Описание *[Описание группы]*_
┣ ➪._*Приветствие *[Приветствие группы]*_
┣ ➪._*Прощание *[Прощание группы]*_
┣ ➪._*призраки*_
┣ ➪._*код [текст]*_
╰═╡✯✯✯✯✯✯✯✯╞═╯


╭═〘 ✯✯✯✯✯✯✯ 〙═╮
┃    ➪  *Инструменты*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ➪._*аудио [ответ на видео]*_ 
┣ ➪._*отчёт [отчёт об ошибке]*_
┣ ➪._*пара [прикол]*_ 
╰═╡✯✯✯✯✯✯✯✯╞═╯

╭═〘 ✯✯✯✯✯✯✯ 〙═╮
┃       ➪     *СТИКЕРЫ*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ➪._*Стикер [Картинка/Гифка]*_
┣ ➪._*с [делает стикер]*_
┣ ➪._*спиздил [переимен стик]*_
╰═╡✯✯✯✯✯✯✯✯╞═╯

╭═〘 ✯✯✯✯✯✯✯ 〙═╮
┃ ➪ *ВЛАДЕЛЕЦ И МОДЕРАТОРЫ*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ➪._*включить приветствие*_
┣ ➪._*выключить приветствие*_
┣ ➪._*включить антиссылка*_
┣ ➪._*выключить антиссылка*_
┣ ➪._*включить антиссылка2*_
┣ ➪._*выключить антиссылка2*_
┣ ➪._*автоадмин*_ 
┣ ➪._*групплист*_ 
┣ ➪._*включить ограничение*_
┣ ➪._*выключить ограничение*_
┣ ➪._*включить авточтение*_
┣ ➪._*выключить авточтение*_
┣ ➪._*включить аудио*_ 
┣ ➪._*выключить аудио*_ 
┣ ➪._*включить антиприват*_ 
┣ ➪._*выключить антиприват*_ 
┣ ➪._*включить модадмин*_ 
┣ ➪._*выключить модадмин*_
┣ ➪._*бан [@tag]*_ 
┣ ➪._*снять_бан [@tag]*_ 
┣ ➪._*вызов [вызов всей группы]*_ 
┣ ➪._*выход*_ 
╰═╡✯✯✯✯✯✯✯✯╞═╯`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗ИНФОРМАЦИЯ❗] В МЕНЮ ЕСТЬ ОШИБКА И НЕ УДАЛОСЬ ЕЕ ОТПРАВИТЬ, ПОЖАЛУЙСТА, СООБЩИТЕ ОБ ЭТОМ ВЛАДЕЛЬЦУ БОТА*', m);
  }
};
handler.command = /^(меню)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
