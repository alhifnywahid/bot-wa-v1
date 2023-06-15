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
    keterangan += '*➠ Keterangan\n'
    keterangan += '*Kecocokan cinta pasangan berdasarkan numerologi tanggal lahir.\n\n'
    keterangan += '*➠ Penggunaan\n'
    keterangan += Func.example(prefix, command, 'hifny, 7, 7, 2000, cindy, 3, 5, 2003')
    if (!text) return client.reply(m.chat, keterangan, m)
    let [name1, hari1, bulan1, tahun1, name2, hari2, bulan2, tahun2] = text.split`,`
    if (!name1) return client.reply(m.chat, '*Masukkan Nama Anda!*', m)
    if (!name2) return client.reply(m.chat, '*Masukkan Nama Pasangan Anda!*', m)
    if (!hari1 || isNaN(hari1) || hari1 < 1 || hari1 > 31 || !hari2 || isNaN(hari2) || hari2 < 1 || hari2 > 31) return client.reply(m.chat, '*Hari yang anda masukkan tidak valid!*', m)
    if (!bulan1 || isNaN(bulan1) || bulan1 < 1 || bulan1 > 12 || !bulan2 || isNaN(bulan2) || bulan2 < 1 || bulan2 > 12) return client.reply(m.chat, '*Bulan yang anda masukkan tidak valid!*', m)
    client.sendReact(m.chat, '🕒', m.key)
    primbon.ramalan_cinta(name1, hari1, bulan1, tahun1, name2, hari2, bulan2, tahun2).then((res) => {
      if (res.status == false) return client.reply(m.chat, '*Error, Mungkin Input Yang Anda Masukkan Salah!*', m)
      let output = "*么  RAMALAN CINTA*\n\n";
      output += `➠ *Biodata Anda* : ${res.message.nama_anda.nama}, ${res.message.nama_anda.tgl_lahir}\n`;
      output += `➠ *Biodata Pasangan Anda* : ${res.message.nama_pasangan.nama}, ${res.message.nama_pasangan.tgl_lahir}\n`;
      output += `➠ *Sisi Positif* : ${res.message.sisi_positif}`;
      output += `➠ *Sisi Negativ* : ${res.message.sisi_negatif}`;
      output += global.footer
      client.reply(m.chat, output, m)
    });
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['ramalancinta'],
  use: ['name, day, month, year, name, day, month, year'],
  category: 'primbon',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);
