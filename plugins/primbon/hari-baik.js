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
    if (!text) return client.reply(m.chat, Func.example(prefix, command, '9, 6, 2001'), m)
    let [hari, bulan, tahun] = text.split`,`
    if (isNaN(hari) || isNaN(bulan) || isNaN(tahun)) return client.reply(m.chat, '*ERROR! hari/bulan/tahun Tidak Valid!*', m)
    client.sendReact(m.chat, '🕒', m.key)
    const url = 'https://primbon.com/petung_hari_baik.php';
    const data = new URLSearchParams();
    data.append('tgl', hari);
    data.append('bln', bulan);
    data.append('thn', tahun);
    data.append('submit', 'Submit');
    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            let fetchText = $('#body').text()
            const startIndex = fetchText.indexOf('Watak Hari Menurut Kamarokam');
            const endIndex = fetchText.indexOf('Hitung Kembali');
            const result = fetchText.substring(startIndex, endIndex).trim().replace(/<|>/g, '');
            const formattedResult = result.replace(/Kamarokam/g, 'Kamarokam\n').replace(/Nuju/g, 'Nuju ').replace(/(\d{4})/g, '$1\n');
            let output = '*么  RAMALAN HARI BAIK*\n\n'
            output += formattedResult + '\n'
            output += global.footer
            client.reply(m.chat, output, m)
        })
  } catch (e) {
     client.reply(m.chat, '*ERROR! Silahkan Hubungi Owner!*', m)
  }
}, {
  usage: ['haribaik'],
  use: ['day, month, year'],
  category: 'primbon',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);
