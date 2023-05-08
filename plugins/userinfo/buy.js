neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   users,
   Func
}) => {
   try {
      let maximum = 1000,
         price = 50000
      if (users.limitGame >= maximum) return client.reply(m.chat, Func.texted('bold', `🚩 Mohon maaf, Anda sudah mencapai batas limit maksimum untuk pembelian. Tidak dapat membeli limit lagi pada saat ini. Terima kasih atas pengertiannya.`), m)
      if (command == 'buyall') {
         if (users.point < price) return client.reply(m.chat, Func.texted('bold', `🚩 You don't have enough points to buy limit.`), m)
         let amount = (users.point / price).toFixed(0)
         if ((users.limitGame + parseInt(amount)) >= maximum) return client.reply(m.chat, Func.texted('bold', `🚩 Sorry, you can't buy any more limits because you have reached maximum limit.`), m)
         users.point -= price * parseInt(amount)
         users.limitGame += parseInt(amount)
         return client.reply(m.chat, `✅ You have purchased *${amount}* limit with *${Func.h2k(price * parseInt(amount))}* points.`, m)
      } else if (command == 'buylimitgame') {
         if (isNaN(args[0])) return client.reply(m.chat, Func.example(prefix, command, '1'), m)
         if (args[0] < 1) return client.reply(m.chat, Func.example(prefix, command, '1'), m)
         if (users.point >= price * parseInt(args[0])) {
            if ((users.limitGame + parseInt(args[0])) >= maximum) return client.reply(m.chat, Func.texted('bold', `🚩 Limit amount you buy exceeds maximum limit.`), m)
            users.point -= price * parseInt(args[0])
            users.limitGame += parseInt(args[0])
            return client.reply(m.chat, `✅ You have purchased *${args[0]}* limit with *${Func.h2k(price * args[0])}* points.`, m)
         }
      } else if (command == 'buylimit') {
         if (isNaN(args[0])) return client.reply(m.chat, Func.example(prefix, command, '1'), m)
         if (args[0] < 1) return client.reply(m.chat, Func.example(prefix, command, '1'), m)
         if (users.point >= price * parseInt(args[0])) {
            if ((users.limit + parseInt(args[0])) >= maximum) return client.reply(m.chat, Func.texted('bold', `🚩 Limit amount you buy exceeds maximum limit.`), m)
            users.point -= price * parseInt(args[0])
            users.limit += parseInt(args[0])
            return client.reply(m.chat, `✅ You have purchased *${args[0]}* limit with *${Func.h2k(price * args[0])}* points.`, m)
         } else {
            client.reply(m.chat, Func.texted('bold', `🚩 You don't have enough points to buy ${Func.formatNumber(args[0])} limit.`), m)
         }
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['buylimit', 'buyall', 'buylimitgame'],
   use: 'amount',
   category: 'user info'
}, __filename)
