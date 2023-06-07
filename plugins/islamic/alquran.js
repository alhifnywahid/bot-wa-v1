neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   Func
}) => {
   try {
    if (!(args[0] || args[1])) throw client.reply(m.chat, Func.example(prefix, command, '1 2'), m)
    if (isNaN(args[0]) || isNaN(args[1])) throw client.reply(m.chat, Func.example(prefix, command, '1 2'), m)
    client.sendReact(m.chat, '🕒', m.key)
    let res = await alquran(args[0], args[1])
    let sout = '*么  A L - Q U R \' A N*\n\n'
    sout += res.surah + '\n'
    sout += res.arab + '\n'
    sout += res.latin + '\n\n'
    sout += res.terjemahan + '\n'
    sout += readMore + '\n'
    sout += res.tafsir + '\n'
    if (res.surahh === "Al-Qur'an Digital") return client.reply(m.chat, 'Maaf surah/ayat yang anda cari tidak ada', m)
    client.reply(m.chat, sout, m)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['alquran'],
   use: 'surah ayat',
   category: 'islamic',
   limit: 1,
}, __filename)


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch')
const cheerio = require('cheerio')
async function alquran(surah, ayat) {
    let res = await fetch(`https://kalam.sindonews.com/ayat/${ayat}/${surah}`)
    if (!res.ok) throw 'Error, maybe not found?'
    let $ = cheerio.load(await res.text())
    let content = $('body > main > div > div.content.clearfix > div.news > section > div.list-content.clearfix')
    let Surah = $(content).find('div.ayat-title > h1').text()
    let arab = $(content).find('div.ayat-detail > div.ayat-arab').text()
    let latin = $(content).find('div.ayat-detail > div.ayat-latin').text()
    let terjemahan = $(content).find('div.ayat-detail > div.ayat-detail-text').text()
    let tafsir = ''
    $(content).find('div.ayat-detail > div.tafsir-box > div').each(function () {
        tafsir += $(this).text() + '\n'
    })
    tafsir = tafsir.trim()
    let keterangan = $(content).find('div.ayat-detail > div.ayat-summary').text()
    // https://quran.kemenag.go.id/assets/js/quran.js
    let audio = `https://quran.kemenag.go.id/cmsq/source/s01/${surah < 10 ? '00' : surah >= 10 && surah < 100 ? '0' : ''}${surah}${ayat < 10 ? '00' : ayat >= 10 && ayat < 100 ? '0' : ''}${ayat}.mp3`
    return {
        surah: Surah,
        arab,
        latin,
        terjemahan,
        tafsir,
        audio,
        keterangan,
    }
}
