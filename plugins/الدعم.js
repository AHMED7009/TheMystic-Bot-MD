import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://telegra.ph/file/af5da33940f19be1f8b38.mp4`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `

*『 ️اليك قائمه الدعم 』*

*『 ️جــروب الــدعــم 』*

*SSSSSSOOOOOOOOOOOONNNNNN*

*『 ️ رقم المطور واتساب  』*

*⊱≼ https://wa.me/+201096570636 ≽⊰⊹*

*◉═══ • ❁ 👑 ❁ • ═══◉* `, m)
}
handler.command = handler.help = ['دعم','الدعم']
handler.tags = ['kaneki']
export default handler
