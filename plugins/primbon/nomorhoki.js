const axios = require('axios');
const cheerio = require('cheerio');
neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
  try {
    if (!text) return client.reply(m.chat, Func.example(prefix, command, '6285xxxx'), m)
    client.sendReact(m.chat, '🕒', m.key)
    const url = 'https://primbon.com/no_hoki_bagua_shuzi.php';
    const data = new URLSearchParams();
    data.append('nomer', text);
    data.append('submit', 'Submit');
    
    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
  }).then(response => {
          const html = response.data;
          const $ = cheerio.load(html);
          let fetchText = $('#body').text().trim()
          let hasil = '*么  N O M O R - H O K I*\n\n'
          hasil += `*➠ Nomor Hp* : ${fetchText.split('No. HP : ')[1].split('\n')[0]}\n`
          hasil += `*➠ Angka Bagua Shuzi* : ${fetchText.split('Angka Bagua Shuzi : ')[1].split('\n')[0]}\n\n`
          hasil += `*➠ Energi Positif*\n`
          hasil += ` *◦ Kekayaan* : ${fetchText.split('Kekayaan = ')[1].split('\n')[0]}\n`
          hasil += ` *◦ Kesehatan* : ${fetchText.split('Kesehatan = ')[1].split('\n')[0]}\n`
          hasil += ` *◦ Cinta/Relasi* : ${fetchText.split('Cinta/Relasi = ')[1].split('\n')[0]}\n`
          hasil += ` *◦ Kestabilan* : ${fetchText.split('Kestabilan =')[1].split('\n')[0]}\n`
          hasil += ` *◦ Presentase* : ${fetchText.split('%ENERGI NEGATIF')[0].split('% = ')[1]+'%'}\n\n`
          hasil += `*➠ Energi Negatif*\n`
          hasil += ` *◦ Perselisihan* : ${fetchText.split('Perselisihan = ')[1].split('\n')[0]}\n`
          hasil += ` *◦ Kehilangan* : ${fetchText.split('Kehilangan = ')[1].split('\n')[0]}\n`
          hasil += ` *◦ Malapetaka* : ${fetchText.split('Malapetaka = ')[1].split('\n')[0]}\n`
          hasil += ` *◦ Kehancuran* : ${fetchText.split('Kehancuran =')[1].split('\n')[0]}\n`
          hasil += ` *◦ Presentase* : ${fetchText.split('Kehancuran = ')[1].split('= ')[1].split('\n')[0]}\n\n`
          hasil += `*➠ Catatan* : ${fetchText.split('* ')[1].split('Masukkan Nomor HP Anda')[0]}\n\n`
          hasil += global.footer
          client.reply(m.chat, hasil, m)
      })
  } catch (e) {
     client.reply(m.chat, '*ERROR! No. Handphone Tidak Valid!*', m)
  }
}, {
  usage: ['nomorhoki'],
  use: ['phonenumber'],
  category: 'primbon',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);
