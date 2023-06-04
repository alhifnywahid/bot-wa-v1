const dhn_api = require("dhn-api");
neoxr.create(
  async (m, { command, text, prefix, client, args, Func }) => {
    try {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, "indonesia"), m);
      const API = await dhn_api.CoronaInfo(text);
      client.sendReact(m.chat, "🕒", m.key);
      if(API.total_kasus===' total') return console.log('*Country Not Found*')
      let sout = '*么   I N F O - C O R O N A*\n\n'
      sout += '➠ *Negara* : ' + text + '\n'
      sout += '➠ *Total Kasus* : ' + API.total_kasus.replace(' total', '') + '\n'
      sout += '➠ *Total Kematian* : ' + API.total_kematian.replace(' total', '') + '\n'
      sout += '➠ *Total sembuh* : ' + API.total_sembuh.replace(' total', '') + '\n'
      sout += '➠ *Informasi* : ' + API.informasi.split(':')[1].trim() + '\n'
      sout += '➠ *Sumber* : ' + API.informasi_lengkap + '\n\n'
      sout += global.footer
      client.reply(m.chat, sout, m);
    } catch (e) {
      client.reply(m.chat, '*Maaf sepertinya fitur ini sedang eror!*\n*Silahkan hubungi .owner*', m);
      console.log(e);
    }
  },
  {
    usage: ["infocorona"],
    hidden: ["corona"],
    use: "country",
    category: "utilities",
    limit: 1,
    premium: true,
  },
  __filename);

