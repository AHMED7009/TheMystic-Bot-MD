let handler = async (m, { command, text }) => m.reply(`*💥❯══⊹⊱≼ مرحبا بك ≽⊰⊹══❮💥*
*❮ حط رمز قبل قسم حاجه من 👈  ( / . )❮*

*❮ اذا عندك طلب او اي شي تريد تقوله للمطور اكتب (.تقرير وحط طلبك)❮*

*❆❯══⊹⊱≼ ️⛪ ≽⊰⊹══❮❆*
*『 ️⛪ 』⇦ قسم البنك ╿↶*
*❆❯══⊹⊱≼ ️⛪ ≽⊰⊹══❮❆*

*💵┣.عمل*

*💵┣.هجوم*

*💵┣.اصف*

*💵┣.كنز*

*💵┣.حظ*

*💵┣.تعدين*

*💵┣.يومي*
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(قسم البنك|قسم-البنك)$/i

export default handler
