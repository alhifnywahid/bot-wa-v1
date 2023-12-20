neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  Func
}) => {
 try {
  if (!text) return client.reply(m.chat, Func.example(prefix, command, 'cara merubah dosa menjadi saldo dana?'), m)
  client.sendReact(m.chat, '🕒', m.key)
  import("bard-ai").then(async ({ default: Bard }) => {
     const myBard = new Bard({
       "__Secure-1PSID": process.env.___Secure_1PSID,
       "__Secure-1PSIDTS": process.env.___Secure_1PSIDTS,
     });
     const final = await myBard.ask(text)
     client.reply(m.chat, final, m)
   });
 } catch (e) {
    client.reply(m.chat, '*Maaf fitur ini mungkin sedang eror!, Silahkan hubungi owner.*', m)
    console.log(e)
 }
}, {
    usage: ['bard'],
    use: 'query',
    category: 'searching',
    limit: 2,
    premium: false,
    fitai: true
}, __filename)