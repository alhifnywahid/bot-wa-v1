neoxr.create(async (m, {
  client,
  prefix,
  Func
}) => {
  const buttons = [{
    buttonId: `.owner`,
    buttonText: {
      displayText: 'OWNER'
    },
    type: 1
  }, {
    buttonId: `.sewa`,
    buttonText: {
      displayText: 'SEWA BOT'
    },
    type: 1
  }]
  let teks = `*❏ INFO PREMIUM*
 
  Dengan mendaftar menjadi user premium anda akan mendapatkan keuntungan sebagai berikut :
  
  1. Bisa menggunakan semua fitur
  2. mendapatkan mendapatkan 10.000 limit (5.000 limit fitur & 5.000 limit games)
  3. jika bot mode grouponly user premium bisa memainkan di pesan pribadi
  
  Silahkan hubungi *.owner* untuk melakukan upgrade premium hanya dengan Rp. 5.000 per bulan
  
  Invite bot ke GC kalian ? ketik *.sewabot*`
  try {
    //! SEND MESSAGE WITH TEKS 
     client.reply(m.chat, `${teks}`, m)

    //! SEND MESSAGE WITH BUTTONS 
    //client.sendButtonText(m.chat, `${teks}`, `${global.botname}`, buttons)
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['premium'],
  category: 'miscs'
}, __filename)
