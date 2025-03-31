export async function before(m, { isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
    if (m.text.includes('КАМЕНЬ') || m.text.includes('БУМАГА') || m.text.includes('НОЖНИЦЫ'))
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner && !isROwner) {
       await m.reply(`Привет *@${m.sender.split`@`[0]}*, *Запрещено разговаривать с приватом бота, вы будете заблокированы.*`, false, { mentions: [m.sender] })
       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}
