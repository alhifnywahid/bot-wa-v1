neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.reply(m.chat, `*❏ INFO PREMIUM*
  
Dengan mendaftar menjadi user premium anda akan mendapatkan keuntungan sebagai berikut :

1. Bisa menggunakan semua fitur
2. mendapatkan mendapatkan 10.000 limit (5.000 limit fitur & 5.000 limit games)
3. jika bot mode grouponly user premium bisa memainkan di pesan pribadi

Silahkan hubungi *.owner* untuk melakukan upgrade premium hanya dengan Rp. 5.000 per bulan

Invite bot ke GC kalian ? ketik *.sewabot*`, m)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['premium'],
   category: 'miscs'
}, __filename)
