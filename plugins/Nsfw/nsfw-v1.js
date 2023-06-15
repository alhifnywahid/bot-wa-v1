const akaneko = require('akaneko');
neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
  try {
    if (isNaN(text)) return client.reply(m.chat, Func.example(prefix, command, '10'))
    client.sendReact(m.chat, '🕒', m.key)
    let jo = '*DOSA TANGGUNG SENDIRI!*'
    if (command == 'neko1'){ //===========================
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.neko(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.neko(), '', jo, m)
      } //================================================
    } else if (command == 'lewdneko1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.lewdNeko(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.lewdNeko(), '', jo, m)
      } //================================================
    } else if (command == 'wall1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.wallpapers(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.wallpapers(), '', jo, m)
      } //================================================
    } else if (command == 'mowall1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.mobileWallpapers(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.mobileWallpapers(), '', jo, m)
      } //================================================
    } else if (command == 'ass1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.ass(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.ass(), '', jo, m)
      } //================================================
    } else if (command == 'bdsm1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.bdsm(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.bdsm(), '', jo, m)
      } //================================================
    } else if (command == 'cum1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.cum(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.cum(), '', jo, m)
      } //================================================
    } else if (command == 'doujin1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.doujin(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.doujin(), '', jo, m)
      } //================================================
    } else if (command == 'femdom1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.femdom(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.femdom(), '', jo, m)
      } //================================================
    } else if (command == 'hentai2'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.hentai(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.hentai(), '', jo, m)
      } //================================================
    } else if (command == 'maid1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.maid(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.maid(), '', jo, m)
      } //================================================
    } else if (command == 'orgy1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.orgy(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.orgy(), '', jo, m)
      } //================================================
    } else if (command == 'panties1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.panties(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.panties(), '', jo, m)
      } //================================================
    } else if (command == 'wall2'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.wallpapers(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.wallpapers(), '', jo, m)
      } //================================================
    } else if (command == 'mowall2'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.mobileWallpapers(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.mobileWallpapers(), '', jo, m)
      } //================================================
    } else if (command == 'cuckold1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.cuckold(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.cuckold(), '', jo, m)
      } //================================================
    } else if (command == 'netorare1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.netorare(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.netorare(), '', jo, m)
      } //================================================
    } else if (command == 'gifs1'){
      if (text){
        for (let i = 0; i < text; i++){
        }
      } else{
      } //================================================
      for (let i = 0; i < 3; i++){
        client.sendFile(m.chat, await akaneko.nsfw.gifs(), '', jo, m)
      }
    } else if (command == 'gif1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.gif(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.gif(), '', jo, m)
      } //================================================
    } else if (command == 'blowjob1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.blowjob(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.blowjob(), '', jo, m)
      } //================================================
    } else if (command == 'feet1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.feet(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.feet(), '', jo, m)
      } //================================================
    } else if (command == 'pussy1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.pussy(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.pussy(), '', jo, m)
      } //================================================
    } else if (command == 'ugly1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.uglyBastard(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.uglyBastard(), '', jo, m)
      } //================================================
    } else if (command == 'uniform1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.uniform(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.uniform(), '', jo, m)
      } //================================================
    } else if (command == 'gangbang1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.gangbang(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.gangbang(), '', jo, m)
      } //================================================
    } else if (command == 'foxgirl1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.foxgirl(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.foxgirl(), '', jo, m)
      } //================================================
    } else if (command == 'cumslut1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.cumslut(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.cumslut(), '', jo, m)
      } //================================================
    } else if (command == 'glasses1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.glasses(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.glasses(), '', jo, m)
      } //================================================
    } else if (command == 'thighs2'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.thighs(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.thighs(), '', jo, m)
      } //================================================
    } else if (command == 'tentacles1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.tentacles(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.tentacles(), '', jo, m)
      } //================================================
    } else if (command == 'masturbation1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.masturbation(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.masturbation(), '', jo, m)
      } //================================================
    } else if (command == 'school1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.school(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.school(), '', jo, m)
      } //================================================
    } else if (command == 'yuri1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.yuri(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.yuri(), '', jo, m)
      } //================================================
    } else if (command == 'zettai1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.zettaiRyouiki(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.zettaiRyouiki(), '', jo, m)
      } //================================================
    } else if (command == 'succubus1'){
      if (text){
        for (let i = 0; i < text; i++){
          client.sendFile(m.chat, await akaneko.nsfw.succubus(), '', jo, m)
        }
      } else{
        client.sendFile(m.chat, await akaneko.nsfw.succubus(), '', jo, m)
      } //================================================
    }
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['neko1', 'lewdneko1', 'wall1', 'mowall1', 'ass1', 'bdsm1', 'cum1', 'doujin1', 'femdom1', 'hentai2', 'maid1', 'orgy1', 'panties1', 'wall2', 'mowall2', 'cuckold1', 'netorare1', 'gifs1', 'gif1', 'blowjob1', 'feet1', 'pussy1', 'ugly1', 'uniform1', 'gangbang1', 'foxgirl1', 'cumslut1', 'glasses1', 'thighs2', 'tentacles1', 'masturbation1', 'school1', 'yuri1', 'zettai1', 'succubus1'],
  category: 'nsfw',
  premium: true,
  private: true,
  owner: false,
  limit: 150,
}, __filename);
