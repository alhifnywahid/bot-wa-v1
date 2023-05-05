const { NeoxrCommands: Commands, Function: Func } = new(require('@neoxr/neoxr-js'))
// Owner number
global.owner = '6285936173955' // Owner name
global.owner_name = 'gopret'
// Database name (Default: database)
global.database = 'bot'
// Group anti bot detector
global.anti_bot = ['120363047844384739@g.us']
// Maximum upload file size limit (Default : 50 MB)
global.max_upload = 100
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 0
// User Limitation (Default : 10)
global.limit = 10
// User Game Limitation (Default : 50)
global.limitGame = 10
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '212', '20','595','254']
// Put target jid to forward friends story
global.forwards = ''
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('../neoxrApi'))(process.env.API_KEY)
// Min & Max for game reward
global.min_reward = 1000
global.max_reward = 10000
// Timezone (Default : Asia/Jakarta)
global.timezone = 'Asia/Jakarta'
// Bot version
global.version = '3.0.2',
// weekly reset
global.point = 500
// bof name
global.botname = `Zephyr-Bot v${global.version}`
// Footer text
global.footer = Func.texted('bold', 'Simlple WhatsApp Bot by GOPRET')
// global.webdrive = 'http://nxr.my.id/_v2/'
// Commands
global.neoxr = Commands
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'Processed . . .'),
   invalid: Func.texted('bold', 'URL is Invalid!'),
   wrong: Func.texted('bold', 'Wrong format!'),
   getdata: Func.texted('bold', 'Scraping metadata . . .'),
   fail: Func.texted('bold', 'Can\'t get metadata!'),
   error: Func.texted('bold', 'Error occurred!'),
   errorF: Func.texted('bold', 'Sorry this feature is in error.'),
   premium: Func.texted('bold', 'This feature only for premium user.'),
   owner: Func.texted('bold', 'This command only for owner.'),
   god: Func.texted('bold', 'This command only for Master'),
   group: Func.texted('bold', 'This command will only work in groups.'),
   botAdmin: Func.texted('bold', 'This command will work when I become an admin.'),
   admin: Func.texted('bold', 'This command only for group admin.'),
   private: Func.texted('bold', 'Use this command in private chat.'),
   gameSystem: Func.texted('bold', 'Game features have been disabled.'),
   gameInGroup: Func.texted('italic', 'Fitur permainan dalam grup ini dinonaktifkan.\n\n\nSilakan bergabung ke grup berikut untuk memainkan permainan: https://chat.whatsapp.com/HfbVjUdEIjY0Wg7FsYZIoj.'),
   gameLevel: Func.texted('bold', 'You cannot play the game because your level has reached the maximum limit.')
})
