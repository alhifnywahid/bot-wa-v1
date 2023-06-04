neoxr.create(
  async (m, { command, text, prefix, client, args, Func }) => {
    try {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, "kucing"), m);
      client.sendReact(m.chat, "🕒", m.key);
      const API = await dhn_api.CoronaInfo(text);
      let sout = '*么   I N F O - C O R O N A*\n\n'
      sout += '➠ *Negara* : ' + text + '\n'
      sout += '➠ *Total Kasus* : ' + API.total_kasus + '\n'
      sout += '➠ *Total Kematian* : ' + API.total_kematian + '\n'
      sout += '➠ *Total sembuh* : ' + API.total_sembuh + '\n'
      sout += '➠ *Informasi* : ' + API.informasi + '\n'
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
    hidden: ['corona'],
    use: "query",
    category: "utilities",
    limit: 1,
    premium: true,
  },
  __filename);
