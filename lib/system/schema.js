module.exports = (m) => {
   const isNumber = x => typeof x === 'number' && !isNaN(x)
   let user = global.db.users.find(v => v.jid == m.sender)
   if (user) {
      if (!('name' in user)) user.name = m.pushName
      if (!isNumber(user.afk)) user.afk = -1
      if (!('afkReason' in user)) user.afkReason = ''
      if (!('afkObj' in user)) user.afkObj = {}
      if (!('banned' in user)) user.banned = false
      if (!isNumber(user.banTemp)) user.banTemp = 0
      if (!isNumber(user.banTimes)) user.banTimes = 0
      if (!isNumber(user.point)) user.point = 0
      if (!isNumber(user.tabungan)) user.tabungan = 0
      if (!('history_nabung' in user)) user.history_nabung = []
      if (!('pasangan' in user)) user.pasangan = ''
      if (!('taken' in user)) user.taken = false
      if (!isNumber(user.limit)) user.limit = global.limit
      if (!isNumber(user.limitGame)) user.limitGame = global.limitGame
      if (!isNumber(user.lastclaim)) user.lastclaim = 0
      if (!('premium' in user)) user.premium = false
      if (!isNumber(user.expired)) user.expired = 0
      if (!isNumber(user.lastseen)) user.lastseen = 0
      if (!isNumber(user.hit)) user.hit = 0
      if (!isNumber(user.spam)) user.spam = 0
      if (!isNumber(user.warning)) user.warning = 0
      if (!isNumber(user.attempt)) user.attempt = 0
      if (!('code' in user)) user.code = ''
      if (!isNumber(user.codeExpire)) user.codeExpire = 0
      if (!('email' in user)) user.email = ''
      if (!('verified' in user)) user.verified = false
   } else {
      global.db.users.push({
         jid: m.sender,
         name: m.pushName,
         afk: -1,
         afkReason: '',
         afkObj: {},
         tabungan: 0,
         history_nabung: [],
         pasangan: '',
         taken: false,
         banned: false,
         banTemp: 0,
         banTimes: 0,
         point: 0,
         limit: global.limit,
         limitGame: global.limitGame,
         lastclaim: 0,
         premium: false,
         expired: 0,
         lastseen: 0,
         hit: 0,
         spam: 0,
         warning: 0,
         attempt: 0,
         code: '',
         codeExpire: 0,
         email: '',
         verified: false
      })
   }

   if (m.isGroup) {
      let group = global.db.groups.find(v => v.jid == m.chat)
      if (group) {
         if (!isNumber(group.activity)) group.activity = 0
         if (!('antidelete' in group)) group.antidelete = true
         if (!('antilink' in group)) group.antilink = true
         if (!('antiporn' in group)) group.antiporn = true
         if (!('antivirtex' in group)) group.antivirtex = true
         if (!('filter' in group)) group.filter = true
         if (!('game' in group)) group.game = true
         if (!('porn' in group)) group.porn = false
         if (!('left' in group)) group.left = true
         if (!('localonly' in group)) group.localonly = true
         if (!('viewonce' in group)) group.viewonce = true
         if (!('mute' in group)) group.mute = false
         if (!('member' in group)) group.member = {}
         if (!('text_left' in group)) group.text_left = ''
         if (!('text_welcome' in group)) group.text_welcome = ''
         if (!('welcome' in group)) group.welcome = true
         if (!isNumber(group.expired)) group.expired = 0
         if (!('stay' in group)) group.stay = false
      } else {
         global.db.groups.push({
            jid: m.chat,
            activity: new Date * 1,
            antidelete: true,
            antilink: true,
            antiporn: true,
            antivirtex: true,
            filter: true,
            game: true,
            porn: false,
            left: true,
            localonly: true,
            viewonce: true,
            mute: false,
            member: {},
            text_left: '',
            text_welcome: '',
            welcome: true,
            expired: 0,
            stay: false
         })
      }
   }

   let chat = global.db.chats.find(v => v.jid == m.chat)
   if (chat) {
      if (!isNumber(chat.chat)) chat.chat = 0
      if (!isNumber(chat.lastchat)) chat.lastchat = 0
      if (!isNumber(chat.lastseen)) chat.lastseen = 0
      if (!isNumber(chat.command)) chat.command = 0
   } else {
      global.db.chats.push({
         jid: m.chat,
         chat: 0,
         lastchat: 0,
         lastseen: 0,
         command: 0
      })
   }

   let setting = global.db.setting
   if (setting) {
      if (!('autodownload' in setting)) setting.autodownload = true
      if (!('chatbot' in setting)) setting.chatbot = true
      if (!('debug' in setting)) setting.debug = false
      if (!('games' in setting)) setting.games = false
      if (!('fitporn' in setting)) setting.fitporn = false
      if (!('error' in setting)) setting.error = []
      if (!('group_id' in setting)) setting.group_id = []
      if (!('pluginDisable' in setting)) setting.pluginDisable = []
      if (!('receiver' in setting)) setting.receiver = []
      if (!('levelup' in setting)) setting.levelup = true
      if (!('groupmode' in setting)) setting.groupmode = false
      if (!('sk_pack' in setting)) setting.sk_pack = 'Sticker'
      if (!('sk_author' in setting)) setting.sk_author = '@neoxr.js'
      if (!('self' in setting)) setting.self = false
      if (!('noprefix' in setting)) setting.noprefix = true
      if (!('multiprefix' in setting)) setting.multiprefix = true
      if (!('prefix' in setting)) setting.prefix = ['.', '/', '!', '#']
      if (!('toxic' in setting)) setting.toxic = ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"]
      if (!('online' in setting)) setting.online = true
      if (!('verify' in setting)) setting.verify = false
      if (!('onlyprefix' in setting)) setting.onlyprefix = '+'
      if (!('owners' in setting)) setting.owners = ['6285936173955']
      if (!isNumber(setting.lastReset)) setting.lastReset = new Date * 1
      if (!('msg' in setting)) setting.msg = 'Hi +tag 🪸\nI am automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp. *You can download posts from various social media just by sending the link.*\n\n◦ *Database* : +db\n◦ *Library* : Baileys v+version\n◦ *Rest API* : megachanbot\n◦ *Source* : megachanbot\n\nIf you find an error or want to upgrade premium plan contact the owner.'
      if (!isNumber(setting.menuStyle)) setting.menuStyle = 4
      if (!('cover' in setting)) setting.cover = 'https://telegra.ph/file/cb7a49a52625b90ecddc3.jpg'
      if (!('link' in setting)) setting.link = 'https://chat.whatsapp.com/JpO7oMMgK975NMhJA7Qrnj'
   } else {
      global.db.setting = {
         autodownload: true,
         chatbot: true,
         debug: false,
         games: true,
         fitporn: false,
         error: [],
         group_id: [],
         pluginDisable: [],
         receiver: [],
         levelup: true,
         groupmode: false,
         sk_pack: 'Sticker',
         sk_author: '@megachan',
         self: false,
         nopefix: true,
         multiprefix: true,
         prefix: ['.', '#', '!', '/'],
         toxic: ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"],
         online: true,
         verify: false,
         onlyprefix: '+',
         owners: ['6285936173955'],
         lastReset: new Date * 1,
         msg: 'Hi +tag 🪸\nI am automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp. *You can download posts from various social media just by sending the link.*\n\n◦ *Database* : +db\n◦ *Library* : Baileys v+version\n◦ *Rest API* : megachanbot\n◦ *Facebook* : megachanbot\n\nIf you find an error or want to upgrade premium plan contact the owner.',
         menuStyle: 4,
         cover: 'https://telegra.ph/file/cb7a49a52625b90ecddc3.jpg',
         link: 'https://chat.whatsapp.com/JpO7oMMgK975NMhJA7Qrnj'
      }
   }
}
