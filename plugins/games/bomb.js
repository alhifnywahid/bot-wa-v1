neoxr.create(async (m, {
  client,
  prefix,
  Func
}) => {
  try {
    const playAgain = [{
      buttonId: `${prefix}bomb`,
      buttonText: {
        displayText: 'MAIN LAGI'
      },
      type: 1
    }]
     client.bomb = client.bomb ? client.bomb : {}
     let id = m.chat,
        timeout = 180000
     if (id in client.bomb) return client.reply(m.chat, '*^ Sesi ini belum berakhir!*', client.bomb[id][0])
     const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5)
     const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']
     const array = []
     bom.map((v, i) => array.push({
        emot: v,
        number: number[i],
        position: i + 1,
        state: false
     }))
     let teks = ` 💣 *B O M B* 💣\n\n`
     teks += `Kirim angka *1* - *9* untuk membuka kotak angka *9* di bawah ini :\n\n`
     teks += array.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
     teks += array.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
     teks += array.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
     teks += `Timeout : [ *${((timeout / 1000) / 60)} minutes* ]\n`
     teks += `Jika mendapatkan kotak berisi bom, poin akan dikurangi.`
     client.bomb[id] = [
        await client.reply(m.chat, teks, m),
        array,
        setTimeout(() => {
          teks = `*Waktu habis!*, Bom ada di kotak angka ${v.number}.`
           let v = array.find(v => v.emot == '💥')
           //! SEND MESSAGE WITH TEKS 
           if (client.bomb[id]) client.reply(m.chat, teks, client.bomb[id][0])
           //! SEND MESSAGE WITH BUTTONS
           client.sendButtonText(m.chat, `${teks} ${client.bomb[id][0]}`, `${global.botname}`, playAgain)
           delete client.bomb[id]
        }, timeout)
     ]
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['bomb'],
  hidden: ['bom'],
  category: 'games',
  limit: true,
  group: true,
  game: true
}, __filename)
