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
   let teks = '*么 I N F O  P R E M I U M*\n\n'
   teks += '*KEUNTUNGAN*\n'
   teks += '◦ Bisa menggunakan semua fitur.\n'
   teks += '◦ Mendapatkan 10.000 limit.\n'
   teks += '◦ Jika bot mode grouponly user premium bisa memainkan di pesan pribadi.\n\n'
   teks += '*HARGA*\n'
   teks += '◦ 5.000 Ribu selama 1 bulan (Tidak harus langganan setiap bulan).\n\n'
   teks += '*PEMBAYARAN YANG TERSEDIA*\n'
   teks += '◦ Ewallet = Dana, Ovo, Gopay, Shopeepay & link Aja.\n'
   teks += '◦ Bank = Tersedia Semua Bank.\n'
   teks += '◦ Qris = Tersedia Semua Qris.\n'
   teks += '◦ Pulsa = Xl & Indosat.\n\n'
   teks += 'Silahkan hubungi *.owner* untuk melakukan pembelian premium.\n'
   teks += 'Invite bot ke GC kalian ? ketik *.sewabot*'
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
