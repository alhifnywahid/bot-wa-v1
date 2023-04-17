const nodemailer = require('nodemailer')
neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   Func
}) => {
   try {
      if (global.db.users.find(v => v.jid == m.sender).verified) return client.reply(m.chat, Func.texted('bold', `✅ Your number already verified.`), m)
      if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'megachan@gmail.com'), m)
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig.test(args[0])) return client.reply(m.chat, Func.texted('bold', '🚩 Invalid email.'), m)
      let emails = global.db.users.filter(v => v.email).map(v => v.email)
      if (emails.includes(args[0])) return client.reply(m.chat, Func.texted('bold', '🚩 Email already registered.'), m)
      client.sendReact(m.chat, '🕒', m.key)
      let code = `${Func.randomInt(100, 900)}-${Func.randomInt(100, 900)}`
      let users = global.db.users.find(v => v.jid == m.sender)
      users.codeExpire = new Date * 1
      users.code = code
      users.email = args[0]
      const transport = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_APP_PASSWORD
         }
      })
      const mailOptions = {
         from: {
            name: 'Megachan Bot',
            address: process.env.USER_EMAIL
         },
         to: args[0],
         subject: 'Email Verification',
         html: `<div style="padding:20px;border:1px dashed #222;font-size:15px"><tt>Hi <b>${m.pushName} 😘</b><br><br>Confirm your email to be able to use Megachan Bot. Send this code to the bot and it will expire in 3 minutes.<br><center><h1>${code}</h1></center>Or copy and paste the URL below into your browser : <a href="https://wa.me/6287877120437?text=${code}">https://wa.me/6287877120437?text=${code}</a><br><br><hr style="border:0px; border-top:1px dashed #222"><br>Regards, <b>Megachan Bot</b></tt></div>`
      }
      transport.sendMail(mailOptions, function(err, data) {
         if (err) return m.reply(Func.texted('bold', `❌ SMTP Error !!`))
         return client.reply(m.chat, Func.texted('bold', `✅ Check your mailbox to get a verification code.`), m)
      })
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['reg']
}, __filename)
