const { Primbon } = require("scrape-primbon");
neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
  try {
    const primbon = new Primbon();
    if (!text) return client.reply(m.chat, Func.example(prefix, command, 'hifny | cindy'), m)
    let [name1, name2] = text.split`|`
    if (!name1) return client.reply(m.chat, '*Masukkan Nama Anda!*', m)
    if (!name2) return client.reply(m.chat, '*Masukkan Nama Pasangan Anda!*', m)
    client.sendReact(m.chat, '🕒', m.key)
    primbon.kecocokan_nama_pasangan(name1, name2).then((res) => {
      if (res.status == false) return client.reply(m.chat, '*Error, Mungkin Input Yang Anda Masukkan Salah!*', m)
      let output = '*么  KECOCOKAN NAMA PASANGAN*\n\n'
      output += '*➠ Nama Anda* : ' + res.message.nama_anda + '\n'
      output += '*➠ Nama Pasangan* : ' + res.message.nama_pasangan + '\n'
      output += '*➠ Sisi Positiv* : ' + res.message.sisi_positif + '\n'
      output += '*➠ Sisi Negativ* : ' + res.message.sisi_negatif + '\n'
      output += '*➠ Catatan* : ' + res.message.catatan + '\n\n'
      output += global.footer
      client.reply(m.chat, output, m)
    });
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['kecocokannama'],
  use: ['name | name'],
  category: 'primbon',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);
