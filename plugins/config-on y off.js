let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let isEnable = /true|включить|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let setting = global.db.data.settings
let type = (args[0] || '').toLowerCase()
let isAll = false
let isUser = false
switch (type) {
		
case 'ограничение': case 'ограничение':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
		
case 'приветствие': case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
		
case 'обнаружение': case 'Уведомления': case 'Автоматическое определение':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'антифото': case 'Модовер': case 'режимНаблюдение': case 'ModObserve': case 'Антивьюонсе':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'антиссылка': case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break

case 'антиссылка2': case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break

case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break

case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'антифейк': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break

case 'общественный': case 'Общественный':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
		
case 'jadibotmd': case 'modejadibot': case 'infinix': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = !isEnable
break 
		
case 'авточтение': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
		
case 'антивызов': case 'antillamar': case 'antillamada':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'модадмин': case 'modeadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    

case 'autorespond': case 'автоответчик':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autorespond = isEnable 
break
		
case 'антиудаление': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break

case 'антиприват':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
		
case 'реакции': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
default:
if (!/[01]/.test(command)) return m.reply(`
${lenguajeGB.smsConfi1bot()}\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeGB.smsNoGg()}`} 
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'обнаружение' : 'обнаружение'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'приветствие' : 'приветствие'}*\n 
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антиссылка' : 'антиссылка'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антиссылка2' : 'антиссылка2'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антифейк' : 'антифейк'}*\n
${lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeGB.smsNoGg()}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'модадмин' : 'модадмин'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`} 
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'ограничение' : 'ограничение'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'общественный' : 'общественный'}*\n 
${lenguajeGB.smsParaOw() + ' ' + `${bot.antiprivado ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антиприват' : 'антиприват'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антивызов' : 'антивызов'}*\n
${lenguajeGB.smsParaOw() + ' ' + `${global.opts['autoread'] ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'авточтение' : 'авточтение'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${chat.delete ? '✅' : '❌'}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антиудаление' : 'антиудаление'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${chat.antiver ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'антифото' : 'антифото'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${chat.reaction ? '✅' : '❌'}`}
🌼 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'реакции' : 'реакции'}*\n
${lenguajeGB.smsParaAdYOw() + ' ' + `${chat.autorespond ? '✅' : '❌'}`}
🌸 \`\`\`${usedPrefix}включить/выключить\`\`\` *${lenguajeGB.lenguaje() == 'es' ? 'автоответчик' : 'автоответчик'}*\n`.trim())
return false
}
m.reply(`${lenguajeGB['smsAvisoEG']()}*⭔ ${lenguajeGB.smsConfi2bot()}:* _${type}_
*⭔ ${lenguajeGB.smsConfi3bot()}:* _${isEnable ? lenguajeGB.smsConfi5bot() : lenguajeGB.smsConfi6bot()}_
*⭔ ${lenguajeGB.smsConfi4bot()}:* ${isAll ? packname : isUser ? '' : '_' + lenguajeGB.smsConfi7bot() + '_'}`)
}
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
