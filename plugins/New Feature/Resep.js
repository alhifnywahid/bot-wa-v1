const ds = require('dandi-api');
neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
  try {
    const CariResep = await ds.ResepSearch(text);
    if (!text) return client.reply(m.chat, Func.example(prefix, command, 'Bakwan'), m);
    CariResep.data.forEach((resep, index) => {
      client.reply(m.chat, `${index + 1}. ${resep.judul}`, m);
    });
    if (isNaN(text) || text < 1 || text > CariResep.data.length) {
      client.reply(m.chat, 'Pilihan tidak valid.', m);
      return;
    }
    const pilihan = parseInt(text);
    const resepLink = CariResep.data[pilihan - 1].link;
    const ProsesResep = await ds.ResepRead(resepLink);
    let output = 'JUDUL : ' + ProsesResep.data.judul + '\n';
    output += 'WAKTU MASAK : ' + ProsesResep.data.waktu_masak + '\n';
    output += 'HASIL : ' + ProsesResep.data.hasil + '\n';
    output += 'KESULITAN : ' + ProsesResep.data.tingkat_kesulitan + '\n';
    output += 'BAHAN : ' + ProsesResep.data.bahan + '\n';
    output += 'LANGKAH LANGKAH : ' + ProsesResep.data.langkah_langkah + '\n\n';
    output += Func.texted('bold', 'Simple WhatsApp Bot by GOPRET');
    client.reply(m.chat, output, m);
  } catch (e) {
    client.reply(m.chat, Func.jsonFormat(e), m);
  }
}, {
  usage: ['resep'],
  user: "query",
  category: 'a new feature',
  premium: true,
  limit: 1,
}, __filename);
