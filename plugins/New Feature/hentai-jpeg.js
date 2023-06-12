const dh = require("discord-hentai");

neoxr.create(
  async (m, { command, client, Func }) => {
    try {
      if (command == "kitsune") {
        client.sendReact(m.chat, "🕒", m.key);
        const result = await dh.Anime.kitsune();
        client.sendFile(m.chat, result, "", `*Dosa tanggung sendiri!*`, m);
      } else if (command == "hentai") {
        client.sendReact(m.chat, "🕒", m.key);
        const result = await dh.Anime.hentai();
        client.sendFile(m.chat, result, "", `*Dosa tanggung sendiri!*`, m);
      } else if (command == "thighs") {
        client.sendReact(m.chat, "🕒", m.key);
        const result = await dh.Anime.thighs();
        client.sendFile(m.chat, result, "", `*Dosa tanggung sendiri!*`, m);
      } else if (command == "hanal") {
        client.sendReact(m.chat, "🕒", m.key);
        const result = await dh.Anime.hanal();
        client.sendFile(m.chat, result, "", `*Dosa tanggung sendiri!*`, m);
      } else if (command == "neko") {
        client.sendReact(m.chat, "🕒", m.key);
        const result = await dh.Anime.neko();
        client.sendFile(m.chat, result, "", `*Dosa tanggung sendiri!*`, m);
      }
    } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m);
    }
  },
  {
    usage: ["kitsune", "hentai", "thighs", "hanal", "neko"],
    category: "a new feature",
    premium: true,
    limit: 50,
  },
  __filename
);
