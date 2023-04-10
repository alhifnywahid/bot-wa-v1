neoxr.create(async (m, {
   client,
   participants,
   Func
   }) => {
     try {
      let member = participants.filter(u => u.admin == null).map(u => u.id)
      var day = 86400000 * 7,
         now = new Date() * 1
      let sider = []
      member.map(v => {
         if ((typeof global.db.users[v] == 'undefined' && typeof global.db.groups[m.chat].member[v] == 'undefined') && v != client.user.id.split(':')[0] + '@s.whatsapp.net') sider.push(v)
      })
      let lastseen = Object.entries(global.db.groups[m.chat].member).sort((a, b) => a[1].lastseen - b[1].lastseen).filter(([v, x]) => x.lastseen != 0 && ((now - x.lastseen > day) || (now - global.db.users[v].lastseen > day)) && v != client.user.id.split(':')[0] + '@s.whatsapp.net')
      let teks = `乂  *S I D E R*\n\n`
      teks += `*Harap aktif di grup karena akan ada pembersihan member setiap saat*\n\n`
      teks += ` *${sider.length}* anggota grup ${await (await client.groupMetadata(m.chat)).subject} *join tetapi tidak pernah nimbrung.*\n\n`
      teks += sider.map(v => '	◉  @' + v.replace(/@.+/, '')).join('\n')
      teks += '\n\n'
      teks += `*${lastseen.length}* anggota grup ${await (await client.groupMetadata(m.chat)).subject} adalah sider dengan alasan *tidak aktif selama lebih dari 7 hari.*\n\n`
      teks += lastseen.map(([v, x]) => '	◉  @' + v.replace(/@.+/, '') + '\n	     *Terakhir dilihat* : ' + Func.toDate(now - x.lastseen).split('D')[0] + ' hari yang lalu').join('\n')
      teks += `\n\n${global.footer}`
      client.reply(m.chat, teks, m)
   } catch (e) {
      return client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['sider'],
   use: '',
   category: 'group',
   group: true,
   admin: true
}, __filename)