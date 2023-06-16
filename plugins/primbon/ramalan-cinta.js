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
    let keterangan = '*么  RAMALAN CINTA*\n\n'
    keterangan += '*➠ Keterangan*\n'
    keterangan += 'Kecocokan cinta pasangan berdasarkan numerologi tanggal lahir.\n\n'
    keterangan += '*➠ Penggunaan*\n'
    keterangan += Func.example(prefix, command, 'nama1, hari1, bulan1, tahun1, nama2, hari2, bulan2, tahun2\n')
    keterangan += Func.example(prefix, command, 'hifny, 7, 7, 2000, cindy, 3, 5, 2003')
    if (!text) return client.reply(m.chat, keterangan, m)
    let [name1, hari1, bulan1, tahun1, name2, hari2, bulan2, tahun2] = text.split`,`
    if (!hari1 || !hari2 || !bulan1 || isNaN(bulan1) || bulan1 < 1 || bulan1 > 12 || !bulan2 || isNaN(bulan2) || bulan2 < 1 || bulan2 > 12 || !tahun1 || !tahun2) return client.reply(m.chat, `*Error, Mungkin Input Yang Anda Masukkan ada Salah/Kurang!, Silah ketik ${prefix}${command} untuk melihat cara penggunaan.*`, m)
    client.sendReact(m.chat, '🕒', m.key)
    primbon.ramalan_cinta(name1, hari1, bulan1, tahun1, name2, hari2, bulan2, tahun2).then((res) => {
      if (res.status == false) return client.reply(m.chat, '*Error, Mungkin Input Yang Anda Masukkan Salah!*', m)
      let output = "*么  RAMALAN CINTA*\n\n";
      output += `➠ *Biodata Anda* : ${res.message.nama_anda.nama}, ${res.message.nama_anda.tgl_lahir}\n`;
      output += `➠ *Biodata Pasangan Anda* : ${res.message.nama_pasangan.nama}, ${res.message.nama_pasangan.tgl_lahir}\n`;
      output += `➠ *Sisi Positif* : ${res.message.sisi_positif}`;
      output += `➠ *Sisi Negatif* : ${res.message.sisi_negatif}`;
      output += global.footer
      client.reply(m.chat, output, m)
    });
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['raci'],
  use: ['n1,h1,b1,t1,n2,h2,b2,t2'],
  category: 'primbon',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);
