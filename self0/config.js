const fs = require("fs")
const chalk = require("chalk")

//Others
global.owner = ['6282136821559','6282136821559']
global.nomerowner = "6282136821559"
global.ownername = "𝐋𝐈𝐎𝐍𝐆𝐀𝐌𝐈𝐍𝐆𝐘𝐓"
global.namebot = "𝚂𝙴𝙻𝙵𝙱𝙾𝚃"
global.sessionName = "session"
global.log0 = fs.readFileSync("./media/image/thumb.jpg")
global.qris = fs.readFileSync("./media/image/qris.jpg")
global.fonts = "©𝚂𝙴𝙻𝙵𝙱𝙾𝚃"

//Exif
global.packname = "𝚂𝙴𝙻𝙵𝙱𝙾𝚃"
global.author = "𝙻𝙸𝙾𝙽𝙶𝙰𝙼𝙸𝙽𝙶𝚈𝚃"

//Message
global.mess = {
success: '*Success!*',
admin: '*Fitur Khusus Admin Group!*',
botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
owner: '*Fitur Khusus Owner Bot*',
group: '*Fitur Digunakan Hanya Untuk Group!*',
private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
bot: '*Fitur Khusus Pengguna Nomor Bot*',
wait: '*Silahkan Menunggu!*',
ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}

//Pengguna
global.rkyt = []

//Limit
global.limitawal = {
premium: "Infinity",
free: 20
}

//Pembatas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})