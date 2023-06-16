const ds = require("dandi-api");

neoxr.create(
  async (m, { command, text, prefix, client, args, Func }) => {
    try {
      if (!text)
        return client.reply(m.chat, Func.example(prefix, command, "kucing"), m);
      client.sendReact(m.chat, "🕒", m.key);
      for (let i = 0; i < 3; i++) {
      let old = new Date();
      const json = await ds.Pinterest(text);
        client.sendFile(m.chat, json.url, '', `${i}. 🍟 *Fetching* : ${((new Date - old) * 1)} ms`, m)
      }
    } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
      console.log(e);
    }
  },
  {
    usage: ["pinterest"],
    use: "query",
    category: "searching",
    limit: 1,
    premium: true,
  },
  __filename
);
