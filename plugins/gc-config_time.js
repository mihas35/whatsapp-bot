/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn)
          throw false
  }
  let isClose = {
	  'tutup': 'not_announcement',
	  'buka': 'not_announcement',
      'on': 'not_announcement',
	  '1': 'not_announcement',
	  'закрыть': 'announcement',
	  'открыть': 'announcement',
      'off': 'announcement',
      '0': 'announcement',
  }[(args[0] || '')]
  if (isClose === undefined) {
	  let caption = `
*• Пример:*
*${usedPrefix + command} open 1*
*${usedPrefix + command} close 1*
📌 *_Пример использования:_* *${usedPrefix + command} закрыть 1* 
*_🌿 Чтобы группа была закрыта на один час._*
`
      m.reply(caption)
	  throw false
  }
  let timeoutset = 86400000 * args[1] / 24
  await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
	  m.reply(`⚠️ Группа ${isClose == 'объявление' ? 'открыта' : 'закрыта'} ${args[1] ? `в течение *${clockString(timeoutset)} часа(ов)*` : ''}`)
  })
  if (args[1]) {
	 setTimeout(async () => {
            await conn.groupSettingUpdate(m.chat, `${isClose == 'Объявление' ? 'не_Объявление' : 'Объявление'}`).then(async _=>{
		    conn.reply(m.chat, `${isClose == 'not_announcement' ? '*Группа закрыта, теперь отправлять сообщения могут только администраторы!*' : '*Группа открыта, теперь все участники могут отправлять сообщения!*'}!`)
	    })
        }, timeoutset)
  }
  }
handler.help = ['групптайм *<открыть/закрыть>* *<время>*']
handler.tags = ['group']
handler.command = /^(групптайм)$/i

handler.botAdmin = true
handler.group = true 

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
