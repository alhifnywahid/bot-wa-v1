const dh = require("discord-hentai");
neoxr.create(
  async (m, { command, prefix, client, text, Func }) => {
    try {
      const quotes = `*NOTE!  DOSA TANGGUNG SENDIRI!*`
      if (isNaN(text)) return client.reply(m.chat, Func.example(prefix, command, '10'))
      text = parseInt(text)
      if (command == "kitsune") {
        client.sendReact(m.chat, "🕒", m.key);
        if (text){
          for (let i = 0; i < text; i++){
            const result = await dh.Anime.kitsune();
            client.sendFile(m.chat, result, "", quotes, m);
          }
        } else{
          const result = await dh.Anime.kitsune();
          client.sendFile(m.chat, result, "", quotes, m);
        } //================================================
      } else if (command == "hentai") {
        client.sendReact(m.chat, "🕒", m.key);
        if (text){
          for (let i = 0; i < text; i++){
            const result = await dh.Anime.hentai();
            client.sendFile(m.chat, result, "", quotes, m);
          }
        } else{
          const result = await dh.Anime.hentai();
          client.sendFile(m.chat, result, "", quotes, m);
        } //================================================
      } else if (command == "thighs") {
        client.sendReact(m.chat, "🕒", m.key);
        if (text){
          for (let i = 0; i < text; i++){
            const result = await dh.Anime.thighs();
            client.sendFile(m.chat, result, "", quotes, m);
          }
        } else{
          const result = await dh.Anime.thighs();
          client.sendFile(m.chat, result, "", quotes, m);
        } //================================================
      } else if (command == "hanal") {
        client.sendReact(m.chat, "🕒", m.key);
        if (text){
          for (let i = 0; i < text; i++){
            const result = await dh.Anime.hanal();
            client.sendFile(m.chat, result, "", quotes, m);
          }
        } else{
          const result = await dh.Anime.hanal();
          client.sendFile(m.chat, result, "", quotes, m);
        } //================================================
      } else if (command == "neko") {
        client.sendReact(m.chat, "🕒", m.key);
        if (text){
          for (let i = 0; i < text; i++){
            const result = await dh.Anime.neko();
            client.sendFile(m.chat, result, "", quotes, m);
          }
        } else{
          const result = await dh.Anime.neko();
          client.sendFile(m.chat, result, "", quotes, m);
        } //================================================
      }
    } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m);
    }
  },
  {
    usage: ["kitsune", "hentai", "thighs", "hanal", "neko"],
    category: "nsfw",
    premium: true,
    limit: 150,
  },__filename);
