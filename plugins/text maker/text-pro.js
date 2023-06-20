const thiccysapi = require('textmaker-thiccy');
neoxr.create(async (m, {
    command,
    text,
    prefix,
    client,
    args,
    Func
  }) => {
    try {
        let old = new Date()
        let maxChar = `🚩 Text is too long max 10 characters.`
        let fail = "Maaf, sepertinya fitur ini sedang eror, silahkan hubungi owner."
        if (command == 'neonlight'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/neon-light-text-effect-online-882.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'neon'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/neon-text-effect-online-879.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'neonglow'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'rainbow'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/rainbow-equalizer-text-effect-902.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'neongradient'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'neongreen'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/green-neon-text-effect-874.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'glitchimp'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'neon3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'neonbee'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/neon-text-effect-online-963.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'thunder'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/online-thunder-text-effect-generator-1031.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'neonbp'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'sunset'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'thunderbee'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-thunder-text-effect-online-881.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'glowadvan'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/free-advanced-glow-text-effect-873.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'blackpink'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-blackpink-logo-style-online-1001.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'glowsliced'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'neongalaxy'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'matrix'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/matrix-style-text-effect-online-884.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'bokeh'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/bokeh-text-effect-876.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'grunge'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'metallic'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-3d-metallic-text-with-details-online-1108.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'comic3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-3d-comic-text-effects-online-1091.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'golden'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-realistic-golden-text-effect-on-red-sparkles-online-1082.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'whitegold'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'deepsea'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'metalbe'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'transformer'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'naruto3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'paint3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'pinksoft'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-pink-soft-gold-text-effect-online-1113.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'liquidmetal'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-3d-liquid-metal-text-effect-1112.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'burger3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-burger-3d-text-effect-1111.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'cagebee'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-cage-text-effect-online-1110.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'typhography'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-artistic-typography-online-1086.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'bpdecor'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-a-blackpink-logo-decorated-with-roses-online-free-1080.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'glass3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-3d-style-glass-text-effect-online-1072.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'orange3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'luxury3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-luxury-3d-emerald-text-effects-online-1126.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'cartoon3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/3d-cartoon-text-effect-generator-online-1123.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'crystal3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/shiny-crystal-3d-style-text-effect-online-1122.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'green3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/green-chrome-3d-text-effect-generator-online-1121.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'cartoonbe'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-3d-cartoon-text-effect-online-1120.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'holo3d'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/hologram-color-3d-text-effect-generator-online-1117.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'crystalbe'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/create-luxury-3d-crystal-text-effects-online-1116.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'icecold'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/ice-cold-text-effect-862.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'nighteven'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'roadwarning'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/road-warning-text-effect-878.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else if (command == 'thewall'){
            if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
            if (text.length > 10) return client.reply(m.chat, Func.texted('bold', maxChar), m)
            client.sendReact(m.chat, '🕒', m.key)
            const url = "https://textpro.me/break-wall-text-effect-871.html"
            const man = await thiccysapi.textpro(url, text)
            if (!man || man.constructor.name != 'String') return client.reply(m.chat, Func.texted('bold', fail), m)
            client.sendFile(m.chat, man, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        }
        } catch (e) {
      client.reply(m.chat, global.status.fail, m)
    }
  }, {
    usage: ['neonlight', 'neon', 'neonglow', 'rainbow', 'neongradient', 'neongreen', 'glitchimp', 'neon3d', 'neonbee', 'thunder', 'neonbp', 'sunset', 'thunderbee', 'glowadvan', 'blackpink', 'glowsliced', 'neongalaxy', 'matrix', 'bokeh', 'grunge', 'metallic', 'comic3d', 'golden', 'whitegold', 'deepsea', 'metalbe', 'transformer', , 'naruto3d', 'paint3d', 'pinksoft', 'liquidmetal', 'burger3d', 'cagebee', 'typhography', 'bpdecor', 'glass3d', 'orange3d', 'luxury3d', 'cartoon3d', 'crystal3d', 'green3d', 'cartoonbe', 'holo3d', 'crystalbe', 'icecold', 'nighteven', 'roadwarning', 'thewall'],
    use: 'text',
    category: 'text maker',
    premium: false,
    private: false,
    owner: false,
    limit: 2,
  }, __filename);
