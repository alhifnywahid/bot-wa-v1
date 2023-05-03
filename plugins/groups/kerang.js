neoxr.create(async (m, {
      client,
      text,
      prefix,
      command,
      participants,
      Func
   }) => {
     try {
      if (command == 'apakah') {
      	if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret sangat tampan dan cul'), m)
      	let random = Func.random(['Iya', 'Mungkin iya', 'Ya Ndak Tau', 'Kepo Bat Luwh', 'Mungkin Tidak', 'Jelas benar dong', 'Mungkin Benar', 'Jelas Iya Dong', 'Jelas Tidak Dong'])
      	let teks = `*Pertanyaan* : ${command} ${text}\n`
      	teks += `*Jawaban*: ${random}`
      	client.reply(m.chat, teks, m)
      } else if (command == 'kapankah') {
      	if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret dapat cewek idaman'), m)
      	let time = Func.randomInt(1, 30)
      	let unit = Func.random(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])
      	let teks = `*Pertanyaan* : ${command} ${text}\n`
      	teks += `*Jawaban*: ${time} ${unit} lagi . . .`
      	client.reply(m.chat, teks, m)
      } else if (command == 'siapakah') {
      	if (!text) return client.reply(m.chat, Func.example(prefix, command, 'pro player disini'), m)
      	let member = participants.map(v => v.id)
      	let who = Func.random(member)
      	let teks = `*Pertanyaan* : ${command} ${text}?\n`
      	teks += `*Jawaban*: @${who.replace(/@.+/, '')}`
    	  client.reply(m.chat, teks, m)
      } else if (command == 'rate') {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, 'ketampanan mas gopret'), m)
      let skor = Func.randomInt(1, 100)
      let teks = `*Pertanyaan* : ${command} ${text}\n`
      teks += `*Jawaban*: ${skor}%`
      client.reply(m.chat, teks, m)
      }
     
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   }, {
   usage: ['apakah','siapakah','kapankah','rate'],
   category: 'kerang ajaib',
   group: true
}, __filename)
