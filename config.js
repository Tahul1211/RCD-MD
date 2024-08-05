//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcd_1m5i_user:JAv7gj5LnaOKISKaPTz22UzuJqpcIFAO@dpg-cqnuav08fa8c73aul7r0-a.singapore-postgres.render.com/rcd_1m5i";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "919083366564";
global.owner = process.env.OWNER_NUMBER || "919083366564";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NVbTlLUXloT2lnZkF1T0w4UmVROUxHSWpWTWIzMFlwSTZuQmY4YTRVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVZWM1VOVjFNbFFUV1Zla1VzbXAyVk40NkpSY04rZkhtOXJGYWxVMjgzOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQU9XQ1cxSkFMN0dHRHNmZVkxV1hqVk5lcnJmZHRYM2l1Qy9vUG13QldBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJORGhScVN3d0w1WnZBdDVwZXJ1N09WK1VuS2grWXRKSjdiZmNla0c5MlVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjREaWtBNDdCWXRsWWdPWTVCT1ZyNXJ5cUFPZHVLTktZQmczdVpDZnJpMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRiUUdPdC9BdjVabzdFbkNjNXY0Z1RyTlFHZGlkcFdJYld5eVh0UnlMUW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNMbWluSGE1RmZ5UUNQZkdxdnFwSjN3UlhrQ1BaYkJaSEIvYzRaZk8zQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS29KMHpWdlV2cXI0UUJ2cHFNTXBuRnk3aERGczhhVFozOFh3eE5ha0FCbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN5T0cyeW1xcEtZWFRkM2FwN0ZzQ0RiSmU5aDNvYXVGUFhhbWNmY3docEgvMkphakVRNnVjRStRM0tNdGpBOGFuNWh0bUJad0t3bkVMdGt4K0NkN0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiZFlra3NEQmtxdE03eGUrRDh6aG8vRHpuNThsaU1xeG5oZjJ6S2dUQ2NWMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN3RyWVRKdVpTOWVvaERURXlfckNMdyIsInBob25lSWQiOiIzMTI4MzE3Ni1jOGIyLTQ0ZmItYWQyMy1hYmU4ODZjOTg5ZmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTB5RURjTHVrL3VVd1p1T3dGdEJEREl6S3RRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZEY0twUUhoeEM4ZGlFWVdWZjRFaWhQNEl0Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzSzRWWkY3SCIsIm1lIjp7ImlkIjoiOTE5MDgzMzY2NTY0OjcyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuGsiuGsgVByzrnhpZLWn+GNneGltOGlsXNz4ayK4ayBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPNjV6WDRRa01ERXRRWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoOFpOejlJaEhyelovNURYaHVDTVFTN3JmT3NIK1doU0NsWFRiQ0lROXo4PSIsImFjY291bnRTaWduYXR1cmUiOiJObEkwbndWS3pXZHp1ZXJUUEZPaVhZSDZHQmpSS2YrS1pYNloyek5tODVBdlAvaTZBQ0dBTWJqTGhOWlc1cWZrdWFyRVJkY3pGOGtHZlhmTzU5SDJDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicXVHL0ZvZ29UYld5TzFaU3NzQzFRbFpjTDcxVXBMRHlTNnc1ckxqSndLcmJpTm81LzlRTWxiMCs3S1h6aC82TXhSV21yY2x0ZVlYMGF5WEp5b2Y5QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTkwODMzNjY1NjQ6NzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWZHVGMvU0lSNjgyZitRMTRiZ2pFRXU2M3pyQi9sb1VncFYwMndpRVBjLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjg4NDEyNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDL3IifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗔𝗛𝗨𝗟 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇮🇳",
  author: process.env.PACK_AUTHER || "𝗥𝗔𝗛𝗨𝗟",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝗥𝗔𝗛𝗨𝗟 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗔𝗛𝗨𝗟 𝗦𝗔𝗗 𝗕𝗢𝗬",
  errorChat: process.env.ERROR_CHAT || "919083366564",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
