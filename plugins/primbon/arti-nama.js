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
    if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
    client.sendReact(m.chat, '🕒', m.key)
    primbon.arti_nama(text).then((res) => {
      let output = '*么  A R T I - N A M A*\n\n'
      output += '*◦  Nama* : ' + res.message.nama + '\n'
      output += '*◦  Arti* : ' + res.message.arti + '\n\n'
      output += global.footer
      client.reply(m.chat, output, m)
    });
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['artinama'],
  use: ['query'],
  category: 'primbon',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);
