const { Scraper } = new(require('@neoxr/neoxr-js'))
const fs = require('fs'),
   FormData = require('form-data'),
   axios = require('axios'),
   cheerio = require('cheerio')

const ezgif = require('./rotate')
   
Scraper.pornDetector = buffer => {
   return new Promise(async resolve => {
      try {
         let form = new FormData()
         form.append('media', buffer)
         form.append('models', 'nudity-2.0,wad,gore')
         form.append('api_user', process.env.API_USER)
         form.append('api_secret', process.env.API_SECRET)
         let result = await axios.post('https://api.sightengine.com/1.0/check.json', form, {
            headers: form.getHeaders()
         })
         if (result.status == 200) {
            if (result.data.status == 'success') {
               if (result.data.nudity.sexual_activity >= 0.50 || result.data.nudity.suggestive >= 0.50 || result.data.nudity.erotica >= 0.50) return resolve({
                  creator: 'NomiSec07-Detector',
                  status: true,
                  msg: `konten 18+ : ${(result.data.nudity.sexual_activity >= 0.50 ? result.data.nudity.sexual_activity * 100 : result.data.nudity.suggestive >= 0.50 ? result.data.nudity.suggestive * 100 :  result.data.nudity.erotica >= 0.50 ? result.data.nudity.erotica * 100 : 0)}%`
               })
               if (result.data.weapon > 0.50) return resolve({
                  creator: 'NomiSec07-Detector',
                  status: true,
                  msg: `Konten provokatif : ${result.data.weapon * 100}%`
               })
            } else return resolve({
               creator: global.creator,
               status: false
            })
         } else return resolve({
            creator: global.creator,
            status: false
         })
      } catch (e) {
         return resolve({
            creator: global.creator,
            status: false,
            msg: e.message
         })
      }
   })
}

Scraper.rotate = async (url, type) => {
    const json = await ezgif(url, type)
    return json
}