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
    if (!text) return client.reply(m.chat, Func.example(prefix, command, '6285xxxx'), m)
    client.sendReact(m.chat, '🕒', m.key)
    primbon.nomer_hoki(text).then((res) => {
      if (res.status == false) return client.reply(m.chat, '*ERROR! No. Handphone Tidak Valid!*', m)
      let output = '*么  N O M O R - H O K I*\n\n'
      output += '*➠ NOMOR* : ' + res.message.nomer_hp + '\n'
      output += '*➠ ANGKA SHUZI* : ' + res.message.angka_shuzi + '\n\n'
      output += '*➠ ENERGI POSITIV*\n'
      output += ' *◦ kekayaan* : ' + res.message.energi_positif.kekayaan + '\n'
      output += ' *◦ kesehatan* : ' + res.message.energi_positif.kesehatan + '\n'
      output += ' *◦ cinta* : ' + res.message.energi_positif.cinta + '\n'
      output += ' *◦ kestabilan* : ' + res.message.energi_positif.kestabilan + '\n'
      output += ' *◦ persentase* : ' + res.message.energi_positif.persentase + '\n\n'
      output += '*➠ ENERGI NEGATIV*\n'
      output += ' *◦ perselisihan* : ' + res.message.energi_negatif.perselisihan + '\n'
      output += ' *◦ kehilangan* : ' + res.message.energi_negatif.kehilangan + '\n'
      output += ' *◦ malapetaka* : ' + res.message.energi_negatif.malapetaka + '\n'
      output += ' *◦ kehancuran* : ' + res.message.energi_negatif.kehancuran + '\n'
      output += ' *◦ persentase* : ' + res.message.energi_negatif.persentase + '\n'
      output += '*➠ CATATAN* : ' + res.message.catatan + '\n\n'
      output += global.footer
      client.reply(m.chat, output, m)
    });
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['nomorhoki'],
  use: ['phonenumber'],
  category: 'primbon',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);
