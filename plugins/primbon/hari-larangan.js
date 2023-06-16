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
    if (!text) return client.reply(m.chat, Func.example(prefix, command, '9, 6, 2017'), m)
    let [hari, bulan, tahun] = text.split`,`
    hari = parseInt(hari.trim());
    bulan = parseInt(bulan.trim());
    tahun = parseInt(tahun.trim());
    if (isNaN(hari) || isNaN(bulan) || isNaN(tahun)) return client.reply(m.chat, '*ERROR! hari/bulan/tahun Tidak Valid!*', m)
    if (hari > 32 && hari < 1 || bulan > 12 && bulan < 1) return client.reply(m.chat, '*ERROR! hari/bulan/tahun Tidak Valid!*', m)
    client.sendReact(m.chat, '🕒', m.key)
    const url = 'https://primbon.com/hari_sangar_taliwangke.php';
    const data = new URLSearchParams();
    data.append('tgl', hari);
    data.append('bln', bulan);
    data.append('thn', tahun);
    data.append('kirim', 'Submit');
    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            let fetchText = $('#body').text()
            const startIndex = fetchText.indexOf(hari);
            const endIndex = fetchText.indexOf('Untuk mengetahui watak hari, masukkan:');
            const result = fetchText.substring(startIndex, endIndex).trim().replace(/<br>/g, '\n');
            const formattedResult = result.replace('Termasuk', '\n\nTermasuk');
            let output = '*么  HARI LARANGAN*\n\n'
            output += formattedResult + '\n\n'
            output += global.footer
            client.reply(m.chat, output, m)
        })
  } catch (e) {
     client.reply(m.chat, '*ERROR! Silahkan Hubungi Owner!*', m)
  }
}, {
  usage: ['harilarangan'],
  use: ['day, month, year'],
  category: 'primbon',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);
