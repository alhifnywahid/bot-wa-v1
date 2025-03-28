neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, `panda`), m)
         client.sendReact(m.chat, '🕒', m.key)
         lirik(text).then(hasil => {
            let ouput = 'Lirik Lagu : \n\n' + hasil.lirik
            client.reply(m.chat, ouput, m)
            // console.log('Lirik lagu "' + judul + '":\n' + hasil.lirik)
            // console.log('Thumbnail lagu "' + judul + '": ' + hasil.thumb)
          })
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
}, {
   usage: ['lirik'],
   use: 'query',
   category: 'searching',
   error: false,
   restrict: true,
   limit: true
}, __filename)

lirik = (judul) => {
	return new Promise(async (resolve, reject) => {
		axios.get('https://www.musixmatch.com/search/' + judul)
			.then(async ({
				data
			}) => {
				const $ = cheerio.load(data)
				const hasil = {};
				let limk = 'https://www.musixmatch.com'
				const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
				await axios.get(link)
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
						$$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a, b) {
							hasil.lirik = $$(b).find('span > p > span').text() + '\n' + $$(b).find('span > div > p > span').text()
						})
					})
				resolve(hasil)
			})
			.catch(reject)
	})
}