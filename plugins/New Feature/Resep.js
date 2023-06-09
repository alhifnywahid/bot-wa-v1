const ds = require('dandi-api');
let waitingForReply = {};

neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
  try {
    const sender = m.sender;
    if (waitingForReply[sender]) {
      const pilihan = parseInt(text);
      const CariResep = waitingForReply[sender].CariResep;
      
      if (isNaN(pilihan) || pilihan < 1 || pilihan > CariResep.data.length) {
        client.reply(m.chat, 'Pilihan tidak valid.', m);
        return;
      }
      
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
      
      delete waitingForReply[sender];
    } else {
      const CariResep = await ds.ResepSearch(text);
      if (!text) return client.reply(m.chat, Func.example(prefix, command, 'Bakwan'), m);
      
      let replyText = `Berikut adalah hasil pencarian resep untuk '${text}':\n\n`;
      CariResep.data.forEach((resep, index) => {
        replyText += `${index + 1}. ${resep.judul}\n`;
      });
      replyText += `\nSilakan balas dengan angka untuk memilih resep yang ingin dilihat detailnya.`;
      
      client.reply(m.chat, replyText, m);
      
      waitingForReply[sender] = { CariResep };
    }
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
