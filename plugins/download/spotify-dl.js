neoxr.create(async (m, {
   client,
   args,
   text,
   prefix,
   command,
   Func,
   Scraper
}) => {
   try {
      if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'https://open.spotify.com/track/6cHCixTkEFATjcu5ig8a7I'), m)
      client.sendReact(m.chat, '🕒', m.key)
      if (args[0].match('open.spotify.com') && /track/.test(args[0])) {
         var json = await Api.spotify(args[0])
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let caption = `乂  *S P O T I F Y*\n\n`
         caption += `	◦  *Title* : ${json.data.title}\n`
         caption += `	◦  *Artist* : ${json.data.artist.name}\n`
         caption += `	◦  *Duration* : ${json.data.duration}\n`
         caption += `	◦  *Source* : ${args[0]}\n\n`
         caption += global.footer
         client.sendMessageModify(m.chat, caption, m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer(json.data.thumbnail)
         }).then(async () => {
            client.sendFile(m.chat, json.data.url, json.data.title + '.mp3', '', m, {
               document: true,
               APIC: await Func.fetchBuffer(json.data.thumbnail)
            })
         })
      } else if (args[0].match('open.spotify.com') && /playlist/.test(args[0])) {
         var json = await Api.spotify(args[0])
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let rows = []
         json.tracks.map(v => rows.push({
            title: v.title,
            rowId: `${prefix + command} ${v.url}`,
            description: `Artists : ${v.artists} – Album : ${v.album}`
         }))
         client.sendList(m.chat, '', `Showing track list from playlist : “${json.data.title}” 🍟`, '', 'Tap!', [{
            rows
         }], m)
      } else {
         const search = await Api.spotify(text)
         if (!search.status) return m.reply(Func.jsonFormat(search))
         let rows = []
         search.data.map(v => rows.push({
            title: v.title,
            rowId: `${prefix + command} ${v.url}`,
            description: `${v.duration} | Popularity : ${v.popularity}`
         }))
         client.sendList(m.chat, '', `Showing search results for : “${text}” 🍟`, '', 'Tap!', [{
            rows
         }], m)
      }
   } catch (e) {
      console.log(e)
      return client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['spotify'],
   use: 'query / link',
   category: 'download',
   premium: true,
   limit: true
}, __filename)
