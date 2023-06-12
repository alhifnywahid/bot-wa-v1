const dh = require("discord-hentai");

neoxr.create(
  async (m, { command, client, Func }) => {
    try {
      if (command == "kitsune") {
        client.sendReact(m.chat, "🕒", m.key);
        for (let i = 0; i < 3; i++){
          const result = await dh.Anime.kitsune();
          client.sendFile(m.chat, result, "", `*NOTE!!!  DOSA TANGGUNG SENDIRI!*`, m);
        }
      } else if (command == "hentai") {
        client.sendReact(m.chat, "🕒", m.key);
        for (let i = 0; i < 3; i++){
          const result = await dh.Anime.hentai();
          client.sendFile(m.chat, result, "", `*NOTE!!!  DOSA TANGGUNG SENDIRI!*`, m);
        }
      } else if (command == "thighs") {
        client.sendReact(m.chat, "🕒", m.key);
        for (let i = 0; i < 3; i++){
          const result = await dh.Anime.thighs();
          client.sendFile(m.chat, result, "", `*NOTE!!!  DOSA TANGGUNG SENDIRI!*`, m);
        }
      } else if (command == "hanal") {
        for (let i = 0; i < 3; i++){
          client.sendReact(m.chat, "🕒", m.key);
          const result = await dh.Anime.hanal();
          client.sendFile(m.chat, result, "", `*NOTE!!!  DOSA TANGGUNG SENDIRI!*`, m);
        }
      } else if (command == "neko") {
        client.sendReact(m.chat, "🕒", m.key);
        for (let i = 0; i < 3; i++){
          const result = await dh.Anime.neko();
          client.sendFile(m.chat, result, "", `*NOTE!!!  DOSA TANGGUNG SENDIRI!*`, m);
        }
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
