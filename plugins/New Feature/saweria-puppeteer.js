const puppeteer = require('puppeteer');
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   isBotAdmin,
   Func
}) => {
   try {
      client.sendReact(m.chat, '🕒', m.key)
      const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
      const page = await browser.newPage();
      await page.goto('https://saweria.co/gopret', { waitUntil: 'load' });
      await page.locator('.css-ss1a6n').click();
      await page.locator('#from').fill('user bot');
      await page.locator('#email').fill('userbot@gmail.com');
      await page.locator('#message').fill('buy premium');
      await page.locator('#__next > div > div > div.css-9lvh98 > form > div:nth-child(5) > label > span.chakra-checkbox__label.css-7venl8 > p').click();
      await page.locator('#__next > div > div > div.css-9lvh98 > form > div:nth-child(6) > label > span.chakra-checkbox__label.css-7venl8 > p').click();
      await page.locator('.css-8dhnyr').click();
      await page.locator('#__next > div > div > div.css-9lvh98 > form > div.css-137bylj > div:nth-child(1) > button').click();
    
      await page.waitForSelector('.qr-image')
      
      const srcValue = await page.evaluate(() => {
        const imgElement = document.querySelector('.qr-image');
        if (imgElement) return imgElement.getAttribute('src');
        return null; // Return null if no imgElement is found
      });
    client.sendFile(m.chat, srcValue, '', '', m)
    await browser.close();
   } catch (e) {
      client.reply(m.chat, '*Maaf fitur ini mungkin sedang eror!, Silahkan hubungi owner.*', m)
      console.log(e)
   }
}, {
   cache: true,
   usage: ['saweriapay'],
   hidden: [],
   use: '',
   category: 'a new feature',
   group: false,
   premium: false
}, __filename)
