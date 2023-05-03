neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Scraper,
   Func
}) => {
  try {
     if (!text) return client.reply(m.chat, Func.example(prefix, command, 'zephyr bot'), m)
     if (text.length > 25) return client.reply(m.chat, `🚩 Text is too long, maximum 25 characters.`, m)
     client.authState.creds.me.name = text
     await props.save(global.db)
     return client.reply(m.chat, `🚩 Name successfully changed.`, m)
  } catch {
     return client.reply(m.chat, Func.texted('bold', `🚩 Name failed to change.`), m)
  }
}, {
  usage: ['changename'],
  use: 'text',
  category: 'owner',
  owner: true
}, __filename)
